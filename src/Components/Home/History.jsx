import { useEffect, useState, useContext } from "react";
import { ChangeSong } from "../../Contexts/Status";
import { v4 as uuid } from 'uuid';
import { Box, Image, Text } from "@chakra-ui/react";
export const HistoryTracks = () => {
  const [data, setData] = useState([])
  const { statusChange, handleStatus2, handleHistory } = useContext(ChangeSong);
  let History = JSON.parse(localStorage.getItem("history")) || [];
  useEffect(() => {
    handleHistory();
    setData(History);
  }, [statusChange])
  if (data.length <= 0) {
    return <></>
  }
  const handleClickHistory = (current) => {
    let localSt = JSON.parse(localStorage.getItem('click')) || [];
    console.log(localSt[0])
    localSt[0] = History[current];
    console.log(localSt[0])
    localStorage.setItem('click', JSON.stringify([localSt]));
    handleStatus2();
  }
  return (
    <>
      <Box style={{ borderBottom: '1px solid black', padding: '5% 0' }}>Listening history</Box>
      <Box>
        {data && data.length > 2 && data.map((el, index) => {
          if(el !== null) return (
            <Box key={uuid()} onClick={() => { handleClickHistory(index) }} className="history-div" 
            style={{ width: '100%', height: '100%', borderBottom: '1px solid black', padding: '3% 0' }}
            >
              <Image src={el.cover} alt="cover image" width="10%" height="100%" />
              <Box style={{ width: '70%', textAlign: 'left', height: '100%' }}>
                <Text style={{ height: '50%', overflow: 'hidden' }}>{el.name}</Text>
                <Text>singer: {el.singer}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>{" "}
    </>
  );
};
