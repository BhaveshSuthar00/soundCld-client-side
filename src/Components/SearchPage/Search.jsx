import styled from 'styled-components';

const Wrapper = styled.div`
    width: 92%;
    margin: auto;
    display: block;
    /* height: 90%; */
    background-color: white;
    border : 1px solid #dfdfdf;
    border-top: none;
    &>div:first-child {
        font-size: 31px;
        text-align: left;
        width: 95%;
        margin: auto;
        background-color: white;
        padding: 1% 0 0.5% 0;
        border-bottom: 1px solid #dfdfdf;
    }
    &>div:last-child {
        /* padding: 1% 0 0.5% 0; */
        display: flex;
        justify-content: space-between;
        height: 94%;
        padding-bottom: 1%;
        &>div:first-child {
            margin-left: 3%;
            width: 18%;
        }
        &>div:last-child {
            width: 80%;
            margin-right: 3%;
            height: 100%;
        }
    }
`;

export { Wrapper }