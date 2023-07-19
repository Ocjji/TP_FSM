import styled from 'styled-components'
import { h2, inner } from './commonStyled'
import { bg } from './HomeStyled'

export const GameScheduleWrap = styled.div`
    h2{
        ${h2}
        ${bg}
        background-image: url('../../public/images/visual/visual3.png');
        
    }
    .inner{
        ${inner}
        .selectBox{
            margin-top: 50px;
            text-align: end;
            select{
                width: 150px;
                padding: 10px;
            }
        }
        ul{
            li{
                border: 1px solid #999;
                box-sizing: border-box;
                padding: 40px 50px;
                margin: 20px 0px;
                display: flex;
                height: 180px;
                .dateBox{
                    width: 300px;
                    p{
                        font-size: 23px;
                        font-weight: 700;
                    }
                    span{

                        display: block;
                        color:#999;
                        margin-bottom: 10px;
                    }
                }
                .score{
                    width: 80%;
                    display: flex;
                    padding-left: 200px;
                    line-height: 100px;
                    strong{
                        width: 200px;
                        text-align: center;
                        font-size: 25px;
                        font-weight: 600;
                    }
                    .imgbox{
                        line-height: 130px;
                    }
                    p{
                        width: 150px;
                        text-align: center;
                        font-size: 25px;
                        font-weight: 600;
                        color: #999;
                        span{
                            padding: 40px;
                        }
                    }
                }
            }
        }
        .paging{
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
                margin: 5px;
                padding: 1px 10px;
                border-radius: 50%;
                box-sizing: border-box;
                &.on,&:hover{
                    background: #333;
                    color: #fff;
                }
            }
        }
    }  
`