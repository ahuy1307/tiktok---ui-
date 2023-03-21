import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Images from '~/components/Images';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import { MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
   return (
      <Tippy
         //  visible
         interactive
         delay={[800, 0]}
         placement="bottom-start"
         render={(attrs) => (
            <div tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <AccountPreview data={data} />
               </PopperWrapper>
            </div>
         )}
         appendTo={document.body}
      >
         <Link to={`/@${data.user.nickname}`}>
            <div className={cx('item')}>
               <Images src={data.user.avatar} alt="" className={cx('avatar')} />
               <div className={cx('content')}>
                  <p className={cx('user-name')}>
                     {data.user.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                     <strong>{data.user.nickname}</strong>
                     <p className={cx('name')}>{`${data.user.first_name} ${data.user.last_name}`}</p>
                  </p>
                  <p className={cx('description')}>{data.description}</p>
               </div>
            </div>
            <div className={cx('music')}>
               <MusicIcon />
               {data.music || `Nhạc nền  - ${data.user.first_name} ${data.user.last_name}`}
            </div>
         </Link>
      </Tippy>
   );
}

export default AccountItem;
