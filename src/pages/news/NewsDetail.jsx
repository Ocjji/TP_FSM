import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {MdDateRange} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import {RiKakaoTalkFill} from 'react-icons/ri'
import { NewsDetailWrap } from '../../styled/NewsStyled';
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import { useSelector } from 'react-redux';

const NewsDetail = () => {
    const { newsID } = useParams()
    const {newsData} = useSelector(state=>state.newsR)
    const currentPage = newsData.find(item=>item.id === Number(newsID))
    const prevPage = newsData.find(item=>item.id === Number(newsID)-1)
    const nextPage = newsData.find(item=>item.id === Number(newsID)+1)
    const {id, title, date, view, img, desc} = currentPage
    const clickLink=()=>{
        window.scrollTo({top:0})
    }
    return (
        <NewsDetailWrap>
            <div className="newsDetail">
                <div className='title'>
                    <h3>{title}</h3>
                    <div className='date'>
                        <span><i><MdDateRange/></i>{date}</span>
                        <span><i className='xi-eye-o'></i>{view.toLocaleString()}</span>
                        <div className='icon'>
                            <i><AiOutlineLink/></i>
                            <i><BiLogoFacebook/></i>
                            <i><RiKakaoTalkFill/></i>
                        </div>
                    </div>
                </div>
                <div className='txt'>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {
                            img.map((item,idx)=><SwiperSlide key={idx}><div className='imgbox'><img src={item} alt={title} /></div></SwiperSlide>)
                        }
                    </Swiper>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="btnWrap">
                <p><button onClick={clickLink}><Link to={'/news'}>목록으로</Link></button></p>
                {
                    newsID < newsData.length &&
                    <p className='btn bordertop'>
                        <Link to={`/news/${Number(newsID)+1}`} onClick={clickLink}>
                            <span>다음글</span>
                            <strong>{nextPage.title}</strong>
                        </Link>
                    </p>
                }
                {
                    newsID > 1 &&
                    <p className='btn'>
                    
                        <Link to={`/news/${Number(newsID)-1}`}  onClick={clickLink}>
                            <span>이전글</span>
                            <strong>{prevPage.title}</strong>
                            </Link>
                    </p>
                }
                
            </div>
        </NewsDetailWrap>
    );
};

export default NewsDetail;