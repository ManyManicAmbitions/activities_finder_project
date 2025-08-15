export default function Card({title, description}: {title: string; description: string}) {
    return (
        <div className="border rounded p-3 shadow-md mb-2">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p>{description}</p>
        </div>
    );
}