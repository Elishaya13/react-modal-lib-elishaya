import React from 'react';
import styles from './modal.module.css';

const Icon: React.FC<{
  styleIcon: 'check' | 'error' | 'none';
  iconColor?: string;
}> = ({ styleIcon, iconColor }) => {
  switch (styleIcon) {
    case 'error':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill={iconColor}
          width='64'
          height='64'
          className={styles.icon}
          viewBox='0 0 24 24'
          preserveAspectRatio='xMidYMid meet'
        >
          <path d='M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36-1.41 1.42z' />
        </svg>
      );
    case 'check':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill={iconColor}
          width='64'
          height='64'
          className={styles.icon}
          viewBox='0 0 24 24'
          preserveAspectRatio='xMidYMid meet'
        >
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m5.56 7.74-6.39 6.4a1 1 0 0 1-1.42-.01l-3.3-3.34-.01-.01a.993.993 0 0 1 .01-1.4.996.996 0 0 1 1.41 0l2.6 2.62 5.68-5.69a.996.996 0 0 1 1.41 0v.02h.01c.39.39.39 1.02 0 1.41' />
        </svg>
      );
    case 'none':
      return null;
  }
};

export default Icon;
