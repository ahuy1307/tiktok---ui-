import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

function ModalWrapper({ children, classname }) {
   return (
      <React.Fragment>
         <div className={cx('overlay')} />
         <div className={cx('wrapper', { 'form-register': classname })}>
            <div className={cx('modal')}>{children}</div>
         </div>
      </React.Fragment>
   );
}

export default ModalWrapper;
