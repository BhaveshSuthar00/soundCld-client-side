import { Box, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux"
import { Card } from "./Card";
import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useParams } from "react-router-dom";
import { setCurrentPage, setPlay, setSongList, setVisible } from "../../Redux/Player/Player";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../constants";
import { useCallback } from "react";
export const PlayList = () => {
    
    const { songList, currentIndex, currentPage } = useSelector(store => store.player);
    
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    
    const dispatch = useDispatch();
    
    const playAll = () => {
        dispatch(setPlay(songList));
        if(currentPage !== id) dispatch(setCurrentPage(id));
    }
    const getPlaylist = async() => {
        try {
            const response = await axios.get(`${BaseURL}/list/${id.toLowerCase()}`);
            dispatch(setSongList(response.data));
            setLoading(false);
            // if(currentIndex > response.data.length) dispatch(setOnlyIndex(0));
        }
        catch (err) {
            console.log(err);
        }
    }
    
    const playListRef = useCallback(getPlaylist, [dispatch, id]);
    
    const pauseAll = () => {
        if(currentPage === id) dispatch(setCurrentPage(''));
        dispatch(setVisible(false));
    }
    
    const selectRandom = (list) => {
        return list[Math.floor(Math.random() * list.length)]; 
    }
    
    const colorRef = useCallback(selectRandom, []);
    
    // useEffect(()=> {
    //     dispatch(setCurrentIndex({ currentIndex : currentIndex }));
    // }, [currentIndex])

    useEffect(()=> {
        playListRef();
    }, [playListRef]);
    if(loading) return <></>;
    return (
        <Box m={8} ml='auto' mr='auto' width={'80%'} boxShadow='lg'>
            <Box display={'flex'} w={'full'}  
                height={'20em'}
                position='relative'
                bgColor={colorRef(['gray.200', 'pink.300', 'red.100', 'whiteAlpha.200', 'blue.200', 'yellow.300'])} 
                pt={4} pb={4}
                width={'100%'}
                overflow='hidden'
                justifyContent={"space-between"}
            >
                <Box mr={5} flex={1} display='flex' flexDir={'column'} justifyContent="space-between">
                    <Box>
                        <Box display='flex' alignItems={'center'} ml={4}>
                            {/* {
                                currentIndex < 0 || !visible ? 
                                <AiFillPlayCircle color={'orange'}  size={'5rem'} onClick={playAll}  /> 
                                :
                                <MdPauseCircleFilled color={'orange'} size={'5rem'} onClick={pauseAll}  /> 
                            }  */}
                            {
                                currentPage !== id &&  currentIndex >= 0 ? 
                                <AiFillPlayCircle color={'orange'}  size={'5rem'} onClick={playAll}  /> 
                                :
                                <MdPauseCircleFilled color={'orange'} size={'5rem'} onClick={pauseAll}  /> 
                            } 
                            <Text fontSize={'xx-large'} fontWeight='black' ml={4}> { id.toUpperCase() } </Text>
                        </Box>
                        {
                            currentIndex < songList.length && currentIndex >= 0 && (
                                <Text fontSize={'large'} fontWeight='black' ml={28}> { songList[currentIndex].name } </Text>
                            )
                        }
                    </Box>
                        {
                            currentIndex < songList.length && currentIndex >= 0 && (
                                <Box border="1px solid black" bgColor={'blackAlpha.700'} p={8} ml={4} borderRadius={'50%'} width="12%">
                                    <Text color={'white'}>Tracks</Text>
                                    <Text color={'white'} ml="25%">{songList.length}</Text>
                                </Box>
                            )
                        }
                </Box>
                <Box mr={4} height="full">
                    {
                        currentIndex < songList.length && currentIndex >= 0 && (
                            <Image src={songList[currentIndex].cover} height={'10em'} />
                        ) 
                    }
                </Box>
            </Box>


            <Box p={1} mt={4} mb={4}>
                {
                    songList && songList.map((item, index) => (
                        <Card item={item} id={id} key={item._id} i={index} />
                    )) 
                }
            </Box>
        </Box>
    )
}