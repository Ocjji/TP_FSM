import styled from 'styled-components'
import { inner, mainColor, subColor } from './commonStyled'
export const CartList = styled.div`
    margin-top:120px;
    .inner{
        ${inner}
        ul{
            display:flex;
            padding:20px 0;
            font-size:18px;
            border-bottom: 3px solid #ECECEC;
            margin-bottom:20px;

            li{
                width:50%;
                border-bottom: 1px solid #ccc;
                text-align:center;
                padding:10px 0;
                cursor: pointer;
                &.on{
                    font-weight:700;
                    border-bottom: 2px solid #000;
                }
            }
        }
        .cartInfo{
            border: 2px solid #ECECEC;
            margin-bottom:20px;
            border-radius:20px;
            .cartTop{
                padding:15px;
                font-weight:700;
                display:flex;
                justify-content:space-between;
                background: rgba(194, 0, 39,0.2);
                border-radius:20px 20px 0 0;
                i{
                    cursor: pointer;
                    vertical-align:middle;
                    margin-left:10px;
                }
            }
        }
        .cost{
            border: 2px solid #ECECEC;
            border-radius:20px;
            padding:20px 0;
            display:flex;
            flex-direction:column;
            div{
                display:flex;
                justify-content:space-between;
                padding:0 15px;
                &:nth-of-type(2){
                    padding:20px 15px;
                }
            }
        }
    }
`

export const CartItemBox = styled.div`
    display:flex;
    padding:15px;
    position:relative;
    img{
        width: 150px;
        height: 150px;
        margin-right:20px;
    }
    .cartTextBox{
        display:flex;
        flex-direction:column;
        span{
            &:nth-of-type(2) {
                font-weight:700;
            }
            &:nth-of-type(5){
                em{
                    color: gray;
                    text-decoration:line-through;
                    font-size:14px;
                    margin-right:6px;
                }
                strong{
                    color: ${mainColor};
                    font-weight:700;
                }
            }
        }
    }
    i,p{
        position:absolute;
        right:20px;
        font-size:20px;
    }
    i{
        cursor:pointer;
    }
`
export const BtnWrap = styled.div`
    margin-top:30px;
    button{
        cursor: pointer;
        width: 100%;
        background-color:${subColor};
        font-size:20px;
        color:white;
        padding:15px 0;
        &:nth-of-type(1){
            margin-bottom:10px;
        }
    }
`

export const AmountWrap = styled.div`
    display: flex;
    font-size:14px;
    span{
        border-top:1px solid #888;
        border-bottom:1px solid #888;
        display:block;
        width:30px;
        text-align: center;
        line-height:25px;
        height: 25px;
        box-sizing: border-box;
    }
    button{
        vertical-align:middle;
        cursor: pointer;
        text-align: center;
        /* line-height:25px; */
        border:1px solid #888;
        background-color:white;
    }
`