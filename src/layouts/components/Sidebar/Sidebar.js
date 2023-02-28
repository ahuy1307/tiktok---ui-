import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import routes from '~/config/routes';

import Menu, { MenuItem } from './Menu';
import {
   HomeIcon,
   UserGroupIcon,
   LiveIcon,
   HomeActiveIcon,
   UserGroupActiveIcon,
   LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
            <MenuItem
               title="Following"
               to={routes.following}
               icon={<UserGroupIcon />}
               iconActive={<UserGroupActiveIcon />}
            />
            <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
         </Menu>
      </aside>
   );
}

export default Sidebar;
