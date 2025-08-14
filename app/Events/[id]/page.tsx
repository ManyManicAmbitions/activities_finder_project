import Nav from "../../../components/Nav";
import Footer from '../../../components/Footer';

export default async function Events({params,}: {params: Promise<{id: string}>;}) {
    const {id} = await params;

    return (

     <div className="min-h-screen flex flex-col">
        <Nav/>
        <main className="flex-1 p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold  text-amber-300">Event Page</h1>
            <p className="mt-3">Details of event ID: {id}</p>
        </main>
        <Footer/>
     </div>
    );
}