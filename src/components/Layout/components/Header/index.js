import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faPlus,
   faEllipsisVertical,
   faKeyboard,
   faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import TippyToast from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import {
   CoinsIcon,
   InboxIcon,
   MessageIcon,
   ProfileIcon,
   SettingIcon,
   LanguageIcon,
   FeedbackIcon,
} from '~/components/Icons';
import Image from '~/components/Image';

const MENU_ITEMS = [
   {
      icon: <LanguageIcon />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FeedbackIcon />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shorcuts',
   },
];

const cx = classNames.bind(styles);

function Header() {
   const [searchResult, setSearchResult] = useState([1]);

   const currentUser = true;

   const userMenu = [
      {
         icon: <ProfileIcon />,
         title: 'View profile',
         to: '/profile',
      },
      {
         icon: <CoinsIcon />,
         title: 'Get coins',
         to: '/coin',
      },
      {
         icon: <SettingIcon />,
         title: 'Settings',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
         title: 'Log out',
         to: '/logout',
         seperate: true,
      },
   ];
   const handleMenuChange = (menuItem) => {
      console.log(menuItem);
   };

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo.default} alt="" />
            </div>
            <Tippy
               interactive
               // visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input type="text" placeholder="Search accounts and videos" />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  {/* Loading */}
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>

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
                     <Button primary>Log in</Button>
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
