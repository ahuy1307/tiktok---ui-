import classNames from 'classnames/bind';
import styles from './VideoInteractive.module.scss';

import { CommentIcon, ShareIcon, TymIcon } from '~/components/Icons';
import useModal from '~/hooks/useModal';
import LoginModal from '~/components/Modal/LoginModal';
import { share } from '~/temp/share';
import SharePopper from './SharePopper';

const cx = classNames.bind(styles);

function VideoInteractive({ item }) {
   const { isShow, toggle } = useModal();
   return (
      <div className={cx('interactive-space')}>
         <div className={cx('interactive-item')} onClick={toggle}>
            <i>
               <TymIcon className={cx('icon')} />
            </i>
            <span>{item.comments_count}</span>
         </div>
         <LoginModal isShow={isShow} hide={toggle} />
         <div className={cx('interactive-item')} onClick={toggle}>
            <i>
               <CommentIcon className={cx('icon')} />
            </i>
            <span>{item.likes_count}</span>
         </div>
         <SharePopper data={share}>
            <div className={cx('interactive-item')}>
               <i>
                  <ShareIcon className={cx('icon')} />
               </i>
               <span>{item.shares_count || 'Chia sẻ'}</span>
            </div>
         </SharePopper>
      </div>
   );
}

export default VideoInteractive;
