import React, { useRef, useLayoutEffect, useEffect } from 'react';
import * as CodeMirror from 'codemirror';

import './codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/markdown/markdown.js'

import { replaceText } from './../utils'

function Wysiwyg({ value, onChange }) {
    let textareaRef = useRef(null);
    let editor = useRef(null);

    useLayoutEffect(() => {
        editor.current = CodeMirror.fromTextArea(textareaRef.current, {
            lineNumbers: true,
            theme: 'dracula',
            mode: 'gfm',
            lineWrapping: true
        })

        editor.current.setValue(value);
        editor.current.on('change', handleChange)
    }, [])

    const handleChange = (doc, change) => {
        console.log('changes')
        onChange(doc.getValue());
    }

    const handleClick = (e) => {
        const textToEdit = editor.current.getSelection();
        const editedText = replaceText(e.target.name, textToEdit);
        console.log(editedText)
        editor.current.replaceSelection('kikou');
    }


    return (
        <>
            <textarea ref={textareaRef} />
            <button name='bold' onClick={handleClick}>Bold</button>
            <button name='italic' onClick={handleClick}>Italic</button>
            <button name='underline' onClick={handleClick}>Underline</button>
            <button name='strike' onClick={handleClick}>Strike</button>
        </>
    )
}

export default Wysiwyg
