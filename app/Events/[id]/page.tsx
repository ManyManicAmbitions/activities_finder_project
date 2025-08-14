import Nav from "../../../components/Nav";
import Footer from '../../../components/Footer';

export default function Events({params}: {params: {id: string}}) {

    return (

     <div>
        <Nav/>
        <main p-4 max-w-2xl mx-auto>
            <h1 text-3xl font-bold>Event Page</h1>
            <p className="mt-3">Details of event ID: {params.id}</p>
        </main>
        <Footer/>
     </div>
    );
}