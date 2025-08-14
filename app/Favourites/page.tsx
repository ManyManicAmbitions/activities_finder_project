import Nav from "../../components/Nav";
import Footer from '../../components/Footer';

export default function Favourites() {

    return (

    <div className="min-h-screen flex flex-col">
        <Nav/>
        <main className="flex-1 p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-amber-300">Favourite Page</h1>
            <p className="mt-3">Favourite activities will be shown here</p>
        </main>
        <Footer/>
    </div>
    );
}