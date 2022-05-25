import React, { useRef } from "react";
//import ReactDOM from "react-dom";
import {parseAndGetChichi,parseAndGetSyntaxErrors,y2salams} from "./parser.ts";
import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  
  function showValue() {
    let s=parseAndGetSyntaxErrors(editorRef.current.getValue());
    if(s==="no error")  s=parseAndGetChichi(editorRef.current.getValue());
    alert(s);
    document.getElementById('result').innerHTML = s;
  }
  function y2salam() {
    let s=y2salams();
    document.getElementById('result').innerHTML = s;
  }

  return (
   <>
     <button onClick={showValue}>Compile and Run</button>
     <button onClick={y2salam}>Good morning</button>
    <Editor
       height="50vh"
       defaultLanguage="salam"
       defaultValue="Salam narges!"
       theme='vs-dark'
       onMount={handleEditorDidMount}
     />
     <div id="result">
      
     </div>
   </>
  );
}

export default App;

