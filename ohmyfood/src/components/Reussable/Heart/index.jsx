import styled from 'styled-components'
import colors from '../../../utils/style/colors'

const HeartSimple = styled.i`
font-size: 2rem;
padding-top: 1.5rem;
opacity: 1;
transition: all 0.3s ease-in-out;
&:hover {
    opacity: 0;
}
`

const HeartStyled = styled.i`
font-size: 2rem;
padding-top: 1.5rem;
opacity: 0;
position: absolute;
background-image: ${colors.heart};
background-clip: text;
-webkit-background-clip: text;
color: transparent;
transition: all 0.3s ease-in-out;
&:hover {
    opacity: 1;
}
`

function Heart() {
    return (
        <span>
            <HeartStyled className="fas fa-heart"></HeartStyled>
            <HeartSimple className="far fa-heart"></HeartSimple>
        </span>
    )
}

export default Heart