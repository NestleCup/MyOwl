import React from 'react';
import CheckIcon from './icon.svg';
import styles from './Advantages.module.css';
import { HhAdvantagesProps } from './Advantages.props';

export const Advantages = ({ advantages }: HhAdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((item) => (
        <div key={item._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{item.title}</div>
          <hr className={styles.vline} />
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
};
