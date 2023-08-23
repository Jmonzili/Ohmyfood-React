import styled from 'styled-components'
import colors from '../../../utils/colors'

const ItemLi = styled.li`
    display: flex;
    background-color: ${colors.greyLight};
    border: 0 solid ;
    box-shadow: 0 3px 5px 0 ${colors.shadow};
    border-radius: 30px;
    padding: 20px 20px;
    margin: 1rem 0;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
        background: ${colors.primaryHover};
        cursor: pointer;
}
`

const Number = styled.div`
    background-color: ${colors.primary};
    color: ${colors.greyLight};
    padding: 5px 10px;
    border-radius: 20px;
    position: relative;
    top: -3px;
    right: 30px;
    font-size: 16px;
`

const Icon = styled.i`
    color: #000;
    opacity: 0.5;
    padding-right: 15px;
`

function NavItem({ id, icon, text }) {
    return (
        <ItemLi>
            <Number>{id}</Number>
            <Icon className={icon}/>
            {text}
        </ItemLi>
    )
}

export default NavItem