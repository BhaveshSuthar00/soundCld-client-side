import styled from "styled-components";

const LeftWrapper = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: #8f7171; */

    font-size: 18px;
`
const ButtonDiv = styled.div`
    display : flex;
    position : relative;
    /* background-color: #ff5500; */
    margin-top: 5%;
    width: 90%;
    padding: 1% 0;
    cursor: pointer;
    &>div:first-child {
        margin-left: 2%;
    }
    &>div:last-child {
        margin-left: 4%;
    }
    /* &::after {
        left: 100%;
        top: 54%;        
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border: 13.5px solid transparent;
        border-left-color: #f50;
        margin-top: -15px;
    } */
`
export {LeftWrapper, ButtonDiv} 