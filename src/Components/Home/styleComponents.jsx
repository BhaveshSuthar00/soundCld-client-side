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
  &:hover {
    cursor: pointer;
  }
  & > img {
    width: 200px;
    height: 250px;
    border-radius: 5px;
  }
`;

export { HeaderTitleDiv, MainDivHome, HomeDiv, ElementDiv };
