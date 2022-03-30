import styled from "styled-components";

const Image = styled.image`
  width: 200px;
  height: 250px;
`;

const MainDiv = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 12fr);
  justify-content: space-between;
 // background-color: teal;
  width: 80%;
`;

const IndividualDiv = styled.div`
  margin-top: 30px;
`;
const HeaderTitleDiv = styled.div`
  text-align: left;
  margin-left: 110px;
`;

const MainDivHome = styled.div`
  width: 80%;
  margin: auto;
`;
export { Image, MainDiv, IndividualDiv, HeaderTitleDiv, MainDivHome };
