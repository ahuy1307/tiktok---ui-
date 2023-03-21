import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Live from '~/pages/Live';

import config from '~/config';
import Search from '~/layouts/components/Search';

const publicRoutes = [
   //Not login
   { path: config.routes.home, component: Home },
   { path: config.routes.following, component: Following },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
   { path: config.routes.search, component: Search, layout: null },
   { path: config.routes.live, component: Live },
];

const privateRoutes = [
   //Force login to read data
];

export { publicRoutes, privateRoutes };
