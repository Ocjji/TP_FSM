import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from './../styled/HomeStyled';
import {AiOutlineGlobal} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import {BiUser} from 'react-icons/bi'
const Header = () => {
    const [headerFixed, setHeaderFixed] = useState(false)
    // window.addEventListener('scroll',e=>{
    //         setHeaderFixed(window.scrollY>50)
    // })
    const clickLink =()=>{
        window.scrollTo({top:0})
    }
    
    return (
        <HeaderWrap>
            <div className={`header ${headerFixed?'on':''}`}>
                <div className='inner'>
                    <h1><Link to={'/'} onClick={clickLink}><img src='https://via.placeholder.com/100x50' alt='풋볼스쿼드메이커' /></Link></h1>
                    <div className="top_menu">
                        <Link to={'/'} onClick={clickLink}><i><AiOutlineGlobal/></i></Link>
                        <Link to={'/'} onClick={clickLink}><i><BsCart3/></i></Link>
                        <Link to={'/login'} onClick={clickLink}><i><BiUser/></i></Link>
                    </div>
                    <nav className="nav">
                        <ul className="gnb">
                            <li><Link to={'/'} onClick={clickLink}>All Players</Link></li>
                            <li><Link to={'/'} onClick={clickLink}>Squad Maker</Link></li>
                            <li><Link to={'/game_schedule'} onClick={clickLink}>Game Schedule</Link></li>
                            <li><Link to={'/'} onClick={clickLink}>Notice</Link></li>
                            <li><Link to={'/news'} onClick={clickLink}>News</Link></li>
                            <li><Link to={'/'} onClick={clickLink}>Store</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </HeaderWrap>
    );
};

export default Header;