import React, { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { format } from 'date-fns';
import { AppContext } from '@/context/app.context';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMemu } = useContext(AppContext);
  return (
    <div>
      <ul>
        {menu.map((el) => (
          <li key={el._id.secondCategory}>{el._id.secondCategory}</li>
        ))}
      </ul>
    </div>
  );
};
