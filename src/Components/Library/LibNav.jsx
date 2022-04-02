import styledComponents from "styled-components"

const Clickables = styledComponents.div`
    font-weight : 800;
    font-size : 25px;
    margin : 0.5em;
`

const NavContainer = styledComponents.div`
    width : 80%;
    margin : auto;
    display : flex;
`

export function LibNav() {
    return <NavContainer>
        <Clickables>Overview</Clickables>
        <Clickables>Overview</Clickables>
    </NavContainer>
}