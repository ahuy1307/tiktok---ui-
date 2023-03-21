import { useState, useEffect } from 'react';
import { videoService } from '~/services';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoItem from '~/components/Video/VideoItem';

const cx = classNames.bind(styles);

function Home() {
   const [videoList, setVideoList] = useState([]);
   const [page, setPage] = useState(2);

   useEffect(() => {
      const getVideo = async () => {
         const result = await videoService.getSuggestedVideo(page);
         result.data.sort(() => Math.random() - 0.5);

         setVideoList([...videoList, ...result.data]);
      };

      getVideo();
   }, []);

   return (
      <div className={cx('wrapper')}>
         {videoList.map((item, index) => (
            <VideoItem key={index} data={item} />
         ))}
      </div>
   );
}

export default Home;
