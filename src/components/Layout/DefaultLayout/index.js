import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import Sidebar from './Sidebar';
import Home from '~/pages/Home';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
