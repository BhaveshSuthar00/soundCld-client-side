import { Box, Image, Text } from "@chakra-ui/react"
import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIndex, setCurrentPage, setVisible } from "../../Redux/Player/Player";
import { useState } from "react";

export const Card = ({item, id, i}) => {
    const { songList, currentIndex, visible, currentPage } = useSelector(store => store.player);
    const [view, setToggle] = useState(false);
    const dispatch = useDispatch();
    const playOneSong = (krg) => {
        dispatch(setCurrentIndex({currentIndex : krg, currentPlayer : songList }));
        if(currentPage !== id) dispatch(setCurrentPage(id));
    }
    const pauseSong = ()=> {
        if(currentPage !== id) dispatch(setCurrentPage(''));
        dispatch(setVisible(false));
    }
    return (
        <>
            <Box m={4} p={1}  display={'flex'} height={"70px"}  onMouseEnter={()=> setToggle(true)} onMouseLeave={()=> setToggle(false)}>
                <Box position={'relative'} >
                    {view && (
                        <Box position={'absolute'} top={4} left={4} cursor="pointer">
                            {
                                currentPage === id && i === currentIndex && visible ?
                                <MdPauseCircleFilled color={'orange'}  size={'40px'} onClick={() => pauseSong()}/>
                                    :
                                <AiFillPlayCircle color={'orange'}  size={'40px'} onClick={() => playOneSong(i)}/>
                            }
                        </Box>

                    )}
                    <Image src={item.cover} height='100%' alt="cover Img" width={'70px'}/>
                </Box>
                <Text ml={4}>{item.name}</Text>
            </Box>
        </>
    )
}