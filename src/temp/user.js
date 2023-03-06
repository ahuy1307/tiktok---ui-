import { CoinsIcon, ProfileIcon, SettingIcon, LanguageIcon, FeedbackIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export const MENU_ITEMS = [
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

export const userMenu = [
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
