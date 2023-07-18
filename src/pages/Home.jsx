import React from 'react';
import { HomeWrap } from '../styled/HomeStyled';
import newsData from '../assets/api/newsData.json'
import NewsList from './news/NewsList';
import { Swiper, SwiperSlide } from "swiper/react" // basic
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
const Home = () => {
    const newsFilterData = newsData.slice(-4).sort((a,b)=>b.id - a.id)
    return (
        <HomeWrap>
            <div className='visual1'>
                <p><Link to={'/'}><strong>Squad Maker</strong><i className='xi-long-arrow-right'></i></Link></p>
            </div>
            <div className='visual2'>
                <div className="inner">
                    <ul>
                        <li><Link to={'/'}>
                            <div>
                                <img src="./images/visual/visual1.jpg" alt="" />
                            </div>
                            <p><strong>All Players</strong><i className='xi-long-arrow-right'></i></p>
                            </Link></li>
                        <li><Link to={'/'}>
                            <div>
                                <img src="./images/visual/notice.png" alt="" />
                            </div>
                            <p><strong>Game Schedule</strong><i className='xi-long-arrow-right'></i></p>
                            </Link></li>
                        <li><Link to={'/'}>
                            <div>
                                <img src="./images/visual/visual7.png" alt="" />
                            </div>
                            <p><strong>Notice</strong><i className='xi-long-arrow-right'></i></p>
                            </Link></li>
                    </ul>
                </div>
                {/* <p>Game GameSchedule</p> */}
            </div>
            <div className='visual3'>
                <p><Link to={'/'}><span>상품구매</span><i className='xi-long-arrow-right'></i></Link></p>
            </div>
            <div className='visual4'>
                <h3>latest news</h3>
                <ul className='newsList'>
                    {
                        newsFilterData.map(item=><NewsList key={item.id} item={item}/>)
                    }
                </ul>
                <p><Link to={'/'}><span>더보기</span><i className='xi-long-arrow-right'></i></Link></p>
            </div>
            
        </HomeWrap>
    );
};

export default Home;