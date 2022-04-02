import styled from "styled-components";

const RightWrapper = styled.div`
    height: 600px;
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
        display: flex;
        width: 99%;
        padding: 0.5% 0;
        margin: auto;
        margin-bottom: 2%;
        &>div:first-child {
            width: 15%;
            height : 100%;
            &>img { 
                width: 100%;
                height: 100%;
            }
        }
        &>.rightCorner {
            display: flex;
            padding-top: 1%;
            margin-left: 2%;
            text-align: left;
            width: 80%;
            &>.play_pause_icon {
                width: 5%;
                &>svg {
                    border-radius: 50%;
                    display: block;
                    font-size: 41px;
                    color: #ff5500;
                }
            }
            &>.singer_name {
                width: 100%;
                display: flex;
                &>.singer_main {
                    width: 95%;
                }
                &>.category {
                    width: 5%;
                    padding: 1% 1% 2% 1%;
                    border-radius: 10px;
                    background-color: #bbbbbb;
                    height: 10%;
                    color: white;
                }
            }
        }
    }
`

export { RightWrapper }