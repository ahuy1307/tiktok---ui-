import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Images';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountItem({ data, hoverActive = false }) {
   return (
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
         <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
         <div className={cx('info')}>
            <p className={cx('name')}>
               <p>{data.full_name}</p>
               {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />}
            </p>
            <p className={cx('user-name')}>{data.nickname}</p>
         </div>
      </Link>
   );
}

AccountItem.propTypes = {
   data: PropTypes.object.isRequired,
};

export default AccountItem;
