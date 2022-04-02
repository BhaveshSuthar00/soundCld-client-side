import React from "react"
import styledComponents from "styled-components"

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

function Card({ poster, title, author, songLink }) {
    return <div className="card-wrapper" style={{ margin: "0.5rem", }}>
        <SongPoster imgSrc={poster}>
            {/* <img src="https:picsum.photos/20" alt="" /> */}
        </SongPoster>
        <div className="description">
            <Desc>{title || "Title"}</Desc>
            <Desc>{author || "Author"}</Desc>
        </div>
    </div>
}

export { Card };