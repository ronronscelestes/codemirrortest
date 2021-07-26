import React, { useState } from 'react';
import Wysiwyg from './components/Wysiwyg';

import './App.css';

function App() {
  const [value, setValue] = useState(`
  Hello
  Holà
  Good morning
  `);
  console.log('state updated ' + value)

  return (
    <div className="App">
      <Wysiwyg value={value} onChange={setValue} />
    </div>
  );
}

export default App;
