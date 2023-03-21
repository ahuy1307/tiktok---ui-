import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { loginData, registerData, MENU_ITEM } from '~/temp/login';
import ModalWrapper from './ModalWrapper';
const cx = classNames.bind(styles);
const defaulFn = () => {};

function LoginModal({ isShow, hide, onChange = defaulFn }) {
   const [register, setRegister] = useState(false);
   const [showMore, setShowMore] = useState(true);
   const [history, setHistory] = useState([{ title: loginData.title, data: loginData.data }]);
   const current = history[history.length - 1];

   const render = () => {
      return current.type === 'component' ? (
         <>
            <current.data />
         </>
      ) : (
         current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
               <div className={cx('list')} key={index}>
                  <button
                     className={cx('item', { disabled: item.disabled })}
                     onClick={() => {
                        if (isParent) {
                           setHistory((prev) => [...prev, item.children]);
                        } else {
                           onChange(item);
                        }
                     }}
                  >
                     <span className={cx('icon')}>{item.icon}</span>
                     <span className={cx('item-title')}>{item.title}</span>
                  </button>
               </div>
            );
         })
      );
   };

   const handleBack = () => {
      setHistory((prev) => {
         prev.splice(prev.length - 1, 1);
         return [...prev];
      });
   };

   const handleHide = () => {
      hide();
      setHistory((prev) => {
         setRegister(false);
         setShowMore(true);
         registerData.data = registerData.data.slice(0, 3);
         prev = [{ title: loginData.title, data: loginData.data }];
         prev.slice(0, 1);
         return [...prev];
      });
   };

   const handleRegister = () => {
      setRegister(!register);
      setHistory((prev) => [{ title: registerData.title, data: registerData.data }]);
   };

   const handleLogin = () => {
      setRegister(!register);
      setHistory((prev) => {
         setShowMore(true);
         registerData.data = registerData.data.slice(0, 3);
         prev = [{ title: loginData.title, data: loginData.data }];
         return [...prev];
      });
   };

   const handleShowMore = () => {
      registerData.data.push(...MENU_ITEM);
      setShowMore(false);
      setHistory((prev) => [{ title: registerData.title, data: registerData.data }]);
   };

   return isShow
      ? ReactDOM.createPortal(
           <ModalWrapper classname={register}>
              {history.length > 1 && (
                 <FontAwesomeIcon icon={faChevronLeft} className={cx('btn-back')} onClick={handleBack} />
              )}

              <FontAwesomeIcon icon={faClose} className={cx('btn-close')} onClick={handleHide} />
              <h2 className={cx('title')}>{current.title}</h2>

              {render()}

              {register && showMore && history.length == 1 && (
                 <FontAwesomeIcon icon={faChevronDown} onClick={handleShowMore} style={{ cursor: 'pointer' }} />
              )}

              {register && (
                 <p className={cx('policy')}>
                    Bằng cách tiếp tục, bạn đồng ý với <span>Điều khoản Sử dụng</span> của TikTok và xác nhận rằng bạn
                    đã đọc hiểu <span>Chính sách Quyền riêng tư</span> của TikTok.
                 </p>
              )}

              <footer>
                 {register ? 'Already have an account?' : 'Don’t have an account?'}
                 {register ? (
                    <span className={cx('register')} onClick={handleLogin}>
                       Login
                    </span>
                 ) : (
                    <span className={cx('register')} onClick={handleRegister}>
                       Sign up
                    </span>
                 )}
              </footer>
           </ModalWrapper>,
           document.body,
        )
      : null;
}

export default LoginModal;
