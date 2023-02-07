import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

import routes from '~/config/routes';
import Search from '~/components/Layout/components/Search';

const publicRoutes = [
   //Not login
   { path: routes.home, component: Home },
   { path: routes.following, component: Following },
   { path: routes.profile, component: Profile },
   { path: routes.upload, component: Upload, layout: HeaderOnly },
   { path: routes.search, component: Search, layout: null },
];

const privateRoutes = [
   //Force login to read data
];

export { publicRoutes, privateRoutes };
