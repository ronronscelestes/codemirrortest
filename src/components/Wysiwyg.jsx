import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import * as CodeMirror from "codemirror";

import "./codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/gfm/gfm.js";
import "codemirror/mode/markdown/markdown.js";

import { replaceText, insertText } from "./../utils";

function Wysiwyg({ value, onChange }) {
  let textareaRef = useRef(null);
  let editor = useRef(null);

  // const [ul, setUl] = useState(false);
  // const [ol, setOl] = useState(false);

  const [checked, setChecked] = useState(false);

  useLayoutEffect(() => {
    editor.current = CodeMirror.fromTextArea(textareaRef.current, {
      lineNumbers: true,
      theme: "dracula",
      // mode: "gfm",
      lineWrapping: true,
    });

    // editor.current.addKeyMap({ Enter: () => console.log("enter") }, true);


    editor.current.setValue(value);
    editor.current.on("change", handleChange);
  }, []);

  // useEffect(() => setChecked(prev => !prev), [])

  const handleChange = (doc, change) => {
    onChange(doc.getValue());
    // console.log(checked);

    console.log(doc.getValue());

    const { line } = doc.getCursor();
    const currentTextLine = doc.getLine(line);
    if (currentTextLine === "- ") {
      // setUl(prevUlState => 'holà');
      // console.log(ul);
    }

    // if(currentTextLine === '1.') setOl(true);
    //if ul/ol state true
    //if key enter
    //if prev line longer than n char
    //start next line with li
  };

  const handleClick = (e) => {
    const textToEdit = editor.current.getSelection();
    let textToInsert;

    if (textToEdit) {
      const editedText = replaceText(e.target.name, textToEdit);
      //create 1 function to replace and focus?
      editor.current.replaceSelection(editedText);
      editor.current.focus();
    } else {
      textToInsert = insertText(e.target.name);
      //create 1 function to replace and focus?
      editor.current.replaceSelection(textToInsert.editedText);
      editor.current.focus();

      //set selection-focus to text to replace with content
      const { line, ch } = editor.current.getCursor();
      const endSelection = ch - textToInsert.selection.end;
      const startSelection =
        ch - textToInsert.selection.end - textToInsert.selection.start;
      console.log(startSelection, endSelection);

      editor.current.setSelection(
        { line, ch: startSelection },
        { line, ch: endSelection }
      );
    }
  };

  return (
    <>
      <textarea ref={textareaRef} />
      <button name="bold" onClick={handleClick}>
        Bold
      </button>
      <button name="italic" onClick={handleClick}>
        Italic
      </button>
      <button name="underline" onClick={handleClick}>
        Underline
      </button>
      <button name="strike" onClick={handleClick}>
        Strike
      </button>
      <button name="code" onClick={handleClick}>
        Code
      </button>
      <button name="textLink" onClick={handleClick}>
        Link
      </button>
      <button name="quote" onClick={handleClick}>
        Quote
      </button>
    </>
  );
}

export default Wysiwyg;
