import styled from 'styled-components'
import { button, buttonText, h2, inner, subColor } from './commonStyled'
import { bg } from './HomeStyled'

export const AddPlayerWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    h2{
        ${h2}
        ${bg}
        background-image: url('../../public/images/visual/visual1.jpg');
        padding-top: 180px;
        text-shadow: 0px 0px 10px #000;
    }
    .inner{
        ${inner}
        padding-top: 50px;
        .btnWrap{
            text-align:right;
            button{
                ${button}
                width: 400px;
                background: ${subColor};
                span{
                    ${buttonText}

                }
            }
        }
    }
`

export const AddPlayerInfoText = styled.div`
    display: flex;
    .addPlayerInfoLeft,.addPlayerInfoRight{
        width:50%;
        display: flex;
        flex-direction:column;
        padding: 30px;
        input[type=text]{
            width: 600px;
            height: 30px;
            margin-bottom:20px;
        }
        select{
            width: 600px;
            height: 30px;
            margin-bottom:20px;
        }
        label{
            font-weight:700;
        }
    }
`