import Footer from "../../components/Footer"
import Header from "../../components/Header"

function Error() {
    return (
        <div>
            <Header arrowShow={true} />
            <main>
                <h2>Oups 🙈 Cette page n'existe pas</h2>
            </main>
            <Footer />
        </div>
    )
}
 
export default Error