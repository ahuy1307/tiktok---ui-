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
            <Images className={cx('avatar')} src={data.avatar} alt="" />
            <Button primary className={cx('btn')}>
               Follow
            </Button>
         </div>
         <Link to={`/@${data.nickname}`} className={cx('user-name')}>
            <strong>{data.nickname}</strong>
            {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
         </Link>
         <Link to={`/@${data.nickname}`} className={cx('name')}>{`${data.first_name} ${data.last_name}`}</Link>
         <div>
            <span className={cx('count')}>{data.followers_count}</span>
            <span className={cx('follower')}>Followers</span>
            <span className={cx('count')}>{data.likes_count}</span>
            <span className={cx('like')}>Likes</span>
         </div>
      </div>
   );
}

export default AccountPreview;
