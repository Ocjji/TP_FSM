import styled from 'styled-components';
import { h2 } from './commonStyled';
import { bg } from './HomeStyled';

export const GoodsWrap = styled.div`
    h2{
        /* ${h2} */
        ${bg}
        background-image: url('../../public/images/visual/playstore.png');
        height: 500px;
    }
    .inner{
        width: 1400px;
        margin: auto;
        box-sizing:border-box;
        position: relative;
        padding-bottom: 100px;
    }
`;

export const GoodsPopupStyle = styled.div`
    .addPopup{
        width: 100%;
        position: absolute;
        left: 50%;
        top: 48%;
        transform:translateX(-50%);
        text-align: center;
        background-color: rgba(0,155,0,0.3);
        h3{
            color: tomato;
            height: 200px;
            line-height: 200px;
            font-size: 40px;
            font-weight: 700;
        }
    }
    &.goodsPopup {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index:100;
        /* position: absolute; */
        background: rgba(0,0,0,0.3);
        /* background: #eee; */
        .inner {
            background: #fff;            
        }
        .goodsDetail {
            width: 100%;
            position: relative;
            padding: 50px;
            box-sizing: border-box;
            margin-top: 120px;
            display: flex;
            .btnPopupClose{
                position: absolute;
                right: 20px;
                top: 20px;
                width: 30px;
                height: 30px;
            }
            .goodsLeftImg {
                padding: 50px;
                img{
                    width: 500px;
                    height: 500px;
                }
            }
            .goodsRightInfo {
                width: 60%;
                padding: 50px;
                .brand-title-price {
                    em,strong, span {
                        display: block;
                    }
                    em {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }
                    strong{
                        font-size: 20px;
                    }
                    p {
                        margin: 40px 0;
                        span {
                            font-weight: 700;
                            font-size: 24px;
                        }
                    }
                }
                .delivery-option-etc{
                    border-top: 2px solid #000;
                    
                    dl.delivery {
                        display: flex;
                        padding: 20px 0;
                        align-items:center;
                        color:#666;
                        dt{
                            padding-right: 100px;
                        }
                        dd{}
                    }
                    dl.option {

                    }
                   
                }
                .select-size {
                    border-top: 1px solid #ddd;
                    dl.size {
                        display: flex;
                        padding: 20px 0;
                        align-items:center;
                        color:#666;
                        dt{
                            padding-right: 100px;
                        }
                        dd{
                            select{
                                width: 150px;
                                height: 40px;
                                font-size: 16px;
                                padding: 0 10px;
                                background-color: #eee;
                                option{

                                }
                            }
                        }
                    }
                }
                .totalPrice-amount{
                    dl.amount{
                        border-top: 1px solid #ddd;
                        border-bottom: 2px solid #000;
                        display: flex;
                        padding: 10px 0;
                        align-items:center;
                        justify-content:space-between;
                        height: 50px;
                        dt{
                            font-size: 20px;
                            color:#000;
                            font-weight: 500;
                        }
                        dd{                                   
                            button{
                                display: inline-block;
                                margin: 0;
                                padding: 0;
                                width: 30px;
                                height: 40px;
                                border: 1px solid #000;
                                line-height: 40px;
                                box-sizing: border-box;
                                vertical-align:middle;                   
                            }
                            span{
                                background: #ddd;
                                text-align: center;
                                display: inline-block;
                                width: 60px;
                                height: 40px;
                                line-height: 40px;
                                border: 1px solid #000;
                                box-sizing: border-box;
                                vertical-align:middle;                   
                            }

                        }
                    }
                    dl.totalPrice {
                        display: flex;
                        padding: 20px 0;
                        align-items:center;
                        justify-content:space-between;
                        dt{}
                        dd{
                            font-weight: 700;
                            font-size: 24px;
                            color:red;
                        }
                    }
                }                
                .btn-addBasket-addGoBasket {
                    display: flex;
                    justify-content:space-between;
                    button {
                        height: 55px;
                        transform: skew(-20deg);
                        width: 48%;
                        border: none;
                        box-shadow:3px 3px 3px rgba(0,0,0,0.4);
                        cursor: pointer;
                        span{
                            display: block;
                            transform: skew(20deg);
                            font-size: 16px;
                            font-weight: 600;
                            color:#fff;
                        }
                    }
                    .addBasket {
                        background: #e6002d;
                    }
                    .addGoBasket {
                        background: #001a58;
                    }
                }
            }
        }
    }
`;

export const GoodsNavStyle = styled.nav`
    margin-top: 120px;
    ul {
        width: 300px;
        li {
            cursor: pointer;
            height: 40px;
            font-weight: 500;
            font-size: 20px;
            line-height: 40px;
            &.kfaSelect {
                height: 160px;
            }
            &.wearSelect {
                height: 190px;
            }

            ul{              
                li{
                    height: 30px;
                    margin-left: 10px;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 30px;
                }
            }
        }
    }
`;
export const CategoryInfoStyle = styled.div`
    margin-top: 80px;
    margin-bottom: 20px;
    &.categoryInfo {
        display: flex;
        justify-content:space-between;
        span {
            font-weight: 700;
            font-size: 18px;
            b{
                font-size: 16px;
                font-weight: 400;
            }
        }
        select {
            display: block;
            margin-right: 25px;
            width: 180px;
            height: 30px;
            font-size: 18px;
            padding-left: 10px;
            border: none;
            background: #ddd;
            option{

            }
        }
    }
`;
export const GoodsListStyle = styled.ul`
    &.goodslist{
        width: 1100px;
        margin: auto;
        /* height: 1250px; */
        /* border: 1px solid #000; */
        display: flex;
        /* justify-content:space-between; */
        flex-wrap: wrap;
    }
    
`;
export const GoodsItemStyle = styled.li`
    &.goodsitem {
        /* border: 1px solid #000; */
        cursor: pointer;
        width: 250px;
        height: 430px;
        margin-right: 25px;        
        div{
            text-align: center;
            img{                
                width: 250px;
                height: 250px;
            }
        }
        p {
            
            em {
                display: inline-block;
                margin: 10px 0;
                font-size: 14px;
            }
            strong {
                display: inline-block;
                font-size: 16px;
                margin-bottom: 15px;
                line-height: 1.2;
            }
            span {
                font-weight: 700;
                font-size: 14px;
                b {
                    font-size: 20px;
                }
            }
        }
    }
`;

export const PagingStyle = styled.p`
    &.paging {
        margin: 20px 0;
        text-align: center;
        button{
            cursor: pointer;
            display: inline-block;
            width: 30px;
            height: 30px;
            font-size: 18px;
            border: none;
            border-radius : 50%;
            margin-right: 10px;
            &:hover, &.on {
                background: tomato;
                color:#fff;
            }
        }
    }
`;