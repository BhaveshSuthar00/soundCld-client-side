import React, {useState, useEffect} from 'react'
import styledComponents from 'styled-components';

import { Card } from './atoms/card';

const StyledRow = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: auto;
    width: 80%;
`

export default function HistoryNav() {
    const [track, setTrack] = useState([])
    const data = JSON.parse(localStorage.getItem("history")) || [];

    useEffect(()=>{
        setTrack(data)
    },[])
    if(track.length < 0){
        return <></>
    }
    return (
        <>
            <StyledRow>
                {
                    track.map((track,i ) => <Card element={track} key={i} />)
                }
            </StyledRow>
        </>
    )
}
