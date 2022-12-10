import { Box, IconButton, Image, Text } from "@chakra-ui/react"
import { MdPauseCircleFilled } from 'react-icons/md';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIndex, setCurrentPage, setVisible } from "../../Redux/Player/Player";
import { useState } from "react";
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { addToLikeSongs, remoeSongFromLikeList } from "../../Redux/Liked/LikedSong";
export const Card = ({item, id, i, currentPageParent, setLoading}) => {
    const { songList, currentIndex, visible, currentPage } = useSelector(store => store.player);
    const { loggedIn, user } = useSelector(store => store.login);
    const { songIds } = useSelector(store => store.liked);
    const [view, setToggle] = useState(false);
    const dispatch = useDispatch();
    const playOneSong = (krg) => {
        dispatch(setCurrentIndex({currentIndex : krg, currentPlayer : songList }));
        if(currentPage !== id) dispatch(setCurrentPage(id));
    }
    const heartClicked = async(userId, songId) => {
        setLoading(true);
        await dispatch(addToLikeSongs(userId, songId));
        setLoading(false);
    }
    const removeLikedSong = async(userId, songId) => {
        setLoading(true);
        await dispatch(remoeSongFromLikeList(userId, songId));
        setLoading(false);
    }
    const pauseSong = ()=> {
        if(currentPage !== id) dispatch(setCurrentPage(''));
        dispatch(setVisible(false));
    }
    if(currentPageParent === 'likedSongs' && !songIds.includes(item._id)){
        return <></>
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
                <Box display={'flex'} flex='1' justifyContent='space-between'>
                    <Text ml={4}>{item.name}</Text>
                    {
                        loggedIn ? <IconButton style={{transition : "all 0.5s"}} variant='ghost' _hover={{bgColor : 'transpanant'}} _active={{bgColor:'transparant'}} _focus={{outline : 0}} icon={!songIds.includes(item._id) ? <BsHeart /> : <BsHeartFill />} color={!songIds.includes(item._id) ? 'black' : 'red'} bgColor={'transparent'} onClick={() => !songIds.includes(item._id) ? heartClicked(user._id, item._id) : removeLikedSong(user._id, item._id)}/> : null
                    }
                </Box>
            </Box>
        </>
    )
}