import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './EmailModal.module.scss';
import { HidePassIcon, ShowPassIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function LoginEmail() {
   const [show, setShow] = useState(false);
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');

   const handleEmail = (e) => {
      if (e.target.value !== ' ') setEmail(e.target.value);
   };

   const handlePass = (e) => {
      if (e.target.value !== ' ') setPass(e.target.value);
   };

   const handleToggleShow = () => setShow(!show);
   return (
      <div className={cx('wrapper')}>
         <p className={cx('title')}>Email or Tiktok ID</p>
         <div className={cx('form-input')}>
            <input type="text" value={email} placeholder="Email or Tiktok ID" onChange={handleEmail} />
         </div>
         <div className={cx('form-input')}>
            <input type={show ? 'text' : 'password'} placeholder="Password" onChange={handlePass} />
            <div className={cx('icon')} onClick={handleToggleShow}>
               {show ? <ShowPassIcon /> : <HidePassIcon />}
            </div>
         </div>
         <span className={cx('forgot')}>Forgot password?</span>
         <Button primary className={cx('btn')}>
            Login
         </Button>
      </div>
   );
}

export default LoginEmail;
