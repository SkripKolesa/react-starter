import * as React from 'react';
import styles from './Hello.module.scss';
import {BaseEntity} from '@/types';

export type HelloProps = BaseEntity & {
  name: string
};

export const Hello = ({name}: HelloProps): JSX.Element => {
  return (
      <div className = {styles.test}> Hello, {name}!</div>
  )
}
