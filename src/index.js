import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import { Controlled as CodeMirror } from "react-codemirror2";
// // import "codemirror/mode/javascript/javascript";
// // import "codemirror/lib/codemirror.css";
// import React, { useState } from 'react';

// // import * as CodeMirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
// // import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript.js'
// import 'codemirror/mode/gfm/gfm.js';

// import './App.css';

// function App() {
//   const [content, setContent] = useState(`const hello = 'kikou';\n# hello`);
//   const [editor, setEditor] = useState();

//   // useEffect(() => {
//   //   CodeMirror.fromTextArea(editor, {
//   //     value: content,
//   //     lineNumbers: true,
//   //     theme: 'dracula', 
//   //     mode: 'gfm'
//   //   })
//   // }, [content])


//   const toggleCodeMirrorMode = () => {
//     const codeMirrorMode = editor.getOption('mode');
//     if(codeMirrorMode === 'gfm') editor.setOption('mode', 'javascript');
//     else editor.setOption('mode', 'gfm');
//   }

//   const handleMouseUp = () => {
//     let textHighlighted = window.getSelection().toString();
//     if(textHighlighted === '' || textHighlighted === ' ') return;
    
//     var selection = window.getSelection().getRangeAt(0);
//     var selectedText = selection.extractContents();
//     var span = document.createElement("span");
//     span.classList.add('blue');
//     span.appendChild(selectedText);  
//     selection.insertNode(span);
//   }
  
//   return (
//     <div className="App">
//       <CodeMirror 
//         onMouseDown={() => console.log('mouse up')}
//         value={content}
//         options={{
//             theme: 'dracula',
//             mode: 'javascript',
//             lineNumbers: true
//         }}
//         onBeforeChange={(editor, data, value) => {
//           setContent(value);
//         }}
//         onChange={(editor, data, value) => {setContent(value)}}
//         editorDidMount={editor => {setEditor(editor)}}
//       />
//       {/* <textarea 
//         ref={self => editor = self} 
//         value={content} 
//         id='editor' 
//         onChange={(editor, data, value) => {setContent(value)}}
//       /> */}
//       <button onClick={toggleCodeMirrorMode}>toggle</button> 
//       <button onClick={handleMouseUp}>Click</button> 
//       <p>hello you</p>
//     </div>
//   );
// }

// export default App;

