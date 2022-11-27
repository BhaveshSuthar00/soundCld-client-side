import { Box, Image, Text } from "@chakra-ui/react"
import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { changeTogglee, setVisible } from "../../Redux/Player/Player";
import { useState } from "react";

export const Card = ({item, currentIndex, toggler}) => {
    const { songList } = useSelector(store => store.player);
    const [view, setToggle] = useState(false);
    const dispatch = useDispatch();
    const playOneSong = () => {
        dispatch(changeTogglee(currentIndex, songList ));
    }
    const pauseSong = ()=> {
        dispatch(changeTogglee(currentIndex));
        dispatch(setVisible(false));
    }
    return (
        <>
            <Box m={4} p={1}  display={'flex'} height={"70px"}  onMouseEnter={()=> setToggle(true)} onMouseLeave={()=> setToggle(false)}>
                <Box position={'relative'} >
                    {view && (
                        <Box position={'absolute'} top={4} left={4} cursor="pointer">
                            {
                                toggler ?
                                <MdPauseCircleFilled color={'orange'}  size={'40px'} onClick={() => pauseSong()}/>
                                
                                :
                                <AiFillPlayCircle color={'orange'}  size={'40px'} onClick={() => playOneSong()}/>
                            }
                        </Box>

                    )}
                    <Image src={item.cover} height='100%'   width={'70px'}/>
                </Box>
                <Text ml={4}>{item.name}</Text>
            </Box>
        </>
    )
}