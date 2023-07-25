import React from 'react';
import { FooterWrap } from '../styled/HomeStyled';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa'
import { RiKakaoTalkFill } from 'react-icons/ri'
import { BsYoutube } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
    const goUp = () => {
        window.scrollTo({ top: 0 })
    }
    return (
        <FooterWrap>
            <div className="inner">
                <div className='links'>
                    <div className='terms'>
                        <span><Link to={'/'}>개인정보처리방침</Link></span>
                        <span><Link to={'/'}>이용약관</Link></span>
                        {/* <span><Link to={'/login'}>마이페이지</Link></span> */}
                    </div>
                    <div className="sns">
                        <i><FaFacebookSquare /></i>
                        <i><AiOutlineInstagram /></i>
                        <i><RiKakaoTalkFill /></i>
                        <i><BsYoutube /></i>
                    </div>
                </div>
                <div className='info'>
                    <p className='company'>(주) 풋볼스쿼드메이커</p>
                    <p><span>대표이사 : 김형종</span><span>사업자등록번호 : 122-71-00000</span></p>
                    <p><span>전화번호 : 032-232-0000</span><span>팩스 : 032-232-0000</span></p>
                    <p><span>주소 : 인천광역시 연수구 벚꽃로 00, 두손메카빌딩 506호</span></p>
                    <p className='copyfright'>Copyright ⓒ FOOTBALL CLUB All Rights Reserved.</p>
                </div>
                <div className='logo'><Link to={'/'} onClick={goUp}><img src="./images/visual/logo.png" alt="풋볼스쿼드메이커" /></Link></div>
            </div>
        </FooterWrap>
    );
};

export default Footer;