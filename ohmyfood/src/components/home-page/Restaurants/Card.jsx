import styled from 'styled-components'
import colors from '../../../utils/style/colors'
import Heart from '../../Reussable/Heart'

const CardWrapper = styled.div`
border: 0 solid;
border-radius: 15px;
box-shadow: 0 3px 10px 2px ${colors.shadow};
background-color: white;
margin: 15px 0;
transition: all 0.5s ease-in-out;
&:hover {
    box-shadow: 0 3px 10px 2px ${colors.secondaryHover};
    transform: scale(1.05);
}
`

const CardCover = styled.div`
border-radius: 15px 15px 0 0;
width: 335px;
height: 175px;
position: relative;
overflow: hidden;
`

const CardPicture = styled.img`
position: relative;
bottom: 30%;
`

const CardDescription = styled.div`
display: flex;
padding: 0 15px;
justify-content: space-between;
`

const CardTitle =styled.p`
font-weight: 500;
`

function Card({ id, picture, street, name }) {
    return (
        <CardWrapper>
            <CardCover>
                <CardPicture src={picture} alt={name} />
            </CardCover>
            <CardDescription>
                <div>
                    <CardTitle>{name}</CardTitle>
                    <p>{street}</p>
                </div>
                <Heart />
            </CardDescription>
        </CardWrapper>
    )
}

export default Card