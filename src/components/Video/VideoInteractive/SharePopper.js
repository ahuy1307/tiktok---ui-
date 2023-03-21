import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SharePopper.module.scss';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

const cx = classNames.bind(styles);
function SharePopper({ children, data = [] }) {
   const [showMore, setShowMore] = useState(false);

   const dataShare = showMore ? data : data.slice(0, 5);

   return (
      <Tippy
         // visible
         placement="top-start"
         interactive
         offset={[, 4]}
         delay={[0, 400]}
         arrow="true"
         popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }} //Fix bug when vi tri bị đẩy
         //  hideOnClick="false"
         render={(attrs) => (
            <PopperWrapper className={cx('share-list', { more: showMore })} tabIndex="-1" {...attrs}>
               <div className={cx('arrow-popper', { arrowTop: true })} data-popper-arrow />
               {dataShare.map((item, index) => {
                  return (
                     <Button className={cx('btn')} key={index} href={item.href} leftIcon={item.icon}>
                        {item.title}
                     </Button>
                  );
               })}
               {!showMore && (
                  <div className={cx('btn-more')} onClick={() => setShowMore(true)}>
                     <FontAwesomeIcon icon={faChevronDown} />
                  </div>
               )}
            </PopperWrapper>
         )}
         onHidden={() => setShowMore(false)}
      >
         {children}
      </Tippy>
   );
}

export default SharePopper;
