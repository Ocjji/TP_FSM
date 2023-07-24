import styled from 'styled-components'
import { subColor } from './commonStyled'
const inner = {
    width: '1400px',
    margin: 'auto',
    boxSizing: 'border-box',
    position: 'relative',
}

export const AddPlayerWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    .inner{
        ${inner}
        .btnWrap{
            text-align:right;
            button{
                font-size:16px;
                padding: 5px 20px;
                background: ${subColor};
                color:white;
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