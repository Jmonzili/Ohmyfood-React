import styled from 'styled-components'
import colors from '../../../utils/style/colors'

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

const SlogantBtn = styled.div`
    background: ${colors.btnStyled};
    border: 0 solid;
    border-radius: 30px;
    color: white;
    font-weight: 500;
    padding: 1rem;
    margin: 20px;
    box-shadow: 0 3px 10px 2px ${colors.shadow};
    transition: 700ms cubic-bezier(0.44,-0.73, 0.34, 1.71);
    &:hover {
        opacity: 0.8;
        cursor: pointer;
        box-shadow: 0 3px 10px 2px #201f1f
    }
`

function Slogant() {
    return (
        <SlogantContainer>
            <h2>Réservez le menu qui<br />vous convient</h2>
            <SlogantText>
            Découvrez des restaurants d'exception, séléctionnés par nos soins.
            </SlogantText>
            <SlogantBtn>
                Explorer nos restaurants
            </SlogantBtn>
        </SlogantContainer>
    )
}

export default Slogant