import ContactForm from '../../components/ContactForm';

export default function Contact() {

    return (

    <div className="min-h-screen flex flex-col">
        <main className="flex-1 p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold  text-amber-300">Contact Page</h1>
            <p className="mt-3">Contact us at example@placeholder.com</p>
            <ContactForm/>
        </main>
    </div>
    );
}