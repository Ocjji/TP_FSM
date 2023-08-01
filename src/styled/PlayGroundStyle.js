import styled from 'styled-components'
import { inner } from "./commonStyled";


export const SquadWrap = styled.div`    
    .inner{
        ${inner}
        padding-bottom: 100px;
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

    &.playerInfoCalculator{
        /* display: none; */
        background: #eee;
        position: fixed;
        z-index: 10;
        right: 100px;
        top: 150px;
        border: 5px solid #c8193c;
        border-radius:20px;
        padding: 20px;
        box-sizing: border-box;
        width: 300px;
        height: 400px;

        strong {
            display: inline-block;
            width: 110px;
        }
    }
`;
export const PlayGroundStyle = styled.div`
    width: 920px;
    height: 785px;
    /* border: 1px solid #000; */
    background-image: url("../../public/images/Squad/fieldBG_920_785.png");
    margin: 130px auto;
    position: relative;
`;
export const PlayPositionStyle = styled.div`
    width: 130px;
    height: 175px;
    /* border: 1px solid #000; */
    text-align: center;
    /* padding-top: 20px; */
    box-sizing: border-box;
    position: absolute;
    cursor: pointer;
    img {
        width: 120px;
        height: 150px;
        margin: auto;
    }      
    p{
        /* margin-top: -1px; */
        line-height: 1;
        color:#fff;
        font-weight: 500;
    }  
    &.form334LW {
        left: 25%;
        top: 5%;
        transform: translateX(-50%);
    }    
    &.form334ST {
        left: 50%;
        top: 2%;
        transform: translateX(-50%);
    }  
    &.form334RW {
        left: 75%;
        top: 5%;
        transform: translateX(-50%);
    }  
    &.form334LCM {
        left: 30%;
        top: 28%;
        transform: translateX(-50%);
    }  
    &.form334CM {
        left: 50%;
        top: 28%;
        transform: translateX(-50%);
    }  
    &.form334RCM {
        left: 70%;
        top: 28%;
        transform: translateX(-50%);
    }  
    &.form334LB {
        left: 20%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334LCB {
        left: 40%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334RCB {
        left: 60%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.form334RB {
        left: 80%;
        top: 52%;
        transform: translateX(-50%);
    }  
    &.formGK {
        left: 50%;
        bottom: 2%;
        transform: translateX(-50%);
    } 
`;