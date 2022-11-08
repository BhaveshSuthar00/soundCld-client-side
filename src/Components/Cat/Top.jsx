import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPlayerWithLocal } from "../../Redux/Player/Player";
import { ElementDiv } from "../Home/styleComponents";

export const Top = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    pop: [],
    rock: [],
    jezz: [],
    classical: [],
  });
  const getData = () => {
    axios
      .get("https://soundcloud-serverside.herokuapp.com/api/category/all")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSongPlaylist = (data) => {
    let cat = [];
    if (data === "pop") {
      cat = category.pop;
    }
    if (data === "classical") {
      cat = category.classical;
    }
    if (data === "rock") {
      cat = category.rock;
    }
    if (data === "jazz") {
      cat = category.jazz;
    }
    dispatch(setCurrentPlayerWithLocal(cat));
  };  
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <Box as={Link} to="/playlist" mt={6} textAlign='center'
      transition="transform 0.3s ease-in"
      display={'flex'}
      flexDir='column'
      _hover={{transform: "scale(1.03)",cursor: "pointer"}}
      >
        <Image src={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pop-album-art-design-template-905e52dee4423a5f33b0c508665cf7bf_screen.jpg?ts=1598362553'} />
        <Text margin={'auto'} textAlign='center'>Pop</Text>
      </Box> */}
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("pop");
          }}
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pop-album-art-design-template-905e52dee4423a5f33b0c508665cf7bf_screen.jpg?ts=1598362553"
          alt=""
        />
        <p>Pop</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("classical");
          }}
          src="https://i.scdn.co/image/ab67706c0000bebb1da40ad6c7704a5997ca72d7"
          alt=""
        />
        <p>Classical</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("rock");
          }}
          src="https://images.8tracks.com/cover/i/001/052/338/75322.original-2297.png?rect=13,0,949,949&q=98&fm=jpg&fit=max"
          alt=""
        />
        <p>Rock</p>
      </ElementDiv>
      <ElementDiv>
        <img
          onClick={() => {
            handleSongPlaylist("jazz");
          }}
          src="https://brainpickers.co.uk/img/game-icons/jazz-song-challenge.png"
          alt=""
        />
        <p>Jazz</p>
      </ElementDiv>
    </>
  );
};
