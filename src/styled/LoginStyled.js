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

`

export const JoinWrap = styled.div`
    h2{
        ${h2}
        color: #000;
    }
    .inner{
        ${inner}
    }
    h4{
        font-size: 25px; 
        font-weight: 600;
        padding: 60px 0px 30px;
        position: relative;
        span{
            position: absolute;
            bottom: 30px;
            right: 0px;
            font-size: 14px;
            font-weight: 400;
            
        }
    }
    b{
        color:red;
        padding-right: 10px;
    }
    form{

        table{
            .w1{width: 200px;}
            .w2{width:1200px;}
            .w700{width:700px;}
            .w400{width:400px;}
            .w230{width:230px;}
            .w200{width:150px;}
            .w500{width:500px;}
            tr{
                &:first-child{
                    border-top: 1px solid #333;
                }
                border-bottom: 1px solid #ccc;
                td{
                    padding: 30px 20px;
                    input{
                        padding: 15px;
                    }
                    /* input[type=radio]{
                        padding: 100px;
                    } */
                    button, select{
                        padding: 15px;
                        vertical-align: middle;
                    }
                    &:last-child{
                        label{
                        margin-right: 20px;
                        margin-left: 10px;
                        }

                    }
                    &.telSelect{
                        select{
                            width: 100px;
                        }
                        button{
                            margin-left: 20px;
                            width: 195px;
                        }
                    }
                    &.birthSelect{
                        select{
                            margin-right: 10px;
                        }
                        label{
                            display: inline-block;
                            margin-top: 15px;
                        }
                    }
                    &.addInput{
                        input{
                            margin-right: 20px;
                            margin-bottom: 15px;
                            &.addrBtn{
                                padding: 14px 30px;
                                vertical-align: bottom;
                            }

                        }
                    }
                    .emailSelect{
                        width: 200px;
                        margin-left: 20px;
                    }
                    span{
                        padding: 0px 10px;
                    }
                    &.expiration{
                        p{
                            text-indent: 10px;
                            margin-top: 10px;
                        }
    
                    }
                }
            }
        }
        .clasuseSelect{
            p{
                &:first-child{
                    border-top: 1px solid #333;
                    
                }
                padding: 20px;
                border-bottom: 1px solid #ccc;
                position: relative;
                input{
                    margin-right: 10px;
                }
                span{
                    position: absolute;
                    right: 20px;top: 20px;
                    cursor: pointer;
                }
                em{
                    display: block;
                    height: 0; overflow: auto;
                    white-space: pre-line;
                    transition: 0.3s;
                    &.on{
                    margin: 20px 0px;
    
                        border: 1px solid #ccc;
                        padding: 10px;
                        height: 150px;
                   }
                }
            }
        }
        .submitBtn{
            margin-top: 50px;
            text-align: center;
            button{
                width: 300px;height: 50px;
                color: #fff;
                background: #333;
            }
        }
    }


`