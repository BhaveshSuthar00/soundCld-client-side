import axios from "axios";
import { useEffect, useState } from "react";

export const Top = () => {
  const [topTracksdata, setToptracksData] = useState();

  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios.get("https://soundcloud-serverside.herokuapp.com/").then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <div>Top LIst</div>
    </>
  );
};
