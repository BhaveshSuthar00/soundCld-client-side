import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux"
import { Card } from "./Card";

export const PlayList = () => {
    const { songList } = useSelector(store => store.player);
    return (
        <>
            <Box>
                {
                    songList && songList.map((item) => (
                        <Card item={item} key={item._id}/>
                    )) 
                }
            </Box>
        </>
    )
}