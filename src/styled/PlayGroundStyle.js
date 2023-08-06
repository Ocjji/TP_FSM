import styled from 'styled-components'
import { button, buttonText, h2, inner, mainColor, subColor } from "./commonStyled";
import { bg } from './HomeStyled';


export const SquadWrap = styled.div`    
    .h2bg{
        ${h2}
        ${bg}
        background-position: 0px -80px;
        background-image: url('../../public/images/visual/visual4.jpg');
    }
    .inner{
        ${inner}
        padding-top: 100px;
        display: flex;
        justify-content: space-between;
    }
    .playlistPopupBG {
        margin-top: -10px;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 50;
        background: rgba(0,0,0,0.6);
    }
`;
export const PlayerInfoCalStyle = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    .playerInfoCalculator{
        /* display: none; */
        /* position: fixed; */
        /* z-index: 10; */
        /* right: 100px; */
        /* top: 150px; */
        /* border-radius:20px; */
        /* background: ${subColor}; */
        border-top: 5px solid ${subColor};
        border-bottom: 5px solid ${subColor};
        /* padding: 20px; */
        box-sizing: border-box;
        width: 300px;
        height: 500px;
        .squad-info, .cal-wrap{
            border-bottom: 1px solid  ${subColor};
            padding: 20px;
        }
        .personnel{
            padding: 20px;
        }
        p{
            padding: 10px 0px;
            strong {
                display: inline-block;
                width: 150px;
            }
            span{font-weight:700}
        }
    }
    .btnWrap{
        button{
            ${button}
            width: 100%;  
            background: ${mainColor};
            a{
                ${buttonText}
            }
        }
    }
`;
export const PlayGroundStyle = styled.div`
    width: 920px;
    height: 785px;
    /* border: 1px solid #000; */
    background-image: url("../../public/images/Squad/fieldBG_920_785.png");
    position: relative;
`;
export const PlayPositionStyle = styled.div`
    width: 140px;
    height: 175px;
    /* border: 1px solid #000; */
    text-align: center;
    /* padding-top: 20px; */
    box-sizing: border-box;
    position: absolute;
    cursor: pointer;
    img {
        transition:0.2s;
        width: 120px;
        height: 150px;
        margin: auto;
        &:hover {
            transform: scale(1.1);
        }
    }      
    p{
        /* margin-top: -1px; */
        line-height: 1.4;
        color:#fff;
        font-weight: 500;
        strong {
            display: inline-block;
            margin: 0 3px 0 3px;
        }
    }  
    &.form334LW {
        left: 27%;
        top: 2%;
        transform: translateX(-50%);
    }    
    &.form334ST {
        left: 50%;
        top: 0%;
        transform: translateX(-50%);
    }  
    &.form334RW {
        left: 73%;
        top: 2%;
        transform: translateX(-50%);
    }  
    &.form334LCM {
        left: 28%;
        top: 27%;
        transform: translateX(-50%);
    }  
    &.form334CM {
        left: 50%;
        top: 25%;
        transform: translateX(-50%);
    }  
    &.form334RCM {
        left: 72%;
        top: 27%;
        transform: translateX(-50%);
    }  
    &.form334LB {
        left: 18%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334LCB {
        left: 39%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334RCB {
        left: 61%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334RB {
        left: 82%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.formGK {
        left: 50%;
        bottom: 3%;
        transform: translateX(-50%);
    } 
`;