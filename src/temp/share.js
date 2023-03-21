const {
   EmbedIcon,
   SendIcon,
   FacebookIcon,
   WhatAppIcon,
   LinkIcon,
   TwitterIcon,
   LineIcon,
   MailIcon,
} = require('~/components/Icons');

export const share = [
   {
      title: 'Embed',
      icon: <EmbedIcon />,
   },
   {
      title: 'Send to friends',
      icon: <SendIcon />,
   },
   {
      title: 'Share to Facebook',
      icon: <FacebookIcon width={26} height={26} />,
      href: 'https://www.facebook.com/',
   },
   { title: 'Share to WhatsApp', icon: <WhatAppIcon />, href: 'https://api.whatsapp.com/' },
   {
      title: 'Copy link',
      icon: <LinkIcon />,
   },
   {
      title: 'Share to Twitter',
      icon: <TwitterIcon />,
      href: 'https://twitter.com/',
   },
   {
      title: 'Send to LINE',
      icon: <LineIcon />,
      href: 'https://line.me/en/',
   },
   {
      title: 'Share to Facebook',
      icon: <FacebookIcon width={26} height={26} />,
      href: 'https://www.facebook.com/',
   },
   {
      title: 'Share to Email',
      icon: <MailIcon />,
      href: 'mailto:phamanhhuy22@gmail.com',
   },
];
