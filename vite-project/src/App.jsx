import React, { useState } from 'react';
import RippleDemo from './ripple';

function App() {
  const [state, setState] = useState({}); 

  return (
    <div className="app">
      <RippleDemo />
    </div>
  );
}

export default App;
