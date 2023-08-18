import styled from 'styled-components'
// import { Link } from 'react-router-dom'
import { restaurantsList } from '../../../datas/restaurantsList'
import Card from './Card'

const List = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

function RestaurantsList() {
    return (
        <List>
            {restaurantsList.map(({ id, picture, street, name}) => (
                <Card
                    id={id}
                    picture={picture}
                    street={street}
                    name={name}
                />
            ))}
        </List>
    )
}

export default RestaurantsList