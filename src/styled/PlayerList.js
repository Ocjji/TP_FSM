import styled from 'styled-components'
import { mainColor, subColor } from './commonStyled';

export const PlayerListStyle = styled.div`
    
    width:1400px;
    /* height: 680px; */
    position: fixed;
    z-index: 100;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #000;
    background-color: white;
    display: flex;
    justify-content:space-between;
    box-sizing: border-box;
    padding:60px 20px 20px;
    /* margin-top: 200px; */
    .closeBtn{
        cursor: pointer;
        position: absolute;
        top: 15px; right: 20px;
        font-size: 30px;
        background: transparent;
        border: none;
    }
    .pls_left{
        width:830px;
        height:630px;
        border: 1px solid #000;
        .pls_left_top{
            display:flex;
            background-color: ${subColor};
            color:white;
            height:85px;
            line-height:85px;
            font-size:24px;
            justify-content:space-between;
            padding:0 20px;
            box-sizing: border-box;      
            .searchWrap{
                input[type=text]{
                    width:300px;
                    height:30px;
                    outline:none;
                    padding-left: 10px;
                    vertical-align: middle;
                }
            }   
        }
        .playerSelectList{
            overflow: auto;
            height: 545px;
            ul{
                padding: 20px;
                display: flex;
                flex-wrap: wrap;
                li {
                    &:hover {
                        img {
                            transform:scale(1.1);
                        }
                    }
                    cursor: pointer;
                    width: 140px;
                    height: 220px;
                    box-shadow: 1px 1px 5px ${subColor};
                    text-align: center;
                    padding-top: 10px;
                    box-sizing: border-box;
                    margin-bottom: 20px;
                    margin-right: 30px;
                    /* margin: 5px; */
                   &:nth-child(5n){
                    /* margin-right: 0px; */
                   }
                    img{
                        transition:0.2s;
                        width: 120px;
                        margin: 0 auto;
                    }
                    p{
                        padding: 5px 20px;
                        display: flex;
                        justify-content: space-between;
                        strong{
                            font-weight: 600;
                            color: #2b6fb3;
                        }
                        em{
                            
                            color: ${mainColor};
                        }
                    }
                }
            }
        }
    }
    .pls_right{
        width: 500px;
        border: 1px solid #000;
        height:630px;
        .pls_right_top{
            display:flex;
            background-color: ${subColor};
            color:white;
            height:85px;
            line-height:85px;
            font-size:24px;
            justify-content:space-between;
            padding:0 20px;
            box-sizing: border-box;
            .btnWrap{
                button{
                    vertical-align:middle;
                    height:30px;
                    background: #fff;
                    border: none;
                    color: ${subColor};
                    width: 80px;
                    font-weight: 500;
                }
            }
        }
        .selectPlayerBox{
            padding: 20px;
            .imgWrap{
                height: 213px;
                overflow: hidden;
                padding-bottom: 10px;
                .imgNone{
                    padding-top: 30px;
                    transform: scale(1.2);
                }
                img{
                    width:160px;
                    margin:auto;
                    display:block;
                }
            }
            .selectinfo{
                margin-top: 10px;
                overflow: auto;
                height: 280px;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                padding: 20px;
                box-sizing: border-box;
                .popupRight_GK{
                    border-top: 2px solid ${subColor};
                    margin-top: 10px;
                    padding-top: 10px;
                }
                p{
                    padding-bottom: 5px;
                }
                span{
                    display: inline-block;
                    width: 100px;
                }
            }
        }
    }
`;