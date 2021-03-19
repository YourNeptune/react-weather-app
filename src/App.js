import API_key from './config'
import SearchBar from './Components/SearchBar'
import Header from './Components/Header'
import Data from './Components/Data'
import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [query, setQuery] = useState('')
  const [data, setData] = useState({})
  const [showData, setShowData] = useState(false)


  const goBack = () => {
    setShowData(false)
  }

  const onChange = (e) => {
      setText(e.target.value)
  }

  const getQuery = (e) => {
    e.preventDefault()
    setQuery(text)
    setText('')
  }

  useEffect(() => {
    if(query){
      getWeather()
    }
  },[query])


   //Get Weather data:
    const getWeather = async () => {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_key}`)
          if(res.status === 200){
            const weatherData = await res.json()
            setData(weatherData)
            setText('')
            setShowData(true)
          }else{
            alert('Error: Can not find any matching data')
          }
        // console.log(res.status)
  } 
  

  return (
    <>
      <div className="App">
        {!showData && 
          <div className='search-page'>
            <Header/>
            <SearchBar 
              text={text} 
              onChange={onChange}
              getQuery={getQuery}
            />
          </div>
        }

        {showData &&           
          <div>
            <Data data={data} goBack={goBack}/>
          </div>  
        }
         
      </div>
    </>
   
  );
}

export default App;
