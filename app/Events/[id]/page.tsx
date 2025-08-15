import Card from '../../../components/Card'

export default async function Events({params,}: {params: Promise<{id: string}>;}) {
    const {id} = await params;

    return (

     <div className="min-h-screen flex flex-col">
        <main className="flex-1 p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold  text-amber-300 mb-4">Event Page</h1>
            <Card
            title={`Event #${id}`}
            description={`Placeholder for details about event ${id}. API will be integrated in phase 3 to pull real data`}/>
        </main>
     </div>
    );
}