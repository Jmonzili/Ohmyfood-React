import styled from 'styled-components'
import { navList } from '../../../datas/navList'
import NavItem from './NavItem'

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 5%;
`

function NavList() {
    return (
        <List>
            {navList.map(({ id, icon, text}) => (
                <NavItem
                    id={id}
                    icon={icon}
                    text={text}
                />
            ))}
        </List>
    )
}

export default NavList