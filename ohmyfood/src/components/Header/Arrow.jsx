import styled from 'styled-components'
// import React from 'react'

const BackIcon = styled.span`
position: absolute;
bottom: 1rem;
left: 2rem;
justify-content: flex-start;
align-items: flex-start;
z-index: 1;
font-size: 1.5rem;
`

function Arrow(props) {
    return (
        <BackIcon>
            <i className='fas fa-arrow-left' />
        </BackIcon>
    )
}

export default Arrow