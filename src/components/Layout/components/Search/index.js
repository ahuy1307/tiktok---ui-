import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useRef, useState } from 'react';
import * as searchServices from '~/apiServices/searchService';
import { useDebounce } from '~/hooks';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [focused, setFocused] = useState(false);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef();

   const debounced = useDebounce(searchValue, 500);
   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }

      setLoading(true);

      //    request
      //       .get('/users/search', {
      //          params: {
      //             q: debounced,
      //             type: 'less',
      //          },
      //       })
      //       .then((res) => {
      //          setSearchResult(res.data);
      //          setLoading(false);
      //       })
      //       .catch(() => setLoading(false));

      //Use async func in useEffect
      // const fetchApi = async () => {
      //    try {
      //       const res = await request.get('/users/search', {
      //          params: {
      //             q: debounced,
      //             type: 'less',
      //          },
      //       });
      //       setSearchResult(res.data);
      //       setLoading(false);
      //    } catch (error) {
      //       setLoading(false);
      //    }
      // };

      // fetchApi();

      //Use searchServices
      const fetchApi = async () => {
         setLoading(true);
         const result = await searchServices.search(debounced);

         setSearchResult(result);
         setLoading(false);
      };

      fetchApi();
   }, [debounced]);

   const handleClear = () => {
      setSearchValue('');
      inputRef.current.focus();
   };

   return (
      <Tippy
         interactive
         visible={searchResult.length > 0 && focused}
         render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {searchResult.map((item) => {
                     return (
                        <AccountItem
                           key={item.id}
                           avatar={item.avatar}
                           nickname={item.nickname}
                           full_name={item['full_name']}
                           tick={item.tick}
                        />
                     );
                  })}
               </PopperWrapper>
            </div>
         )}
         onClickOutside={() => setFocused(false)}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search accounts and videos"
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setFocused(true)}
            />
            {searchValue && !loading && (
               <button className={cx('clear')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {/* Loading */}
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </Tippy>
   );
}

export default Search;
