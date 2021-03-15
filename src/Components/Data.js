const Data = ({data}) => {

    return (
        <div>
            <h2>{data.name}</h2>
            <h4>Today</h4>
            <img alt='weather_icon'></img>
            <h1>{data.main.temp}</h1>
            <p>{data.weather[0].main}</p>
        </div>
    )
}

export default Data
