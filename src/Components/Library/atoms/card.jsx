import React from "react"
import styledComponents from "styled-components"

const SongPoster = styledComponents.div`
    background-image : url(${props=>props.imgSrc||'https://picsum.photos/200'});
`

const Desc = styledComponents.p`
    color: #f1f1f1;
    margin-top: 0.25em:
    margin-bottom: 0.25em:
`

function Card({poster,title,author,songLink}){
    return <div className="card-wrapper">
        <SongPoster imgSrc={poster}/>
        <div className="description">
            <Desc>{title||"Title"}</Desc>
            <Desc>{author||"Author"}</Desc>
        </div>
    </div>
}

export {Card};