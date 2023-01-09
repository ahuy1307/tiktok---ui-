import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1663032433476609.jpeg?x-expires=1673413200&x-signature=Gd%2B%2BCfexrWOZ0xosjP5%2FR7R2maU%3D"
            alt=""
         />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <p>Nguyen Van A</p>
               <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
            </p>
            <p className={cx('user-name')}>nguyenvana</p>
         </div>
      </div>
   );
}

export default AccountItem;
