import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'
import Arrow from './Arrow'

const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 65px;
    background-color: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 5px 0 ${colors.shadow};
    position: relative;
`

const Logo = styled.h1`
    font-family: Shrikhand;
    font-weight: 300;
`

function Header(props) {
    const {arrowShow} = props;
    return (
        <HeaderContainer>
            {arrowShow &&
                <Link to='/'>
                    <Arrow />
                </Link>
            }
            <Logo>Ohmyfood</Logo>
        </HeaderContainer>
        
    )
}

export default Header