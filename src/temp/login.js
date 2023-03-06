import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import {
   KakaoTalkIcon,
   FacebookIcon,
   QRIcon,
   LineIcon,
   TwitterIcon,
   AppleIcon,
   InstagramIcon,
   ProfileIcon,
   GoogleIcon,
} from '~/components/Icons';

export const loginData = {
   title: 'Get more of what you love when you log in to TikTok',
   data: [
      {
         title: 'Use QR code',
         icon: <QRIcon />,
         children: {
            title: 'Login with QR code',
            data: null,
         },
      },
      {
         title: 'Use phone/ email/ username',
         icon: <ProfileIcon />,
         children: {
            title: 'Login',
            data: null,
         },
      },
      {
         title: 'Continue with Facebook',
         icon: <FacebookIcon />,
         disabled: true,
      },
      {
         title: 'Continue with Google',
         icon: <GoogleIcon />,
         disabled: true,
      },
      {
         title: 'Continue with Twitter',
         icon: <TwitterIcon />,
         disabled: true,
      },
      {
         title: 'Continue with LINE',
         icon: <LineIcon />,
         disabled: true,
      },
      {
         title: 'Continue with KakaoTalk',
         icon: <KakaoTalkIcon />,
         disabled: true,
      },
      {
         title: 'Continue with Apple',
         icon: <AppleIcon />,
         disabled: true,
      },
      {
         title: 'Continue with Instagram',
         icon: <InstagramIcon />,
         disabled: true,
      },
   ],
};
