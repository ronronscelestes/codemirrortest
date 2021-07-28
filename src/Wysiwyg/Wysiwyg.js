import React, { useRef, useLayoutEffect } from 'react';

import CodeMirror from 'codemirror';
import './codemirror.css';
import 'codemirror/mode/markdown/markdown.js';

const Wysiwyg = ({ value, onChange }) => {
    const textareaRef = useRef(null);
    const editor = useRef(null);

    useLayoutEffect(() => {
        editor.current = CodeMirror.fromTextArea(textareaRef.current, {
            mode: 'markdown',
            lineWrapping: true
        });

        editor.current.setValue(value);
        editor.current.on('change', handleChange)

    }, []);

    const handleChange = (doc) => {
        onChange(doc.getValue());
    };

    return (
        <>
            <textarea ref={textareaRef}></textarea>
        </>
    )
}

export default Wysiwyg
