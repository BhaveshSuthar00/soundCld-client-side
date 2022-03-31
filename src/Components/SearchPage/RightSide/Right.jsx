import styled from "styled-components";

const RightWrapper = styled.div`
    height: 605px;
    background-color:  #ffc5c57e;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    & {
        -ms-overflow-style: none;  
        scrollbar-width: none;  
    }
    &>div {
        height: 150px;
    }
`

export { RightWrapper }