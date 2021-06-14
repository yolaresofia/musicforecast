import { useParams } from '@redwoodjs/router'
import WeatherCell from 'src/components/WeatherCell'
import Marquee from 'src/components/Marquee';

const MusicForecastPage = () => {
  const zip = useParams()
  const name = useParams()
  return (
    <section className="bg-black h-screen">
      <p className="text-white text-center py-6 px-4 lg:px-32 lg:py-18 music-forecast border">Hi {name.name}!</p>
      {zip && <WeatherCell zip={zip.zip} />}
      <Marquee />
    </section>
  )
}

export default MusicForecastPage
