import styled from 'styled-components'
import colors from '../../../utils/colors'
import MenuTitle from './MenuTitle'
import MenuContainer from './MenuContainer'
import Button from '../../Reussable/Button'

const MenuWrapper = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${colors.greyLight};
border: 0 solid;
border-radius: 40px 40px 0 0;
position: relative;
width: 100%;
margin-top: -70px;
padding: 10px 20px 40px 20px;
`

function MenuSection({restaurant}) {
    const { restaurantName, menu } = restaurant
    return (
        <MenuWrapper>
            <MenuTitle restaurantName={restaurantName} />
            <MenuContainer menu={menu} />
            <Button>Commander</Button>
        </MenuWrapper>
    )
}

export default MenuSection