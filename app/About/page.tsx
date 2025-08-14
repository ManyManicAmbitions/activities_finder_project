import Nav from "../../components/Nav";
import Footer from '../../components/Footer';
import ShowHideButton from '../../components/ShowHideButtons';

export default function About() {

    return (

    <div className="min-h-screen flex flex-col">
        <Nav/>
        <main className="flex-1 p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold  text-amber-300">About Page</h1>
            <p className="mt-3">Some basic information about the application</p>
            <ShowHideButton/>
        </main>
        <Footer/>
    </div>
    );
}