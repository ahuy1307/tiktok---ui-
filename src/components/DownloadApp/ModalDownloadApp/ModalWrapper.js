import React from 'react';
import classNames from 'classnames/bind';
import styles from './ModalWrapper.module.scss';

const cx = classNames.bind(styles);

function ModalWrapper({ children }) {
   return (
      <React.Fragment>
         <div className={cx('overlay')} />
         <div className={cx('wrapper')}>
            <div className={cx('modal')}>{children}</div>
         </div>
      </React.Fragment>
   );
}

export default ModalWrapper;
