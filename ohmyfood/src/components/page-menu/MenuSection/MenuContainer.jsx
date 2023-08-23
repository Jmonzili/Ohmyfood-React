import styled from 'styled-components'
import MenuBloc from './MenuBloc'

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

function MenuContainer({menu}) {
    let categories = []

    menu.forEach((plats) => {
        categories.push(plats.type)
        categories = [...new Set(categories)]
    })
    console.log({menu})
    return (
        <Container>
            {categories.map((category, index) => (
                <MenuBloc 
                    key={index}
                    category={category}
                    menu={menu}
                />
            ))}
        </Container>
    )
}

export default MenuContainer