import styled from "styled-components";
const HeaderTitleDiv = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
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
export { HeaderTitleDiv, MainDivHome, HomeDiv };
