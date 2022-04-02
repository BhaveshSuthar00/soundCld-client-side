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
    /* background-color: teal; */
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
    width: 200px;
    height: 250px;
    border-radius: 5px;
  }
  &>p {
    margin-top: 2%;
    font-size: 20px;
  }
`;

export { HeaderTitleDiv, MainDivHome, HomeDiv, ElementDiv };
