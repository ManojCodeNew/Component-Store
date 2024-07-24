import React, { useEffect, useRef, useState } from 'react';
import "./MainArea.css";


export default function Main() {
  const [htmlcode, sethtmlcode] = useState('');
  const [csscode, setcsscode] = useState('');
  const [jscode, setjscode] = useState('');

  const outputRef=useRef(null);
// useEffect(()=>{
  const run=()=>{

  
  const iframe=outputRef.current;
  if (iframe) {
      iframe.contentWindow.document.body.innerHTML=htmlcode+"<style>"+csscode+"</style>";
      iframe.contentWindow.eval(jscode);
  }
}
// },[htmlcode,csscode,jscode]);
  return (
    <>
      <div className="container">
        <div className="left">
          <label id='html-label'>HTML</label>
          <textarea
            id='html-code'
            placeholder='Enter the code'
            value={htmlcode}
            onChange={(e) => sethtmlcode(e.target.value)}>
          </textarea>

          <label id='css-label'>CSS</label>
          <textarea
            id='css-code'
            placeholder='Enter the code'
            value={csscode}
            onChange={(e) => setcsscode(e.target.value)}>
          </textarea>

          <label id='js-label'>Javascript</label>
          <textarea
            id='js-code'
            placeholder='Enter the code'
            value={jscode}
            onChange={(e) => setjscode(e.target.value)}>

          </textarea>
        </div>

        <div className="right">
          <label>RUN</label>
          <iframe ref={outputRef}></iframe>
        </div>
      </div>

<div className="runBtn">
  <button onClick={run}>RUN</button>
</div>
    </>
  )
}
