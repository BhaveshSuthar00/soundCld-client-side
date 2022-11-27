import React from "react"
import { useDispatch } from "react-redux"
import styledComponents from "styled-components"
import { setCurrentPlayer } from "../../../Redux/Player/Player"

const SongPoster = styledComponents.div`
    background-image : url(${props => props.imgSrc || 'https://picsum.photos/200'});  
    background-size : contain;
    display:flex;
    justify-content:center;
    align-items:center;
    height:150px;  
    width:150px;  
`

const Desc = styledComponents.p`
    color: #111111;
    margin-top: 0;
    margin-bottom: 0;
    text-align:left;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
function Card({ element }) {
    const dispatch = useDispatch();
    const handlePlay = ()=>{
        dispatch(setCurrentPlayer([element]));
    }
    return (
        <div className="card-wrapper" style={{ margin: "0.5rem", }} onClick={() => {
            handlePlay();
        }}>
            <SongPoster imgSrc={element.cover}>
            </SongPoster>
            <div className="description">
                <Desc>{element.name || "Title"}</Desc>
                <Desc>{element.singer || "Author"}</Desc>
            </div>
        </div>
    )
}

export { Card };