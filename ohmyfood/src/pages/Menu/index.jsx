import React from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import  { menusList }  from "../../datas/menusList"
import Banner from "../../components/page-menu/Banner"
import MenuSection from "../../components/page-menu/MenuSection"

function Menu() {
    //  On récupère L'id du restaurant via les params
    const { id: queryId } = useParams()
    /*  On récupère les datas du restaurant en fesant 
        correspondre son id à celui des params  */
    const restaurant = menusList.filter(
        (restaurantFind) => restaurantFind.id.toString() === queryId
    )[0];

    const {
        restaurantName,
        cover
    } = restaurant
    console.log({restaurant})
    return (
        <div>
            <Header arrowShow={true} />
            <main>
                <Banner
                    cover={cover}
                    restaurantName={restaurantName}
                />
                <MenuSection restaurant={restaurant} />
            </main>
            <Footer />
        </div>
    )
}

export default Menu