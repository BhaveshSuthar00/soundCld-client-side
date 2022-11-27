import styled from "styled-components";
const HeaderTitleDiv = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
  height: 100%;
`;

const HomeDiv = styled.div`
  display: flex;
  & > div:first-child {
    width: 70%;
    margin-left: 50px;
  }
  & > div:nth-child(2) {
    margin: auto;
    margin-top: 80px;
  }
`;

const MainDivHome = styled.div`
  width: 80%;
  margin: auto;
  `;
const ElementDiv = styled.div`
    margin-bottom: 10%;
    margin-top: 10%;
    transition: transform 0.3s ease-in;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  & > img {
    width: 80%;
    margin: auto;
    height: 80%;
    border-radius: 5px;
  }
  &>p {
    width: 80%;
    margin: auto;
    margin-top: 2%;
    font-size: 20px;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #EFEFEF;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  &:hover {
    background: #DDD;
  }
`;
export const Wave = styled.div`
  width: 100%;
  height: 90px;
`;
export const WaveformContianer = styled.div`
  display: flex;  
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  height: 100px;  width: 100%;
  background: transparent;
`;
export { HeaderTitleDiv, MainDivHome, HomeDiv, ElementDiv };
