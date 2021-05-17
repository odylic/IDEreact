import React, { useState } from 'react';
import Editor from './Editor';


function App() {
  // uses hooks, html is the variable, setHtml is the function
  const [html, setHtml] = useState('')

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language='xml'
          displayName='HTML'
          // writes in the editor the html
          value={html}
          // uses the function setHtml to update the html in the editor everytime something is changed
          onChange={setHtml}
        />
        <Editor />
        <Editor />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
