import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
            {restaurantsList.map(({ id, picture, street, name, isNew}) => (
                <Link key={id} to={`/menu/${id}`}>
                    <Card
                        id={id}
                        picture={picture}
                        street={street}
                        name={name}
                        isNew={isNew}
                    />
                </Link>
            ))}
        </List>
    )
}

export default RestaurantsList