import styled from 'styled-components'

function MenuContainer({menu}) {
    let typesOfMenu = []

    menu.forEach((plat) => {
        typesOfMenu.push(plat.type)
        typesOfMenu = [...new Set(typesOfMenu)]
    })
    console.log({typesOfMenu})
    return
}

export default MenuContainer