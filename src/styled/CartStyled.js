import styled from 'styled-components'
import { inner } from './commonStyled'

export const CartList = styled.div`
    margin-top:120px;
    .inner{
        ${inner}
        ul{
            display:flex;
            padding:20px 0;
            li{
                width:50%;
                border: 1px solid #000;
                text-align:center;
                padding:10px 0;
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
                    color: #B41B3A;
                    font-weight:700;
                }
            }
        }
    }
`
export const BtnWrap = styled.div`
    margin-top:30px;
    button{
        cursor: pointer;
        width: 100%;
        background-color:#00155D;
        font-size:20px;
        color:white;
        padding:15px 0;
        &:nth-of-type(1){
            margin-bottom:10px;
        }
    }
`