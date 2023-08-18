import styled from 'styled-components'
import NavList from './NavList'

const NavContainer = styled.aside`
    width: 95%;
    padding: 2rem 0;
`



function Navigation() {
    return (
        <NavContainer>
            <h2>Fonctionnement</h2>
            <NavList />
        </NavContainer>
    )
}

export default Navigation