import styled from 'styled-components'
import colors from '../../../utils/colors'

const Sticker = styled.span`
position: absolute;
height: 2rem;
width: 5.5rem;
background-color: ${colors.tertiary};
color: ${colors.tertiaryDark};
display: grid;
place-items: center;
font-weight: 500;
top: 1rem;
right: 1rem;
z-index: 1;
border-radius: 2px;
`

function StickerNew() {
    return (
        <Sticker>Nouveau</Sticker>
    )
}

export default StickerNew