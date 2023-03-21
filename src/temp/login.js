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
import LoginEmail from '~/components/Modal/LoginModal/LoginEmail';
import LoginQR from '~/components/Modal/LoginModal/LoginQR';
import RegisterEmail from '~/components/Modal/LoginModal/RegisterEmail';

export const MENU_ITEM = [
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
];
export const loginData = {
   title: 'Log in to TikTok',
   data: [
      {
         title: 'Use QR code',
         icon: <QRIcon />,
         children: {
            title: 'Login with QR code',
            type: 'component',
            data: LoginQR,
         },
      },
      {
         title: 'Use phone/ email/ username',
         icon: <ProfileIcon />,
         children: {
            title: 'Login',
            type: 'component',
            data: LoginEmail,
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
      ...MENU_ITEM,
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

export const registerData = {
   title: 'Sign up for Tiktok',
   data: [
      {
         title: 'Use phone or email',
         icon: <ProfileIcon />,
         children: {
            title: 'Sign up',
            type: 'component',
            data: RegisterEmail,
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
   ],
};
