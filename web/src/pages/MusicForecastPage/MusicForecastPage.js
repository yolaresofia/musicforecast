import { useParams } from '@redwoodjs/router'
import WeatherCell from 'src/components/WeatherCell'
import Marquee from 'src/components/Marquee';

const MusicForecastPage = () => {
  const zip = useParams()
  const name = useParams()
  return (
    <section>
      <p className="weather-cell-headers text-7xl">Hi {name.name}!</p>
      {zip && <WeatherCell zip={zip.zip} />}
      <Marquee />
    </section>
  )
}

export default MusicForecastPage
