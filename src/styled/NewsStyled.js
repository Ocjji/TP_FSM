import styled from 'styled-components'
import { h2, inner, mainColor, subColor } from './commonStyled'
import { bg } from './HomeStyled'


export const NewsWrap = styled.div`
        h2{
            ${h2}
            ${bg}
            background-image: url('../../public/images/visual7.png'); 
            background-color : #000;
            
        }
        .news{
            ${inner} 
            margin-top: 100px;
            .topSearch{
                display: flex;
                justify-content: space-between;
                span{
                    display: block;
                    text-indent: 10px;
                }
                form{
                    margin-bottom: 30px;
                    input{
                        border: 1px solid #333;
                        padding: 10px 15px;
                        box-sizing: border-box;
                        height: 40px;
                        width: 300px;
                    }
                    button{
                        vertical-align: middle;
                        height: 40px;
                        width: 50px;
                        border: none;
                        background: #333;
                        color: #fff;
                        margin-left: 10px;
                        font-size: 20px;
                        cursor: pointer;
                    }
                }
            }
            .newsList{
                display: flex;
                flex-wrap: wrap;
                li{
                    box-sizing: border-box;
                    width: 21%;
                    margin-right: 5.3%;
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
                            }
                        }
                    }
                }
            }
            .moreBtn{
                text-align: center;
                margin-top: 30px;
                button{
                    background: #333;
                    width: 200px;
                    height: 50px;
                    color: #fff;
                    font-size: 18px;
                    cursor: pointer;

                }
            }
        }
`
export const NewsDetailWrap = styled.div`
.newsDetail{
    
    .title{
        ${bg}
        background-image: url('../../public/images/newsdetail.png');
        h3{
            width: 1200px;
            margin: auto;
            font-size: 35px;
            text-align: center;
            font-weight: 700;
            padding: 100px 0px;
        }
        .date{
            ${inner} 
            padding-bottom: 50px;
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
                }
            }
            .icon{
                color: #999;
                position: absolute;
                bottom: 50px; 
                right: 0px;
                i{
                    background: #fff;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    margin-left: 20px;
                    font-size: 18px;
                    display: inline-block;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
    }
    .txt{
        ${inner} 
        margin-top: 100px;
        
        .swiper{
            width: 1000px;
            padding-bottom: 100px;
            .imgbox{
                margin: auto;
                width: 800px;
            }
            img{
                width:100%;
            }
            .swiper-pagination{
                bottom: 50px;
            }
        }
        p{
            white-space: pre-wrap; 
            padding-bottom: 100px;
            border-bottom: 1px solid #999;
        }
    
    }
}
.btnWrap{
    ${inner}
    P{
        &:first-child{
            text-align: end;
            margin-bottom: 50px;
            button{
                background: #333;
                width: 200px;
                height: 50px;
                font-size: 18px;
                cursor: pointer;
                margin-top:50px;
                a{
                    display: block;
                    width: 100%;
                    color: #fff;
                }
            }
        }
        &.btn{
            &.bordertop{
                border-top: 1px solid #999;
            }
            border-bottom: 1px solid #999;
            padding: 20px;
            box-sizing: border-box;
            span{
                display: inline-block;
                margin-right: 50px;
                color: #999;
            }

        }
    }
}
`