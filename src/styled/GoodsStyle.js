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
                img{
                    width: 500px;
                    height: 500px;
                }
            }
            .goodsRightInfo {}
        }
    }
`;

export const GoodsNavStyle = styled.nav`
    margin-top: 180px;
    ul {
        width: 300px;
        li {
            cursor: pointer;
            height: 40px;
            font-weight: 600;
            font-size: 16px;
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
    margin-top: 140px;
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
            font-weight: 700;
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