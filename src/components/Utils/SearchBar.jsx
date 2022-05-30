import { useContext, useState } from 'react'

import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete'
import { WeatherContext } from '../../context/WeatherContextProvider'

export default function SearchBar() {
  const [input, setInput] = useState('')
  const { searchWeather } = useContext(WeatherContext)
  return (
    <form className='relative z-10 grid grid-cols-2 '>
      <PlacesAutocomplete
        onChange={(address) => setInput(address)}
        value={input}
        onSelect={(newAddress, placeId, suggestion) => {
          searchWeather({ newAddress })
          setInput('')
        }}
        googleCallbackName='initOne'
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className=' w-full col-span-3 md:col-end-4 md:col-span-2'>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className:
                  'w-full h-10 p-3 mt-5 border rounded border-cardGray place-self-end'
              })}
            />
            <div className='absolute z-50 max-w-xs p-3 bg-white border rounded top-15 h-fit empty:hidden border-cardGray place-self-start'>
              {loading && ''}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'mt-2 border-b border-solid border-cardGray'
                  : 'mt-2 border-b border-dashed border-cardGray'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                    key={suggestion.description}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </form>
  )
}
