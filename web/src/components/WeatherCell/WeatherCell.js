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
let url, day;
  switch (weather.conditions) {
    case 'Clouds':
      url = 'https://open.spotify.com/embed/playlist/3aulxixxG4vdUg3tfUBDSa';
      day = "cloudy"
      break;
    case 'Snow':
      url = 'https://open.spotify.com/embed/playlist/00TIwRNFQPJ7FLVQFLBTqB';
      day = "snowy"
      break;
    case 'Clear':
      url = 'https://open.spotify.com/embed/playlist/1QGsKNsG4H1eB9r23j4PCE';
      day = "sunny"
      break;
      case 'Rain':
        url = 'https://open.spotify.com/embed/playlist/7tLlQC3FZ7tlDqJSXS1PKb';
        day = "rainy"
    default:
      break
  }
  return (
    <section className="fade-in weather-playlist-section flex w-full flex-col lg:flex-row">
      <div className="lg:w-1/2 border flex-1">
        <h1 className="text-white lg:text-7xl p-6 lg:px-16 lg:py-6 music-forecast">
          It's {weather.temp} ºC in {weather.city} and it's a {day} day
        </h1>
        <h1 className="weather-cell-subtitle text-3xl px-6 lg:px-16 text-white">
          Here's a playlist for you today{' '}
          <span className="lg:text-4xl lg:inline hidden">☞</span>
          <span className="lg:4xl lg:hidden">☟</span>
        </h1>
      </div>
      <div className="lg:w-1/2 border flex-1">
        {weather.conditions ? (
          <iframe
            src={url + '?theme=0'}
            width="100%"
            height="100%"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </section>
  )
}
