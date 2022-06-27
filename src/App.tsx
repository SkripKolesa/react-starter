import React from 'react';
import styles from './App.module.scss';
import {Hello} from '@/features/hello';

function App() {
  const helloParams = {name: 'Artemka', id: 1};
  return (
    <>
      <p className={styles.test}>Happy hacking hell o world</p>
      <Hello {...helloParams}/>
    </>
  );
}

export default App;
