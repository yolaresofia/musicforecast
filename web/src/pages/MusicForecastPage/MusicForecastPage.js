import { useParams } from '@redwoodjs/router'
import WeatherCell from 'src/components/WeatherCell'
import Marquee from 'src/components/Marquee'
import { Link, routes } from '@redwoodjs/router'

const MusicForecastPage = () => {
  const zip = useParams()
  const name = useParams()
  return (
    <section className="bg-black h-screen border">
      <div className="flex flex-row">
        <Link
          to={routes.home()}
          className="text-white weather-cell-subtitle px-4 text-4xl"
        >
          ☜
        </Link>
        <p className="text-white text-center w-full py-2 px-4 lg:px-32 lg:py-18 music-forecast">
          Hi {name.name}!
        </p>
      </div>
      {zip && <WeatherCell zip={zip.zip} />}
      <Marquee />
    </section>
  )
}

export default MusicForecastPage
