import {keyframes, styled} from 'styled-components'
import { inner, mainColor, subColor } from './commonStyled'

export const bg={
    backgroundPosition: '0px 0px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width:'100%'
}
const arrow = keyframes`
    0%{transform:translateX(0px)}
    50%{transform:translateX(10px)}
    100%{transform:translateX(0px)}
`
export const HomeWrap = styled.div`
    p{
        a{
            color: #fff;
            border-bottom: 1px solid #fff;
            border-top: 1px solid #fff;
            padding: 10px 15px 10px 25px;
            font-size: 30px;
            i{
                padding: 20px;
            }
        }
    }
    .visual1{
        margin-top: 120px;
        ${bg}
        background-image: url('../../public/images/visual5.jpg');
        height: 900px;
        position: relative;
        p{
            position: absolute;
            bottom: 130px;
            right: 300px;
            a{
                background: rgba(92, 133, 85,0.6);
                i{
                    animation: ${arrow} 0.7s infinite ease-in-out;

                }
            }
        }
    }

    .visual2{
        .inner{
            ${inner}
            padding: 100px 0px;
        }
        ul{
            display: flex;
            justify-content: space-between;
            li{
                width: 400px;
                height: 450px;
                position: relative;
                cursor: pointer;
                &:hover{
                    &::after{
                        content:"";
                        position: absolute;
                        top: -8px;left: -8px;
                        border: 8px solid ${subColor};
                        display: block;
                        width: 400px;
                        height: 450px;
                    }
                    p{
                        color: ${subColor};
                        font-weight: 700;
                        strong{
                            color: ${subColor};
                        }
                    }
                }
                &:hover i{
                            animation: ${arrow} 0.7s infinite ease-in-out;
                        }
                a{
                    div{
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        img{
                            height: 100%;
                        }
                    }
                    p{
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        color: #fff;
                        width: 400px;
                        box-sizing: border-box;
                        background: rgba(0,0,0,0.8);
                        padding: 20px 0px;
                        text-align: center;
                        strong{
                            color:#fff;
                            padding-right: 15px;
                            font-size: 25px;
                        }
                        i{
                            font-size: 25px;
                        }
                    }
                }
            
                &:nth-child(1) img{
                    transform: translateX(-100px);
                }
                &:nth-child(2) img{
                    transform: translate(-500px, -125px) scale(1.2);
                }
                &:nth-child(3) div{
                        background: #000;
                    img{
                    transform: translate(-1300px, -45px) scale(0.8);
                    }
                }
            }    
        }
    }
    
    .visual4{
        ${inner}
        margin-top: 50px;
        margin-bottom: 30px;
        h3{
            font-size: 40px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        p{
            text-align: center;
            a{
                color: #999;
                border-top:1px solid #999;
                border-bottom:1px solid #999;
                font-size: 18px;
                &:hover i{
                    animation: ${arrow} 0.7s infinite ease-in-out;
                }
            }
        }
        .newsList{
                display: flex;
                flex-wrap: wrap;
                li{
                    box-sizing: border-box;
                    width: 21%;
                    margin-right: 5%;
                    margin-bottom: 50px;
                    &:hover{
                        box-shadow: 1px 1px 5px #999;
                        img{
                            transform: scale(1.2);
                        }
                        
                    }
                    &:nth-child(4n){
                        margin-right: 0px;
                    }
                    .imgbox{
                        overflow: hidden;
                        img{
                            width: 100%;
                            transition: 0.5s;
                        }
                    }
                    h3{
                        margin: 10px 0px;
                        font-size: 18px;
                        font-weight: 700;
                        padding: 0px 10px;
                    }
                    .date_view{
                        padding: 0px 10px 10px;
                        
                        span{
                            color: #999;
                            display: inline-block;
                            margin-right: 20px;
                            position: relative;
                            &:first-child::after{
                                content: "";
                                display: block;
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                right: -10px;
                                width: 1px;
                                height: 16px;
                                background: #999;
                            }
                            i{
                                vertical-align: middle;
                                margin-right: 5px;
                                &.xi-eye-o{
                                    vertical-align: -10%;
                                    font-size: 18px;
                                }
                                &:hover{
                                    animation: ${arrow} 0.7s infinite ease-in-out;
                                }
                            }
                        }
                    }
                }
            }
    }
    .visual3{
        ${bg}
        width: 100%;
        background-image: url('../../public/images/playstore.png');
        height: 600px;
        position: relative;
        p{
            position: absolute;
            top: 260px;
            left: 650px;
            a{
                i{
                    animation: ${arrow} 0.7s infinite ease-in-out;
                }
            }
        }
    }
`

export const HeaderWrap = styled.div`
    width: 100%;
   
    .header{
        width: 100%;
        background: rgba(194, 0, 39,0.9);
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 120px;
        z-index: 10;
        display: block;
        .inner{
            width: 1400px;
            margin: auto;
            position: relative;
            box-sizing: border-box;
            h1{
                position: absolute;
                top: 35px;
                left: 0;
            }
            .top_menu{
                position: absolute;
                top: 25px;
                right: 0;
                a{
                    margin-left: 10px;
                    i{
                        color: #fff;
                    }
                }
            }
            .nav{
                position: absolute;
                top: 45px;
                left: 50%;
                transform: translateX(-50%);
                .gnb{
                    display: flex;
                    li{
                        margin-right: 50px;
                        &:last-child{
                            margin-right: 0px;
                        }
                        a{
                            color: #fff;
                        }
                        position: relative;
                        &::after{
                            content: "";
                            position: absolute;
                            display: block;
                            width: 100%;
                            height: 1px;
                            background: #fff;
                            bottom: -6px;
                            left: 0;
                            transform: scaleX(0);
                            transition: 0.3s;
                        }
                        &:hover::after{
                            transform: scaleX(1.1);
                            
                        }
                    }
                }
            }
        }
    }
`

export const FooterWrap = styled.div`
background: #333;
padding: 50px 0px;
.inner{
    width: 1400px;
    margin:auto;
    box-sizing: border-box;
    position: relative;

    .links{
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ddd;
        .terms{
            span{
                display: inline-block;
                margin-right: 40px;
                font-weight: 600;
                position: relative;
                color: #fff;
                &::after{
                    content: "";
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -20px;
                    background: #ddd;
                    display: block;
                    width: 1px;
                    height: 16px;
                }
                &:last-child::after{
                    display: none;
                }
            }
        }
        .sns{
            i{
                margin-left: 15px;
                font-size: 20px;
                color: #fff;
            }
        }
    }
    .info{
        .company{
            font-weight: 600;
            margin-bottom: 10px;
        }
        p{
            color: #fff;
            span{
                display: inline-block;
                margin-right: 40px;
                position: relative;
                font-size: 15px;
                &::after{
                    content: "";
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -20px;
                    background: #999;
                    display: block;
                    width: 1px;
                    height: 16px;
                }
                &:last-child::after{
                    display: none;
                }
            }
        }
        .copyfright{
            margin-top: 20px;
        }
    }
    .logo{
        position: absolute;
        bottom: 50px;
        right: 0;
    }
}
`