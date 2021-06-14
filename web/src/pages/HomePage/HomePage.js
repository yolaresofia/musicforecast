import { Form, TextField, Submit } from '@redwoodjs/web'
import { useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'

const HomePage = () => {
  const [, setZip] = useState()
  const [, setName] = useState()
  const [closeCookie, setCloseCookie] = useState(false)

  //setting value for zip code and navigating to MusicForecast page
  const onSubmit = (data) => {
    setZip(data.zip)
    setName(data.name)
    navigate(routes.musicForecast({ zip: data.zip, name: data.name }))
  }

  return (
    <section className="bg-black flex flex-col h-screen fade-in">
      <p className="text-white py-16 px-8 lg:px-32 lg:py-18 music-forecast">
        Music forecast is a web-app that pairs the weather in your location with
        some good jams :)
      </p>
      <Form onSubmit={onSubmit} className="text-2xl lg:flex w-11/12 lg:w-10/12 p-3 mx-auto">
        <TextField
          className="lg:w-1/3 w-full border border-white bg-black p-2 placeholder-white focus:outline-none focus:text-white"
          name="name"
          placeholder="your name here"
          validation={{ required: true }}
        />
        <TextField
          className="lg:w-1/3 w-full border border-white bg-black p-2 placeholder-white focus:outline-none focus:text-white"
          name="zip"
          placeholder="zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit className="submit lg:w-1/3 w-full text-black bg-white border py-2 px-16 border-white focus:outline-none">Discover</Submit>
      </Form>
        <img src="./../../../public/assets/gotita.png" className="lg:w-12 w-8" alt="" />
        <img src="./../../../public/assets/cloud.png" className="lg:w-32 w-16" alt="" />
      {
        !closeCookie ?
      <div className="cookie border rise-in hidden lg:block py-2 px-6 text-xl text-white weather-cell-subtitle flex flex-row fixed bottom-0">
      <p>no cookies here, but in case you were craving some here you go 🍪🍪🍪</p>
      <button onClick={()=>setCloseCookie(true)} className="absolute top-0 p-1 right-0 focus:outline-none">x</button>
      </div> : ''
      }

    </section>
  )
}

export default HomePage
