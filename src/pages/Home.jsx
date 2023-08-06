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
    const goUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <HomeWrap>
            <div className='visual1'>
                <div className="inner">
                    <p onClick={goUp}><Link to={'/squad'}><strong>Squad Maker</strong><i className='xi-long-arrow-right'></i></Link></p>

                </div>
            </div>
            <div className='visual2'>
                <div className="inner">
                    <ul>
                        <li><Link to={'/PlayerInfo'} onClick={goUp}>
                            <div>
                                <img src="./images/visual/visual1.jpg" alt="" />
                            </div>
                            <p><strong>All Players</strong><i className='xi-long-arrow-right'></i></p>
                            </Link></li>
                        <li><Link to={'/game_schedule'} onClick={goUp}>
                            <div>
                                <img src="./images/visual/notice.png" alt="" />
                            </div>
                            <p><strong>Game Schedule</strong><i className='xi-long-arrow-right'></i></p>
                            </Link></li>
                        <li><Link to={'/notice'} onClick={goUp}>
                            <div>
                                <img src="./images/visual/visual3.png" alt="" />
                            </div>
                            <p><strong>Notice</strong><i className='xi-long-arrow-right'></i></p>
                            </Link></li>
                    </ul>
                </div>
            </div>
            <div className='visual3'>
                <div className="inner">
                <Link to={'/store'}  onClick={goUp}><p><i className='xi-long-arrow-right'></i></p></Link>
                </div>
            </div>
            <div className='visual4'>
                <h3>latest news</h3>
                <ul className='newsList'>
                    {
                        newsFilterData.map(item=><NewsList key={item.id} item={item}/>)
                    }
                </ul>
                <p><Link to={'/news'} onClick={goUp}><span>더보기</span><i className='xi-long-arrow-right'></i></Link></p>
            </div>
            
        </HomeWrap>
    );
};

export default Home;