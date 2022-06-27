import React from 'react';
import './App.scss';
import {Hello} from '@/features/hello';

function App() {
  const helloParams = {name: 'Artemka'};
  return (
    <Hello {...helloParams}/>
  );
}

export default App;
