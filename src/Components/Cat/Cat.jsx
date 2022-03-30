import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { IndividualDiv, MainDiv } from "../Home/styleComponents";

const Cart = ({ current }) => {
  const [genres, setGenres] = useState([]);

  const tokenResponse = JSON.parse(localStorage.getItem("access_token"));
  // console.log(tokenResponse);

  // axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
  //   method: "GET",
  //   headers: { Authorization: "Bearer " + tokenResponse },
  // }).then((genreResponse) => {
  //   setGenres({
  //     // selectedGenre: genres.selectedGenre,
  //     listOfGenresFromAPI: genreResponse.data.categories.items,
  //   });
  // });

  // playlist categories function
  //   axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
  //   method: 'GET',
  //   headers: {
  //     'Authorization' : 'Bearer ' + tokenResponse
  //   }
  // })
  // .then(tracksResponse => {
  //   setTracks({
  //     selectedTrack: tracks.selectedTrack,
  //     listOfTracksFromAPI: tracksResponse.data.items
  //   })
  // });

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/browse/categories/toplists/playlists", {
        headers: { Authorization: "Bearer " + tokenResponse },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((er) => {
        console.log(er.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
        headers: { Authorization: "Bearer " + tokenResponse },
      })
      .then((res) => {
        setGenres(res.data.categories.items);
      });
  }, []);

  // console.log(genres);
  // console.log(tracks);
  return (
    <MainDiv>
      {genres.map((el, index) => {
        return (
          <>
            <IndividualDiv key={index}>
              <img src={el.icons[0].url} alt="" className="cat-image" />
              <p>{el.name}</p>
            </IndividualDiv>
          </>
        );
      })}
    </MainDiv>
  );
};

export default Cart;
