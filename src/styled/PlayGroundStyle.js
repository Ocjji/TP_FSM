import styled from 'styled-components'
import { inner } from "./commonStyled";


export const SquadWrap = styled.div`
    margin-top: 150px;
    .inner{
        ${inner}
        padding-bottom: 100px;
    }
`;
export const PlayGroundStyle = styled.div`
    width: 920px;
    height: 785px;
    border: 1px solid #000;
    background-image: url("./images/Squad/fieldBG_920_785.png");
    margin: auto;
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
    img {
        width: 120px;
        height: 150px;
        margin: auto;
    }      
    p{
        margin-top: -5px;
        line-height: 1;
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