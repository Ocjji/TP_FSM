import {styled} from 'styled-components'
import { bg } from './HomeStyled';
import { h2, inner, subColor } from './commonStyled';

export const NoticeLayoutWrap = styled.div`
    h2{
        ${h2}
        ${bg}
        background-image: url('../../public/images/visual/visual3.png');
    }
`

export const NoticeWrap = styled.div`
    .inner{
        ${inner}
        padding-top: 100px;
        .topInfo{
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
            span{
                text-indent:10px;
                padding-top: 10px;
                b{
                    font-weight: 700;
                    font-size: 18px;
                }
            }
            .searchBtn{
                display: flex;
                select{
                    margin-right: 10px;
                    padding: 10px;
                    font-size: 18px;
                }    
                form{
                    input{
                        border: 1px solid ${subColor};
                        padding: 10px 15px;
                        box-sizing: border-box;
                        height: 45px;
                        width: 300px;
                        font-size: 18px;
                        vertical-align: middle;
                    }
                    button{
                        vertical-align: middle;
                        height: 45px;
                        width: 50px;
                        border: none;
                        border: 1px solid ${subColor};
                        background:  ${subColor};
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
        .noticeListBox{
            table{
                width: 100%;
                .w1{width:15%}
                .w2{width:auto;}
                .w3{width:8%}
                .w4{width:10%}
                .w5{width:10%}
                th{
                    border-top: 1px solid #333;
                    border-bottom: 1px solid #333;
                    padding: 15px 30px;
                }      
                td{
                    text-align: center;
                    border-bottom: 1px solid #ccc;
                    padding: 20px 30px;
                }
                tr{
                    td:nth-child(2){
                        text-align: start;
                        cursor: pointer;
                    }
                    &:last-child{
                        td{
    
                            border-bottom: 1px solid #333;
                        }
                    }
                }
            }
        }
        .pagingBox{
            text-align: center;
            font-size: 18px;
            margin-top:50px;
            i{ 
                cursor: pointer;
                vertical-align: middle;
            }
            span{
                cursor: pointer;
                display: inline-block;
                text-align: center;
                margin: 5px;
                padding: 1px 10px;
                border-radius: 50%;
                box-sizing: border-box;
                background: #eee;
                &.on,&:hover{
                    background: ${subColor};
                    color: #fff;
                }
            }
        }
    }
`

export const NoticeDetailWrap = styled.div`

`