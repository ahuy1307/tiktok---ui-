import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import ModalWrapper from './ModalWrapper';
import { loginData } from '~/temp/login';
import { useState } from 'react';

const cx = classNames.bind(styles);

function LoginModal({ isShow, hide }) {
   const [history, setHistory] = useState([{ data: loginData.data }]);
   const current = history[history.length - 1];

   return isShow
      ? ReactDOM.createPortal(
           <ModalWrapper>
              <FontAwesomeIcon icon={faClose} className={cx('btn-close')} onClick={hide} />
              <h2 className={cx('title')}>{loginData.title}</h2>
              <div className={cx('list')}>
                 {current.data.map((item, index) => (
                    <button key={index} className={cx('item', { disabled: item.disabled })}>
                       <span className={cx('icon')}>{item.icon}</span>
                       <span className={cx('item-title')}>{item.title}</span>
                    </button>
                 ))}
              </div>
           </ModalWrapper>,
           document.body,
        )
      : null;
}

export default LoginModal;
