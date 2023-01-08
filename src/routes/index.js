import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

const publicRoutes = [
   //Kh can login cung xem duoc
   { path: '/', component: Home },
   { path: '/following', component: Following },
   { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [
   //Phai login moi xem duoc
];

export { publicRoutes, privateRoutes };
