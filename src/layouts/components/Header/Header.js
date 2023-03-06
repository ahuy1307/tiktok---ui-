import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faKeyboard, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import TippyToast from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import LoginModal from '~/components/Modal/LoginModal';

import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';
import { Link } from 'react-router-dom';
import config from '~/config';
import useModal from '~/hooks/useModal';
import { MENU_ITEMS, userMenu } from '~/temp/user';
const cx = classNames.bind(styles);

function Header() {
   const currentUser = false;

   const { isShow, toggle } = useModal();

   const handleMenuChange = (menuItem) => {
      console.log(menuItem);
   };

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo')}>
               <img src={images.logo.default} alt="" />
            </Link>

            {/* Search */}
            <Search />

            {/* Actions */}
            <div className={cx('actions')}>
               {currentUser ? (
                  <div className={cx('current-user')}>
                     <Button text leftIcon={<FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />}>
                        Upload
                     </Button>
                     <TippyToast delay={[0, 0]} content="Message">
                        <button className={cx('action-btn', 'message-icon')}>
                           <MessageIcon />
                        </button>
                     </TippyToast>
                     <TippyToast delay={[0, 0]} content="Inbox">
                        <button className={cx('action-btn', 'inbox-icon')}>
                           <InboxIcon />
                        </button>
                     </TippyToast>
                  </div>
               ) : (
                  <>
                     <Button text leftIcon={<FontAwesomeIcon icon={faPlus} className={cx('plus-icon')} />}>
                        Upload
                     </Button>
                     <Button primary to="/" onClick={toggle}>
                        Log in
                     </Button>
                     <LoginModal isShow={isShow} hide={toggle} />
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image
                        src="https://tinypng.com/images/example-shrunk.png"
                        alt=""
                        className={cx('user-avatar')}
                        fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
