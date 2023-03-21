import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';

import AccountItem from './AccountItem';
import { accountService } from '~/services';
import config from '~/config';

import { useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ title, btn }) {
   const [accounts, setAccounts] = useState([]);
   const [seeAll, setSeeAll] = useState(false);

   const { getTotalAccounts: total, getSuggestedAccounts: show } = config.accounts;

   const currentItems = seeAll ? accounts : accounts.slice(0, show);
   const btnTitle = seeAll ? 'See less' : btn;

   useEffect(() => {
      const fetchApi = async () => {
         const result = await accountService.getSuggestedAccount(total);

         setAccounts(result.data);
      };

      fetchApi();
   }, []);
   const handleToggleSeeAll = () => {
      setSeeAll(!seeAll);
   };

   return (
      <div className={cx('wrapper')}>
         <p className={cx('title')}>{title}</p>
         {currentItems.map((item, index) => {
            return <AccountItem data={item} key={index} />;
         })}
         <p className={cx('btn')} onClick={handleToggleSeeAll}>
            {btnTitle}
         </p>
      </div>
   );
}

SuggestedAccounts.propTypes = {
   title: PropTypes.string.isRequired,
   btn: PropTypes.string,
};

export default SuggestedAccounts;
