import React from 'react'
import { useSelector } from 'react-redux';
import styledComponents from 'styled-components';

import { Card } from './atoms/card';

const StyledRow = styledComponents.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: auto;
    width: 80%;
`

export default function HistoryNav() {
    const { history } = useSelector(store => store.history);
    if(history.length < 0) return <></>
    return (
        <>
            <StyledRow>
                {
                    history.map((track) => <Card element={track} key={track._id} />)
                }
            </StyledRow>
        </>
    )
}
