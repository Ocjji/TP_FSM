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
    padding:20px;
    /* margin-top: 200px; */
    .pls_left{
        width:830px;
        height:630px;
        border: 1px solid #000;
        overflow: auto;
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
                }
            }   
        }
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
                width: 150px;
                height: 200px;
                border: 1px solid #000;
                text-align: center;
                padding-top: 20px;
                box-sizing: border-box;
                margin: 5px;
                img{
                    transition:0.2s;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #000;
                    margin: 0 auto;
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
                }
            }
        }
        .selectPlayerBox{
            img{
                width:160px;
                margin:auto;
                display:block;
            }
        }
    }
`;