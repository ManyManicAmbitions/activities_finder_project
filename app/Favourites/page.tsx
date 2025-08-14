import Nav from "../../components/Nav";
import Footer from '../../components/Footer';

export default function Favourites() {

    return (

    <div>
        <Nav/>
        <main p-4 max-w-2xl mx-auto>
            <h1 text-3xl font-bold>Favourite Page</h1>
            <p className="mt-3">Favourite activities will be shown here</p>
        </main>
        <Footer/>
    </div>
    );
}