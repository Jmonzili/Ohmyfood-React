import styled from 'styled-components'
import colors from '../../../utils/style/colors'

const FormContainer = styled.form`
    width: 100%
`
const Localisation = styled.div`
    width: 100%;
    height: 3.5rem;
    background-color: ${colors.grey};
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconMap = styled.label`
    margin-right: 1rem;
    font-size: 1.5rem;
`

const SearchBar = styled.input`
    border: 0 solid;
    background-color: ${colors.grey};
    font-size: 16px;
`

function Form() {
    return (
        <FormContainer method="post" action="#">
            <Localisation>
                <IconMap>
                    <i className="fas fa-map-marker-alt"></i>
                </IconMap>
                <SearchBar type="search" name="Recherche" id="recherche" value="Paris, Belleville"/>
            </Localisation>
        </FormContainer>
    )
}

export default Form