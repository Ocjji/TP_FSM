import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderWrap } from './../styled/HomeStyled';
import { AiOutlineGlobal } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { resetCurrentPerPosts } from '../store/modules/newsSlice';
const Header = () => {
    // const [headerFixed, setHeaderFixed] = useState(false)
    // window.addEventListener('scroll',e=>{
    //         setHeaderFixed(window.scrollY>50)
    // })
    const dispatch = useDispatch()
    const goUp = () => {
        window.scrollTo({ top: 0 })
    }
    const location = useLocation()
    return (
        <HeaderWrap>
            {/* <div className={`header ${headerFixed ? 'on' : ''}`}> */}
            <div className='header'>
                <div className='inner'>

                    <h1><Link to={'/'} onClick={goUp}><img src='./images/visual/logo_white.png' alt='풋볼스쿼드메이커' /></Link></h1>

                    <div className="top_menu">
                        <Link to={'/'} onClick={goUp}><i><AiOutlineGlobal /></i></Link>
                        <Link to={'/cart'} onClick={goUp}><i><BsCart3 /></i></Link>
                        <Link to={'/login'} onClick={goUp}><i><BiUser /></i></Link>
                    </div>

                    <nav className="nav">
                        <ul className="gnb">
                            <li><Link to={'/playerInfo'} onClick={goUp}>All Players</Link></li>
                            <li><Link to={'/squad'} onClick={goUp}>Squad Maker</Link></li>
                            <li><Link to={'/game_schedule'} className={location.pathname === '/game_schedule' ? 'on' : ''} onClick={goUp}>Game Schedule</Link></li>
                            <li><Link to={'/notice'} onClick={goUp}>Notice</Link></li>
                            <li><Link to={'/news'} onClick={() => { goUp(), dispatch(resetCurrentPerPosts()) }}>News</Link></li>
                            <li><Link to={'/store'} onClick={goUp}>Store</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderWrap>
    );
};

export default Header;