import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({text, onChange, getQuery}) => {

    
    return (
       <div>
            <form className='search-form' onSubmit={getQuery}>
                <div className='search-bar'>
                    <input
                        type='text'
                        placeholder={`Enter city's name`} 
                        onChange={onChange}
                        value={text}
                        id='text'
                        // onKeyPress={getWeather}
                    />

                    <button
                        type='submit'  
                        className='search-icon' 
                    >
                            <FontAwesomeIcon 
                                icon={faSearch}
                                size='lg'   
                            />
                    </button>
                </div>  
            </form>
       </div> 
    )
}

export default SearchBar
