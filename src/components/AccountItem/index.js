import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Images';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItem({ avatar, nickname, full_name, tick }) {
   return (
      <Link to={`/@/${nickname}`} className={cx('wrapper')}>
         <Image className={cx('avatar')} src={avatar} alt={nickname} />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <p>{full_name}</p>
               {tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />}
            </p>
            <p className={cx('user-name')}>{nickname}</p>
         </div>
      </Link>
   );
}

export default AccountItem;
