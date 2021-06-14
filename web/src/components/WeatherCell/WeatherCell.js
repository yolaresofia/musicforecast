export const QUERY = gql`
  query($zip: String!) {
    weather: getWeather(zip: $zip) {
      zip
      city
      conditions
      temp
      icon
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div className="text-center mt-2">
    <span className="bg-red-200 text-red-700 py-2 px-4 inline-block rounded border border-red-700">
      {error.message.replace('GraphQL error: ', '')}
    </span>
  </div>
)

export const Success = ({ weather }) => {
  return (
    <section className="fade-in weather-playlist-section flex w-full flex-col lg:flex-row">
      <div className="lg:w-1/2 border flex-1">
        <h1 className="text-white lg:text-7xl p-6 lg:px-16 lg:py-6 music-forecast">
          It's {weather.temp} ºC in {weather.city} and it's a day with{' '}
          {weather.conditions}
        </h1>
        <h1 className="weather-cell-subtitle text-3xl px-6 lg:px-16 text-white">
          Here's a playlist for you today <span className="lg:text-4xl lg:inline hidden">☞</span><span className="lg:4xl lg:hidden">☟</span>
        </h1>
      </div>
      <div className="lg:w-1/2 border flex-1">
        {weather.conditions == 'Clouds' ? (
          <iframe
            src="https://open.spotify.com/embed/playlist/5737dPN0TW9dH7GvXTf7lv?theme=0"
            title="summer"
            width="100%"
            height="100%"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        ) : (
          <h1>caso 2</h1>
        )}
      </div>
    </section>
  )
}
