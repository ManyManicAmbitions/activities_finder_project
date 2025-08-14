import Nav from "../../components/Nav";
import Footer from '../../components/Footer';

export default function About() {

    return (

    <div>
        <Nav/>
        <main p-4 max-w-2xl mx-auto>
            <h1 text-3xl font-bold>About Page</h1>
            <p className="mt-3">This app will help to find local activities and events</p>
        </main>
        <Footer/>
    </div>
    );
}