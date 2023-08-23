import styled from 'styled-components'
import colors from '../../../utils/colors'
import PlatItem from './PlatItem'

const BlocStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
`

const BlocTitle = styled.h3`
font-size: 20px;
font-weight: 300;
margin-left: 10px;
position: relative;
&::after {
    content: "";
    position: absolute;
    top: 2rem;
    left: 0rem;
    height: 0.25rem;
    width: 3rem;
    background-color: ${colors.tertiary};
}
`

function MenuBloc({category, menu}) {
    let platsOfCategory = []

    menu.forEach((plat) => {
        if(plat.type === category) {
            platsOfCategory.push(plat)
            platsOfCategory = [...new Set(platsOfCategory)]
        }
    })
    console.log({platsOfCategory})
    return (
        <BlocStyled>
            <BlocTitle>{category}</BlocTitle>
            <div>
            {platsOfCategory.map((plat, index) => (
                <PlatItem plat={plat} />
            ))}
            </div>
        </BlocStyled>
    )
}

export default MenuBloc