import React from 'react'
import styledComponents from 'styled-components';

import { Card } from './atoms/card';

const StyledRow = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: auto;
    width: 80%;
`

export default function History() {
    const data = JSON.parse(localStorage.getItem("click")) || [];

    const tracks = data[0] || null

    console.log({ tracks })

    return (
        <>
            <StyledRow>
                {
                    tracks && tracks.map(track => <Card title={track.name} key={track.id} author={track.singer} poster={track.cover} />)
                }

            </StyledRow>

        </>
    )
}
