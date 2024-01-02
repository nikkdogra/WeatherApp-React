function Forecast({humidity,windSpeed}) {
    return (
        <div className="d-flex justify-content-between mt-5">
            <div className="d-flex gap-2">
                <i className="fa-solid fs-1 fa-droplet pt-2"></i>
                <p><span className="fw-bolder fs-5">{humidity}%</span><br/>Humidity</p>
            </div>
            <div className="d-flex gap-2">
                <i className="fa-solid fs-1 fa-wind pt-2"></i>
                <p><span className="fw-bolder fs-5">{windSpeed} Km/H</span><br/>Wind Speed</p>
            </div>
        </div>
    )
}
export default Forecast;