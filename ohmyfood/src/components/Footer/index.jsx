import { Link } from "react-router-dom"
import { styled } from "styled-components"

const FooterContainer = styled.footer`
    background-color: black;
    color: white;
    width: 100%;
    padding: 0 2rem 1rem 2rem;
    position: relative;
`

const ListUl = styled.ul`
    padding: 0;
    list-style-type: none;
`

const StyledLi = styled.li`
    margin: 0.8rem 0;
    font-weight: 500;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:visited {
        color: white;
    }
`

function Footer() {
    return(
        <FooterContainer>
            <ListUl>
                <StyledLi>
                    <StyledLink>
                        Mentions légales
                    </StyledLink>
                </StyledLi>
            </ListUl>
        </FooterContainer>
    )
}

export default Footer