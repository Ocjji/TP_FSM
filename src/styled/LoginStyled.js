import {styled} from 'styled-components'
import { h2, inner, mainColor, subColor } from './commonStyled'

export const LoginWrap = styled.div`

        h2{
            ${h2}
            color: #000;
        }
        .login{
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 70px 0px 30px;
            input{
                width: 400px;
                box-sizing: border-box;
                height: 40px;
                margin-bottom: 10px;
                border:none;
                background: #eee;
                padding: 0px 10px;
            }
            button{
                box-sizing: border-box;
                width: 150px;
                height: 40px;
                margin-top: 20px;
                border:none;
                background: #000;
                color: #fff;
                cursor: pointer;
            }
        }
        .findBtn{
            text-align: center;
            margin-bottom: 100px;
            span{
                margin-right:50px;
                cursor: pointer;
                position: relative;
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: -25px;
                    width: 1px;
                    height: 16px;
                    background: #999;
                }
                &:last-child{
                    margin-right: 0px;
                    &::after{
                        display: none;
                    }
                }
            }
        }
        .popupBox{
            .bg{
                position: fixed;
                width: 100%;
                height: 100%;
                top: 0;bottom: 0;
                background: rgba(0,0,0,0.5);
                z-index: 10;
            }
            .popup{
                position: fixed;
                top: 50%;left: 50%; transform:translate(-50%, -50%);
                z-index: 100;
                width: 700px;
                background: #fff;
                padding: 40px 60px;
                box-sizing: border-box;
                h4{
                    font-size: 25px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #333;
                    margin-bottom: 20px;

                }
                .title{
                    border: 1px solid #333;
                    span{
                        box-sizing: border-box;
                        display: inline-block;
                        width: 50%;
                        text-align: center;
                        height: 60px;
                        line-height: 60px;
                        cursor: pointer;
                        &.on{
                            background: #333;
                            color: #fff;
                        }
                    }
                }
                p{
                    strong{
                        display: inline-block;
                        width: 130px;
                        height: 60px;
                        line-height: 60px;
                        text-indent: 15px;
                    }
                    input[type=radio]{
                        margin-right: 10px;
                    }
                    input[type=text]{
                        height: 60px;
                        line-height: 60px;
                        width: 400px;
                        border:none;
                        text-indent: 15px;
                        &:focus{
                            outline: none;
                        }
                    }
                    &.textID{
                        label{
                            display: inline-block;
                            margin-left: 15px;
                            width: 130px;
                        }
                        input{
                            text-indent: 0px;
                        }
                    }
                    &.certification{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .certificationBtn{
                            border: 1px solid #333;
                            background: #fff;
                            width: 150px;
                            border-radius: 30px;
                            height: 40px;

                            cursor: pointer;
                        }
                    }
                    &:last-child{
                        border:none;
                        margin-top: 20px;
                    }
                    border-bottom: 1px solid #ccc;
                    &.btnWrap{
                        text-align: center;
                        button{
                            &.closeBtn{ margin-right: 20px;}
                            border: none;
                            background: ${mainColor};
                            color: #fff;
                            padding: 10px 15px;
                            width: 150px;
                            &.closeBtn{
                                background:#333;
                            }
                        }
                    }
                }
            }
        }
        .idFindPopup{

        }
        .pwFindPopup{

        }
    
`