import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './EmailModal.module.scss';
import { HidePassIcon, ShowPassIcon } from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function RegisterEmail() {
   const [show, setShow] = useState(false);
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [rePassword, setRePassword] = useState('');

   const handleEmail = (e) => {
      if (e.target.value !== ' ') setEmail(e.target.value);
   };

   const handlePass = (e) => {
      if (e.target.value !== ' ') setPass(e.target.value);
   };

   const handleToggleShow = () => setShow(!show);
   return (
      <div className={cx('wrapper')}>
         <p className={cx('title')}>Email</p>
         <div className={cx('form-input')}>
            <input type="text" value={email} placeholder="Email" onChange={handleEmail} />
         </div>
         <div className={cx('form-input')}>
            <input type={show ? 'text' : 'password'} value={pass} placeholder="Password" onChange={handlePass} />
            <div className={cx('icon')} onClick={handleToggleShow}>
               {show ? <ShowPassIcon /> : <HidePassIcon />}
            </div>
         </div>
         <div className={cx('form-input')}>
            <input
               type="password"
               value={rePassword}
               placeholder="Re-enter password"
               onChange={(e) => setRePassword(e.target.value)}
            />
         </div>
         <span className={cx('policy')}>
            <label className={cx('checkbox')}>
               <input type="checkbox" hidden />
               <span className={cx('box')}></span>
            </label>
            <span>
               Nhận nội dung thịnh hành, bản tin, khuyến mại, đề xuất và thông tin cập nhật tài khoản được gửi đến email
               của bạn
            </span>
         </span>
         <Button primary className={cx('btn', { disabled: !email || !pass || !rePassword })}>
            Next
         </Button>
      </div>
   );
}

export default RegisterEmail;
