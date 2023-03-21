import { useState, useEffect } from 'react';
import Button from '../Button';

import classNames from 'classnames/bind';
import styles from './DownloadApp.module.scss';
import { ScrollToTopIcon } from '../Icons';
import useModal from '~/hooks/useModal';
import { ModalDownloadApp } from './ModalDownloadApp';

const cx = classNames.bind(styles);

function DowloadApp() {
   const [show, setShow] = useState(false);
   const [scroll, setScroll] = useState(false);
   const { isShow, toggle } = useModal();

   useEffect(() => {
      window.addEventListener('scroll', handleWhenScrolling);
      return () => {
         window.removeEventListener('scroll', handleWhenScrolling);
      };
   }, []);

   const handleWhenScrolling = () => {
      if (window.scrollY > 0) setScroll(true);
      else setScroll(false);
   };

   const handleScrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   return (
      <div className={cx('wrapper')}>
         <Button rounded className={cx('btn')} onClick={toggle}>
            Get App
         </Button>
         <ModalDownloadApp isShow={isShow} hide={toggle} />
         {scroll && (
            <div className={cx('scroll')} onClick={handleScrollToTop}>
               <i className={cx('icon-scroll')}>
                  <ScrollToTopIcon />
               </i>
            </div>
         )}
      </div>
   );
}

export default DowloadApp;
