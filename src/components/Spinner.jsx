function Spinner({error}) {
    return (
        <div className="text-center py-5">
            <div className={`spinner-border text-${error ? 'danger' : 'black'} spinner`} role="status"></div>
            <p className="fs-3 text-danger mt-3">{error}</p>
        </div>
    )
}
export default Spinner;