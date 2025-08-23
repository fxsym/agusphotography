export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center">
            <h1>Ooops!!</h1>
            <p>Sorry, an expected error has occured</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}