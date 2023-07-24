import styled from 'styled-components'


export const SqurdWrap = styled.div`
    margin-top: 150px;
`;
export const PlayGroundStyle = styled.div`
    width: 600px;
    height: 1000px;
    border: 1px solid #000;
    margin: auto;
    position: relative;
`;
export const PlayPositionStyle = styled.div`
    width: 150px;
    height: 200px;
    border: 1px solid #000;
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
    position: absolute;
    
    &.positionNo1 {
        left: 30%;
        top: 5%;
        transform: translateX(-50%);
    }
    
    &.positionNo2 {
        left: 70%;
        top: 5%;
        transform: translateX(-50%);
    }
    &.positionNo3 {
        left: 50%;
        top: 55%;
        transform: translateX(-50%);
    }
    &.positionNo4 {
        left: 50%;
        top: 80%;
        transform: translateX(-50%);
    }
        img{
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            margin: 0 auto;
        }
`;