import styled from 'styled-components'
import colors from '../../../utils/colors'
import RestaurantsList from './RestaurantList'

const SectionRestaurants = styled.section`
width: 100%;
background-color: ${colors.greyLight};
padding: 20px 15px;
`

function Restaurants() {
    return (
        <SectionRestaurants>
            <h2>Restaurants</h2>
            <RestaurantsList />
        </SectionRestaurants>
    )
}

export default Restaurants