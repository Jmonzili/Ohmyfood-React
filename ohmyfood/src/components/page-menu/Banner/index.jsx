import styled from 'styled-components'

const BannerContainer = styled.div`
width: 100%;
height: 40vh;
`

const ImgBanner = styled.img`
width: 100%;
height: 100%;
position: relative;
object-fit: cover;
`

function Banner({cover, restaurantName}) {
    return (
        <BannerContainer>
            <ImgBanner src={cover} alt={`Bannière ${restaurantName}`} />
        </BannerContainer>
    )
}

export default Banner