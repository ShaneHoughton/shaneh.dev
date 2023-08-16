import classes from './CodeSnippet.module.css';
import { useState, useRef } from 'react';

const CodeSnippet = (props) => {
  const [showOutput, setShowOutput] = useState(false);
  const [loading, setLoading] = useState('');
  const [outputString, setOutputString] = useState('');
  const input = props.input;
  let intervalRef = useRef(null);

  const load = (inputString, durationInSeconds) => {
    setOutputString('')
    let result = inputString;
    let dots = '';
    intervalRef.current = setInterval(() => {
      dots += '.';
      result = inputString + dots;

      setLoading(result);

      if (dots.length >= durationInSeconds) {
        clearInterval(intervalRef.current);
        setShowOutput(true);
        setLoading(null);
        buildOutput(props.output);
      }

    }, 10);

  }

  const sleep = (ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const stopInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    // setShowOutput(false);
    // setOutputString('');
    setLoading(null);
  }

  const buildOutput = async (output) => {
    const correctedString = JSON.stringify(output);
  
    const parsedObject = JSON.parse(correctedString);
  
    const formatObject = (obj, indent) => {
      const pad = ' '.repeat(indent);
      return JSON.stringify(obj, null, 2).split('\n').map(line => pad + line).join('\n');
    }
  
    const formattedString = formatObject(parsedObject, 0);
    let result = '';
    for (let i = 0; i < formattedString.length; i++) {
      if(!intervalRef.current){
        break;
      }
      result += formattedString[i];
      setOutputString(result);
      await sleep(5);
  }
  clearInterval(intervalRef.current);

  if (intervalRef.current) {
    setOutputString(formattedString);
  }
  }
  
  return (
    <>
      <div className={`${classes.snippet}`}>
        <div className={classes.buttons}>
          <div className={classes['run-button']} onClick={() => { load('', 3) }}></div>
          <div className={classes['restart-button']} onClick={() => { stopInterval() }}></div>
         
        </div>
      
        <code className={`${classes.input}`}>
          {input.map((line, index)=><div key={index}>{line}</div>)}
        </code>
        <br></br>
        {loading}
        {showOutput &&
          <code className={`${classes.output}`}>
            <pre>
            {outputString}
            </pre>
          </code>
        }
      </div>
    </>
  )
}

export const CodeLine = (props) => {
  return (
    <div>
      {props.children}
      <br></br>
    </div>
  )
}

export default CodeSnippet;
