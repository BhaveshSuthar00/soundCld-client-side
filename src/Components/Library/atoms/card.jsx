import React, {useContext} from "react"
import styledComponents from "styled-components"
import { ChangeSong } from '../../../Contexts/Status'

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
    const {handleStatus2} = useContext(ChangeSong);
    const handlePlay = ()=>{
        let localSrc = JSON.parse(localStorage.getItem("click")) || [];
        localSrc[0] = [element];
        localStorage.setItem("click", JSON.stringify(localSrc));
        handleStatus2();
    }
    return (
        <div className="card-wrapper" style={{ margin: "0.5rem", }} onClick={() => {
            handlePlay();
        }}>
            <SongPoster imgSrc={element.cover}>
                {/* <img src="https:picsum.photos/20" alt="" /> */}
            </SongPoster>
            <div className="description">
                <Desc>{element.name || "Title"}</Desc>
                <Desc>{element.singer || "Author"}</Desc>
            </div>
        </div>
    )
}

export { Card };