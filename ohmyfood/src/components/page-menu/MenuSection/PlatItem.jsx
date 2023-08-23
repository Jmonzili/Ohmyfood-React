import styled from 'styled-components'
import colors from '../../../utils/colors'
import '../../../utils/style/PlatItem.css'

const PlatContainer = styled.div`
display: flex;
background-color: white;
border: 0 solid;
border-radius: 15px;
width: 100%;
margin: 10px 0;
overflow: hidden;
box-shadow: 0 3px 10px 2px ${colors.shadow};
`

const PlatDescription = styled.div`
display: flex;
width: auto;
padding: 10px;
justify-content: space-between;
overflow: hidden;
width: 100%;
`

const PlatText = styled.div`
display: flex;
flex-direction: column;
padding: 5px 0;
white-space: nowrap;
overflow: hidden;
`

const PlatTitle = styled.p`
font-weight: 500;
font-size: 18px;
margin: 5px 0;
overflow: hidden;
text-overflow: ellipsis;
`

const PlatSubtitle = styled.p`
margin: 5px 0;
overflow: hidden;
text-overflow: ellipsis;
`

const PlatPrice = styled.p`
display: flex;
flex-direction: column;
font-weight: bold;
justify-content: flex-end;
padding: 5px;
`

const CheckBox = styled.div`
background: ${colors.tertiary};
color: white;
font-size: 2rem;
border-radius: 0 15px 15px 0;
padding: 0 1rem;
box-sizing: border-box;
margin-right: -4rem;
transition: all 500ms ease-in-out;
`

const CheckIcon = styled.i`
color: ${colors.tertiary};
background: white;
position: relative;
top: 30%; 
border-radius: 30px;
`

function PlatItem(plat) {
    const {
        name,
        subtitle,
        price
    } = plat.plat
    
    console.log({plat})
    return (
        <PlatContainer className='plat-container'>
            <PlatDescription>
                <PlatText>
                    <PlatTitle>{name}</PlatTitle>
                    <PlatSubtitle>{subtitle}</PlatSubtitle>
                </PlatText>
                <PlatPrice>{price/100}€</PlatPrice>
            </PlatDescription>
            <CheckBox className="check-box">
                <CheckIcon className="fa-regular fa-circle-check"></CheckIcon>
            </CheckBox>
        </PlatContainer>
    )
}

export default PlatItem