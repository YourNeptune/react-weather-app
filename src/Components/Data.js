import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudRain, faCloudSun, faBolt, faSnowflake, faSun, faCloudShowersHeavy, faWind} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'

const Data = ({data, goBack}) => {

    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [icon, setIcon] = useState({})

    const checkSize = () => setWindowSize(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    })

    useEffect(() => {
        getWeatherIcon(data.weather[0].icon)
    }, [data])

    const roundTemp = (t) => {
        return Math.round(t)
    }

    const getWeatherIcon = (id) => {
        switch(id) {
            case '01d':
            case '01n':
                setIcon(faSun)
                break;

            case '02d':
            case '02n':
                setIcon(faCloudSun)
                break;

            case '03d':
            case '03n':
            case '04d':
            case '04n':
                setIcon(faCloud)
                break;
            
            case '09d':
            case '09n':
                setIcon(faCloudShowersHeavy)
                break;
            
            case '10d':
            case '10n':
                setIcon(faCloudRain)
                break;

            case '11d':
            case '11n':
                setIcon(faBolt)
                break;
            
            case '13d':
            case '13n':
                setIcon(faSnowflake)
                break;

            case '50d':
            case '50n':
                setIcon(faWind)
                break;

            default:
                
        }
    }


  
    return (
        <>  
            <div className='data-container'>
                    
                <div className={windowSize > 500 ? 'card' : ''}>
                    <div className='data-title gap'>
                        <p className='location'>{data.name}</p>
                        <p className='description'>{data.weather[0].main}</p>
                    </div>
                    <div className='data-icon gap'>
                        <FontAwesomeIcon 
                                    icon={icon}
                                    size='2x'   
                                />
                    </div>
                    <div className='data-info'>
                        <h1 className='temp'>{roundTemp(data.main.temp)} <span>&#8451;</span></h1>
                        
                        
                        <div className='minmax-temp text'>
                            <p><span>L: </span> {roundTemp(data.main.temp_min)} <span>&#8451;</span></p>
                            <p><span>H: </span> {roundTemp(data.main.temp_max)} <span>&#8451;</span></p>
                        </div>
                        <p className='text'><span>Feels like: </span> {roundTemp(data.main.feels_like)} <span>&#8451;</span></p>
                    </div>
                    <h5 onClick={goBack} className='goback'>Back to Search</h5>
                </div>

                
            </div>
        </>
        
    )
}

export default Data
