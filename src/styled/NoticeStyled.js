import { styled } from 'styled-components'
import { bg } from './HomeStyled';
import { button, buttonText, h2, inner, mainColor, subColor } from './commonStyled';

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
                    font-size: 16px;
                }    
                form{
                    input{
                        border: 1px solid ${subColor};
                        padding: 10px 15px;
                        box-sizing: border-box;
                        height: 45px;
                        width: 300px;
                        font-size: 16px;
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
        .writeBtn{
            text-align: end;
            padding-top: 30px;
            button{
                ${button}
                width: 200px;  
                background: ${subColor};
                a{
                    ${buttonText}
                }
            }
        }
    }
`

export const NoticeDetailWrap = styled.div`
    .inner{
        ${inner}
        padding: 100px 0px;
    }
    table{
        width: 100%;
        margin-bottom: 50px;        
        .w1{width:10%}
        .w2{width:40%}
        .w3{width:10%}
        .w4{width:40%}
        tr{
            border-bottom: 1px solid #ccc;
            &:first-child{
                border-top: 2px solid #000;
            }
            &:last-child{
                border-bottom: 2px solid #000;
            }
            td{
                padding: 20px;
                &.th{
                    text-align: center;
                    border-right: 1px solid #ccc;
                }
            }
            
        }
    }
    .btnWrap{
        text-align: center;
        button{
            ${button}
            width: 200px;
            background: ${subColor};
            &.editBtn{
                background: ${mainColor};
                margin: 0px 20px;
            }
            span{
                ${buttonText}
            }
        }
    }
`

export const NoticeAddForm = styled.div`
    .inner{
        ${inner}
        padding: 100px 0;
    }
    h3{
        font-size: 25px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    form{
        width: 100%;
        .squadBox {
            margin-top: 30px;
            display: block;
            line-height: 1.4;
            color:#fff;
            font-weight: 500;
            span {
                text-indent: 0;
                padding-top: 0;
            }
            strong {
                display: inline-block;
                margin: 0 3px 0 3px;
                border: none;
                color:#fff;
            }
        }
        p{            
            strong{
                display: inline-block;
                border: 1px solid #888;
                width: 150px;
                color: #999;
            }

            select, input, textarea,strong{
                font-size: 16px;
                padding: 10px 20px;
                outline: none;
            }
            &.titleInput{
                display: flex;
                
                select,strong{
                    margin-right: 20px;
                }
                input{
                    width: 100%;
                }
            }
            &.contentBox{
                margin: 20px 0px 30px;
                padding-bottom: 30px;
                border-bottom: 1px solid #ccc;

                textarea{
                    width: 100%;
                    overflow: auto;
                    padding: 30px;
                    box-sizing: border-box;
                }
            }
            &.btnWrap{
                text-align: center;
                button{
                    ${button}
                    width: 200px;
                    background: ${subColor};
                    span{
                        ${buttonText}
                    }
                    &.submitBtn{
                        background: ${mainColor};
                        margin-right: 20px;
                    }
                }
            }
            
        }
    }
`