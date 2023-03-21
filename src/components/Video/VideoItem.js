import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';

import { AccountItem } from './AccountItem';
import Button from '../Button';
import VideoControl from './VideoControl';
import { VideoInteractive } from './VideoInteractive';

const cx = classNames.bind(styles);

function VideoItem({ data }) {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <AccountItem data={data} />
            <Button outline className={cx('btn')}>
               Follow
            </Button>
         </div>
         <div className={cx('video-item')}>
            <VideoControl data={data} />
            <VideoInteractive item={data} />
         </div>
      </div>
   );
}

export default VideoItem;
