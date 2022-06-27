import * as React from 'react';
import styles from './Hello.module.scss';

export type HelloProps = {
  name: string
}

export const Hello = ({name}: HelloProps): JSX.Element => {
  return (
      <div> Hello, {name}!</div>
  )
}
