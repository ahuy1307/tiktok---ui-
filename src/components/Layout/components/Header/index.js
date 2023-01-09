import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo.default} alt="" />
            </div>
            <div className={cx('search')}>
               <input type="text" placeholder="Search accounts and videos" />
               <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
               {/* Loading */}
               <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
               <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
               </button>
            </div>
            <div className={cx('action')}></div>
         </div>
      </header>
   );
}

export default Header;
