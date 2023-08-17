import { Link } from "react-router-dom"
import { styled } from "styled-components"

const FooterContainer = styled.footer`
    background-color: black;
    color: white;
    padding: 0.1rem 2rem 1rem 2rem;
    position: relative;
`

const FooterTitle = styled.p`
    font-family: Shrikhand;
    font-size: 20px;
`

const ListUl = styled.ul`
    padding: 0;
    list-style-type: none;
`

const StyledLi = styled.li`
    margin: 0.8rem 0;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: 500;
    &:visited {
        color: white;
    }
`

function Footer() {
    return(
        <FooterContainer>
            <FooterTitle>ohmyfood</FooterTitle>
            <ListUl>
                <StyledLi>
                    <StyledLink>
                        <i className="fas fa-utensils"></i> Proposer un restaurant
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink>
                        <i className="fas fa-hands-helping"></i> Devenir partenaire
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink>
                        Mentions légales
                    </StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={"mailto:omhcontact@ohmyfood.com"}>
                        Contact
                    </StyledLink>
                </StyledLi>
            </ListUl>
        </FooterContainer>
    )
}

export default Footer