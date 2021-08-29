import React, { useRef } from "react";
//import ReactDOM from "react-dom";
import {parseAndGetChichi} from "./parser";
import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  
  function showValue() {
    let s=parseAndGetChichi(editorRef.current.getValue());
    alert(s);
    document.getElementById('result').innerHTML = s;
  }

  return (
   <>
     <button onClick={showValue}>Compile and Run</button>
     <Editor
       height="50vh"
       defaultLanguage="salam"
       defaultValue="Salam Narges!"
       onMount={handleEditorDidMount}
     />
     <div id="result">
      
     </div>
   </>
  );
}

export default App;