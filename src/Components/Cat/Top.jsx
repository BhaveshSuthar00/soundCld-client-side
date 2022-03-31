import axios from "axios";
import { useEffect, useState } from "react";
import { ElementDiv } from "../Home/styleComponents";

export const Top = () => {
  const [topTracksdata, setToptracksData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://soundcloud-serverside.herokuapp.com/")
      .then(({ data }) => {
        const finalData = data.filter((e) => {
          if (e.playlist[0] === "top100") {
            return e;
          }
        });
        setToptracksData(finalData);
      });
  };
  console.log(topTracksdata);

  return (
    <>
      {topTracksdata.map((e) => {
        return (
          <>
            <div>
              <img src={e.cover} alt="" />
              <p> {e.category}</p>
              <p> {e.playlist}</p>
            </div>
          </>
        );
      })}
    </>
  );
};
