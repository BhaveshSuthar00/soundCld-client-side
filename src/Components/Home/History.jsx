import { v4 as uuid } from 'uuid';
import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlayerWithLocal } from "../../Redux/Player/Player";
export const HistoryTracks = () => {
  const dispatch = useDispatch();
  const { history } = useSelector(store => store.history);
  const handleClickHistory = (current) => {
    dispatch(setCurrentPlayerWithLocal([current]));
  }
  return (
    <>
      <Box style={{ borderBottom: '1px solid black', padding: '5% 0' }}>Listening history</Box>
      <Box>
        {history && history.map((el, index) => {
          if(el !== null && index < 5) return (
            <Box key={uuid()} onClick={() => { handleClickHistory(el) }} className="history-div" 
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
