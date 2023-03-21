import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './ModalDownloadApp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import ModalWrapper from './ModalWrapper';
import images from '~/assets/images';
import Images from '~/components/Images';

const cx = classNames.bind(styles);

function ModalDownloadApp({ isShow, hide }) {
   return isShow
      ? ReactDOM.createPortal(
           <ModalWrapper>
              <div className={cx('modal-header')}>
                 <h2>Get the Tiktok App</h2>
                 <FontAwesomeIcon icon={faClose} className={cx('btn-close')} onClick={hide} />
              </div>
              <div className={cx('modal-content')}>
                 <h3>Scan QR code to download TikTok</h3>
                 <Images src={images.qrCode_download} className={cx('img-qr')} />
                 <h4>Download from app stores</h4>

                 <div className={cx('modal-download')}>
                    <a
                       href="https://apps.microsoft.com/store/detail/tiktok/9NH2GPH4JZS4?hl=en-usgl=usrtc=1"
                       target="_blank"
                    >
                       <Images src={images.down_microsoft} className={cx('item-download')} />
                    </a>
                    <a href="https://apps.apple.com/MY/app/id1235601864?mt=8" target="_blank">
                       <Images src={images.down_appstore} className={cx('item-download')} />
                    </a>
                    <a href="https://www.amazon.com/dp/B07KR1RJL2/" target="_blank">
                       <Images src={images.down_amazon} className={cx('item-download')} />
                    </a>
                    <a
                       href="https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&referrer=af_tranid%3DXggeLgSOFk-3IYwm7MGu5w"
                       target="_blank"
                    >
                       <Images src={images.down_googleplay} className={cx('item-download')} />
                    </a>
                 </div>
              </div>
           </ModalWrapper>,
           document.body,
        )
      : null;
}

export default ModalDownloadApp;
