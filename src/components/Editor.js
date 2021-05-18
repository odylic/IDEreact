import React, {useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from 'react-codemirror2';


export default function Editor(props) {
  const {language, displayName, value, onChange} = props;
  const [open, setOpen] = useState(true);

  function handleChange(editor, date, value) {
    onChange(value);
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'} `}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          className="expand-collapse-btn"
        >
          {open ? 'Click to Close' : 'Click to Open'}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrappings: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}
