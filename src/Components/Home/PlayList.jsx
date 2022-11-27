import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux"
import { Card } from "./Card";
import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useParams } from "react-router-dom";
import { useState } from "react";
import { changeTogglee, setOnlyIndex, setPlay, setSongList, setTogglerFunction, setVisible } from "../../Redux/Player/Player";
import { useEffect } from "react";
import axios from "axios";
import { BaseURL } from "../../constants";
import { useCallback } from "react";
export const PlayList = () => {
    const { songList, toggleList, currentIndex } = useSelector(store => store.player);
    const [toggler, setToggler] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const playAll = () => {
        dispatch(changeTogglee(0));
        dispatch(setVisible(true));
        dispatch(setPlay(songList));
        setToggler(true);        
    }
    const getPlaylist = async() => {
        try {
            const response = await axios.get(`${BaseURL}/list/${id.toLowerCase()}`);
            dispatch(setSongList(response.data));
            dispatch(setTogglerFunction(response.data));
        }
        catch (err) {
            console.log(err);
        }
    }
    const playListRef = useCallback(getPlaylist, [dispatch, id]);
    const pauseAll = () => {
        dispatch(setVisible(false));
        dispatch(changeTogglee());
        setToggler(false);
    }
    useEffect(()=> {
        playListRef();
        return(()=> {
            setToggler(false);
            dispatch(setOnlyIndex(0));
        })
    }, [playListRef]);
    const selectRandom = (list) => {
        return list[Math.floor(Math.random() * list.length)]; 
    }
    const colorRef = useCallback(selectRandom, []);
    useEffect(()=> {
        dispatch(changeTogglee(currentIndex));
    }, [currentIndex])
    return (
        <Box m={8} ml='auto' mr='auto' width={'80%'} boxShadow='lg'>
            <Box display={'flex'} w={'full'}  
            height={'20em'}
            bgColor={colorRef(['gray.200', 'pink.300', 'red.100', 'whiteAlpha.200', 'blue.200', 'yellow.300'])} 
            pt={4} pb={4}>
                <Box padding={4} w='full'>
                    <Box display={'flex'} alignItems='center' justifyContent={'space-between'}>
                        <Box mr={5} flex={1} display='flex' alignItems={'center'}>
                            {
                                !toggler ? 
                                <AiFillPlayCircle color={'orange'}  size={'5rem'} onClick={playAll}  /> 
                                :
                                <MdPauseCircleFilled color={'orange'} size={'5rem'} onClick={pauseAll}  /> 
                            } 
                            <Text fontSize={'xx-large'} fontWeight='black' ml={4}> { id.toUpperCase() } </Text>
                        </Box>
                        <Box mr={4} height="full">
                            {currentIndex < songList.length && (
                                <Image src={songList[currentIndex].cover} height={'10em'} />
                            ) }
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box p={1} mt={4} mb={4}>
                {
                    songList && songList.map((item, index) => (
                        <Card toggler={toggleList[index]} item={item} key={item._id} currentIndex={index} />
                    )) 
                }
            </Box>
        </Box>
    )
}