import styled from 'styled-components'
import Color from './../../../../07_react/day14/src/components/color/Color';
const inner = {
    width: '1400px',
    margin: 'auto',
    boxSizing: 'border-box',
    position: 'relative',
}

export const PlayerInfoWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    .inner{
        ${inner}
}
`

export const PlayerInfoPopupBg = styled.div`
    width: 100%;
    height: inherit;
    background-color:rgba(0,0,0,0.5);
    position: absolute;
    z-index:5;
`

export const PlayerInfoBar = styled.div`
    width:100%;
    border: 1px solid #000;
    position: relative;
    h3{
        font-weight:700;
        font-size:30px; 
        background-color: #00155D;
        color:white;
        padding:20px;
    }
    ul{
        display: flex;
        li{
            cursor:pointer;
            font-weight:700;
            font-size:18px;
            color:#ccc;
            padding: 10px 20px;
            &:hover{
                color:#000;
            }
            &.on{
                color:#000;
            }
        }
    }
    form{
        position:absolute;
        right:0;
        bottom:0;
        transform:translateY(-50%);
        input[type=text]{
            width: 200px;   
            height: 22px;
            vertical-align:middle;
            border:1px solid #00155D;
        }
        button{
            height: 22px;
            padding :0 10px;
            font-size:22px;
            line-height:22px;
            vertical-align:middle;
            color : #00155D;
        }
    }
`

export const PlayerList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    .addPlayerBox{
        text-align: center;
        font-size:20px;
        display: block;
        line-height:140px;
        box-sizing:border-box;
        &:hover{
            font-weight:700;
        }
    }
    li{
        width:350px;
        box-sizing: border-box;
        padding: 20px;
        border: 1px solid #cecece;
        display: flex;
        position: relative;
        background-color: #fff;
        cursor:pointer;
        &:hover{
            border: 1px solid red;
        }
        img{
            height: 142px;
        }
        .playerBasic{
            margin-left:20px;
            display: flex;
            flex-direction: column;
            strong{
                font-weight:700;
                font-size:20px;
                margin-bottom:auto;
            }
            span{
                font-size:14px;
                color:#949494;
            }
            em{
                position: absolute;
                right: 20px;
                top: 20px;
                font-weight:700;
            }
        }
    }
`

export const PlayerItemPopup = styled.div`
    width: 1200px;
    background-color:white;
    margin: auto;
    position: fixed;
    top:50%;
    right:50%;
    transform: translate(50%, -50%);
    z-index:10;
    img{
        width: 300px;
        display: block;
    }
    .popupTop{
        background: #B41B3A;
        color: #fff;
        padding: 20px;
        position: relative;
        span{
            font-weight:700;
            font-size:30px;
        }
        .iconWrap{
            font-size:30px;
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            cursor: pointer;
            i{
                margin-left:10px;   
            }
        }
    }
    .popupMain{
        display: flex;
        padding:20px;
        p{
            font-size:26px;
            margin-bottom:20px;
            font-weight:700;
        }
        dl{
            font-size:20px;
            dd{margin-right:20px;}
        }
        .popupContent{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            padding:0 40px;
            width:100%;
        }
        .popupLeft{
            p{
                color:#B41B3A;
                border-bottom: 3px solid #B41B3A;
                input[type=text]{
                    color:#B41B3A;
                    font-size:16px;
                    font-weight:700;
                }
                em{
                    margin-left:10px;
                    font-size:16px;
                    color:#000;
                    input[type=text]{
                    color:#000;
                    font-size:14px;
                }
                }
            }
            dl{
                display:flex;
                dt{
                    font-weight:700;
                    &:nth-child(1){width:60px;}
                    &:nth-child(3){width:80px;}
                }
                dd{
                    input[type=text]{
                        width: 100px;
                        font-size:16px;
                    }
                    &:nth-child(2){width:100px;}
                }
               
            }
        }
        .popupRight{
            p{
                color:#00155D;
                border-bottom: 3px solid #00155D;
            }
            dl{
                display: flex;
                dt{
                    font-weight:700;
                    &:nth-child(1){width:60px;}
                    &:nth-child(3){width:100px;}
                    &:nth-child(5){width:120px;}
                    &:nth-child(7){width:120px;}
                }
                dd{
                    text-align:right;
                    &:nth-child(2){width:24px;}
                    &:nth-child(4){width:24px;}
                    &:nth-child(6){
                        width:50px;
                        input[type=text]{
                        width: 60px;
                        font-size:16px;
                    }
                    }
                    input[type=text]{
                        width: 30px;
                        font-size:16px;
                    }
                }
            }
        }
        .popupRight_GK{
            p{
                color:#00155D;
                border-bottom: 3px solid #00155D;
            }
            dl{
                display: flex;
                dt{
                    font-weight:700;
                    &:nth-child(1){width:120px;}
                    &:nth-child(3){width:120px;}
                    &:nth-child(5){width:100px;}
                    /* &:nth-child(7){width:120px;} */
                }
                dd{
                    text-align:right;
                    &:nth-child(2){width:24px;}
                    &:nth-child(4){
                        width:80px;
                        input[type=text]{
                        width: 60px;
                        font-size:16px;
                    }
                    }
                        
                    &:nth-child(6){width:100px;}         
                    input[type=text]{
                        width: 30px;
                        font-size:16px;
                    }
                }
            }
        }  
        button{
            background-color: #00155D;
            height: 40px;
            color:white;
            font-size:16px;
            font-weight:700;
        } 
    }
`