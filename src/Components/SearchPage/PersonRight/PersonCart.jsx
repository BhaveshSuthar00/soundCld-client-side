import styled from 'styled-components'
const PersonWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    margin-left : 2%;
    padding: 2% 0;
    justify-content : space-between;
    &>.img {
        cursor: pointer;
        width: 20%;
        height: 100%;
        &>img {
            border-radius: 50%;
            width: 90%;
            height: 100%;
        }
    }
    &>.text{
        cursor: pointer;
        width: 78%;
        margin-top: 4%;
        text-align: left;
        font-size: 21px;
        margin-left: 1%;
        &>button {
            cursor: pointer;
            margin-top: 2%;
            border: none;
            padding: 0.5% 0.5%;
            font-size: 21px;
            background-color : white;
            border: 1px solid #acacac;
            &:active {
                color: #cb8e00;
                border: 1px solid #cb8e00;
            }
        }
    }
`
export {PersonWrapper}