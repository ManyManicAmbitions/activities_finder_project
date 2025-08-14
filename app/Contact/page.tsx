import Nav from "../../components/Nav";
import Footer from '../../components/Footer';

export default function Contact() {

    return (

    <div>
        <Nav/>
        <main p-4 max-w-2xl mx-auto>
            <h1 text-3xl font-bold>Contact Page</h1>
            <p className="mt-3">Contact us at example@placeholder.com</p>
        </main>
        <Footer/>
    </div>
    );
}