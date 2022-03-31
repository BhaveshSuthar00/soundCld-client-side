import styled from 'styled-components';

const Wrapper = styled.div`
    width: 92%;
    height: 600px;
    margin: auto;
    border : 1px solid #dfdfdf;
    border-top: none;
    &>div:first-child {
        font-size: 31px;
        text-align: left;
        width: 95%;
        margin: auto;
        padding: 1% 0 0.5% 0;
        border-bottom: 1px solid #dfdfdf;
    }
    &>div:last-child {
        display: flex;
        justify-content: space-between;
        &>div:first-child {
            margin-left: 3%;
        }
        &>div:last-child {
            margin-right: 3%;
        }
    }
`;

export { Wrapper }