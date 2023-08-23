import styled from 'styled-components'
import colors from '../../../utils/colors'
import Button from '../../Reussable/Button'

const SlogantContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${colors.greyLight};
    flex-wrap: wrap;
    padding: 30px 0;
    text-align: center;
`

const SlogantText = styled.p`
    width: 90%
`

function Slogant() {
    return (
        <SlogantContainer>
            <h2>Réservez le menu qui<br />vous convient</h2>
            <SlogantText>
            Découvrez des restaurants d'exception, séléctionnés par nos soins.
            </SlogantText>
            <Button>
                Explorer nos restaurants
            </Button>
        </SlogantContainer>
    )
}

export default Slogant