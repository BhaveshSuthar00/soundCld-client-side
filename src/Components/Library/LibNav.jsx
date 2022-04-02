import styledComponents from "styled-components"

const Clickables = styledComponents.button`
    font-weight : 800;
    font-size : 25px;
    margin : 0.5em;
    border: none;
    background: transparent
`

const NavContainer = styledComponents.div`
    width : 80%;
    margin : auto;
    display : flex;
`

export function LibNav(props) {
    return <NavContainer>
        <Clickables onClick={() => props.onTabChange('overview')}>Overview</Clickables>
        <Clickables onClick={() => props.onTabChange('history')}>History</Clickables>
    </NavContainer>
}