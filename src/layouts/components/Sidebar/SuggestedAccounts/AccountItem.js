import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Images from '~/components/Images';
import { Link } from 'react-router-dom';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
   return (
      <Tippy
         // visible
         interactive
         delay={[800, 0]}
         placement="bottom-start"
         render={(attrs) => (
            <div tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <AccountPreview data={data} />
               </PopperWrapper>
            </div>
         )}
         appendTo={document.body}
      >
         <Link to={`/@${data.nickname}`}>
            <div className={cx('item')}>
               <Images src={data.avatar} alt="" className={cx('avatar')} />
               <div className={cx('content')}>
                  <p className={cx('user-name')}>
                     <strong>{data.nickname}</strong>
                     {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}
                  </p>
                  <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
               </div>
            </div>
         </Link>
      </Tippy>
   );
}

export default AccountItem;
