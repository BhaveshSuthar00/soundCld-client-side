import styled from 'styled-components'

const Nav = styled.nav`
    width: 85%;
    padding: 0 7.4%;
    margin: auto;
    background-color: #333333;
    color: whitesmoke;
    border: 1px solid black;
    position: sticky;
    top : 0;
    padding-top: 0.2%;
    padding-bottom: 0.2%;
    font-size:  20px;
    line-height: 1.5;
    display: grid;
    grid-template-columns: 30% 40% 20%;
    gap : 0.5;
    &>div {
        padding: 0.7%;
        cursor: pointer;
        margin-right: 2%;
        display: flex;
        justify-content: space-between;
    }
    &>div:first-child>div:first-child {
        width: 30%;
        display: flex;
        justify-content: space-evenly;
    }
    &>div:nth-child(2)>div{
        width: 100%;
    }
    &>div:nth-child(2)>div>input{
        background-color: whitesmoke;
        border-radius: 8px;
        border: none;
        font-size: 21px;
        padding-left: 3%;
        outline: none;
        width: 100%;
    }
    &>div:last-child {
        width: 100%;
    }
`
export {Nav}