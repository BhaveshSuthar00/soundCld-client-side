import styled from 'styled-components'

const Nav = styled.nav`
    width: 90%;
    height: 100%;
    margin: auto;
    color: whitesmoke;
    font-size:  20px;
    line-height: 1.5;
    display: grid;
    overflow: hidden;
    grid-template-columns: 30% 40% 30%;
    gap : 0.5;
    & a{
        text-decoration: none;
        color: white;
    }
    position: relative;
    &>div {
        cursor: pointer;
        /* margin-right: 2%; */
        display: flex;
        justify-content: space-evenly;
    }
    &>div:first-child {
        &>div{
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }
    }
    &>div:nth-child(2){
        height: 100%;
        &>form {
            width: 98%;
            padding: 0 0 0 1%;
            background-color: white;
            border-radius: 8px;
            height: 100%;
        &>input {
            border: none;
            font-size: 18px;
            outline: none;
            height: 80%;
            width: 88%;
        }
        &>button {
            border: none;
            font-size: 21px;
            background-color: white;
            outline: none;
            width: 10%;
            height: 100%;
            cursor: pointer;
            &>svg {
                /* height: 100%; */
                background-color: white;
                /* width: 100%; */
                margin-top: 5%;
                background-color:white;
            }
        }
        }
    }
    &>div:last-child {
        width: 100%;
    }
    `
const WrapperDiv = styled.div`
    width: 100%;
    padding: 1% 0;
    background-color: #333333;
    z-index: 2;
    position: sticky;
    top: 0;
`
const AbosoluteDiv = styled.div`
    background-color: whitesmoke;
    position: fixed;
    top: 8.4%;
    right: 8%;
    width: 10%;
    color: black;
    padding-bottom: 10px;
    font-size: 21px;
    &>ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
`
export {Nav, WrapperDiv, AbosoluteDiv} 
