import styled from 'styled-components'
import Heart from '../../Reussable/Heart'

const Header = styled.div`
display: flex;
justify-content: space-between;
width: 95%;
`

const Title = styled.h2`
font-family: Shrikhand;
font-weight: 300;
font-size: 28px;
`

function MenuTitle({ restaurantName }) {
    return (
        <Header>
            <Title>{restaurantName}</Title>
            <Heart />
        </Header>
    )
}

export default MenuTitle