import classNames from 'classnames/bind';
import styles from './VideoControl.module.scss';
import Images from '~/components/Images';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function VideoControl({ data }) {
   const videoWidth = data.meta.video.resolution_x;
   const videoHeight = data.meta.video.resolution_y;

   const directionVideoClass = videoWidth - videoHeight < 0 ? 'vertical' : 'horizontal';

   return (
      <div className={cx('player-space', directionVideoClass)}>
         <div className={cx('default-space')}>
            <Images
               src={data.thumb_url}
               fallback={directionVideoClass ? images.imageTransparentVertical : images.imageTransparentHorizontal}
            />
            <video className={cx('video')} src={data.file_url}></video>
         </div>
      </div>
   );
}

export default VideoControl;
