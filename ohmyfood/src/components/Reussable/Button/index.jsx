import styled from 'styled-components'
import colors from '../../../utils/style/colors'

const StyledBtn = styled.div`
    background: ${colors.button};
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

function Button({children}) {
    return (
        <StyledBtn>{children}</StyledBtn>
    )
}

export default Button