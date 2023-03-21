import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Scrollbars as CustomScrollBar } from 'react-custom-scrollbars-2';

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
import SuggestedAccounts from '~/layouts/components/Sidebar/SuggestedAccounts/SuggestedAccounts';
import Navigation from './Navigation';
import { useState } from 'react';
import useModal from '~/hooks/useModal';
import LoginModal from '~/components/Modal/LoginModal';

const cx = classNames.bind(styles);

function Sidebar() {
   const [hideScrollbar, setHideScrollbar] = useState(true);
   const { isShow, toggle } = useModal();

   const customScrollbar = (className) => {
      return (props) => <div className={cx(className)} {...props}></div>;
   };

   return (
      <aside className={cx('wrapper')}>
         <div className={cx('inner-fixed')}>
            <CustomScrollBar
               hideTracksWhenNotNeeded
               autoHide={hideScrollbar}
               autoHideTimeout={0}
               renderView={customScrollbar('scrollbar-view')}
               renderTrackVertical={customScrollbar('scrollbar-track')}
               renderThumbVertical={customScrollbar('scrollbar-thumb')}
               onMouseEnter={() => setHideScrollbar(false)}
               onMouseLeave={() => setHideScrollbar(true)}
            >
               <Menu>
                  <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                  <MenuItem
                     title="Following"
                     to={routes.following}
                     icon={<UserGroupIcon />}
                     iconActive={<UserGroupActiveIcon />}
                  />
                  <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />

                  <Navigation onClick={toggle} />
                  <LoginModal isShow={isShow} hide={toggle} />
                  <SuggestedAccounts title="Suggested Accounts" btn="See all" />
                  <SuggestedAccounts title="Following Accounts" btn="See more" />
               </Menu>
            </CustomScrollBar>
         </div>
      </aside>
   );
}

export default Sidebar;
