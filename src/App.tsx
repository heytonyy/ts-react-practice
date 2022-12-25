import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from './views/Main';

// make arrow function, name: App, return type: React.FC
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
