import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Navigation() {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('content')}>Log in to follow creators, like videos, and view comments.</p>
         <Button outline className={cx('btn')}>
            Log in
         </Button>
      </div>
   );
}

export default Navigation;
