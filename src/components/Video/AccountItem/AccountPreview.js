import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import Images from '~/components/Images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
   return (
      <div className={cx('preview')}>
         <div className={cx('preview-container')}>
            <Images className={cx('avatar')} src={data.user.avatar} alt="" />
            <Button outline className={cx('btn')}>
               Follow
            </Button>
         </div>
         <Link to={`/@${data.user.nickname}`} className={cx('user-name')}>
            <strong>{data.user.nickname}</strong>
            {data.user.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
         </Link>
         <Link
            to={`/@${data.user.nickname}`}
            className={cx('name')}
         >{`${data.user.first_name} ${data.user.last_name}`}</Link>
         <div>
            <span className={cx('count')}>{data.user.followers_count}</span>
            <span className={cx('follower')}>Followers</span>
            <span className={cx('count')}>{data.user.likes_count}</span>
            <span className={cx('like')}>Likes</span>
         </div>
         <div className={cx('bio')}>
            <p>{data.user.bio}</p>
         </div>
      </div>
   );
}

export default AccountPreview;
