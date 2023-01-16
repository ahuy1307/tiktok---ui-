import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faKeyboard, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import TippyToast from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
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
import Image from '~/components/Images';
import Search from '../Search';

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
