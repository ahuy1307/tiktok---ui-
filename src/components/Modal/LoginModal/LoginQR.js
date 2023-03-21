import classNames from 'classnames/bind';
import styles from './LoginQR.module.scss';

import images from '~/assets/images';
import { ScanQRIcon, UserPlusIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function LoginQR() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('left')}>
            <div className={cx('img-code')}>
               <img src={images.qrCode} alt="" />
            </div>
            <div className={cx('content')}>
               <p className={cx('item')}> 1. Mở ứng dụng TikTok trên thiết bị di động của bạn</p>
               <p className={cx('item')}>
                  2. Trên Hồ sơ, nhấn vào
                  <UserPlusIcon />
               </p>
               <p className={cx('item')}>
                  3. Nhấn vào <ScanQRIcon /> rồi quét mã QR để xác nhận thông tin đăng nhập của bạn
               </p>
            </div>
         </div>
         <div className={cx('right')}>
            <div className={cx('gif')}>
               <img src={images.qrCode_gif} alt="" />
            </div>
         </div>
      </div>
   );
}

export default LoginQR;
