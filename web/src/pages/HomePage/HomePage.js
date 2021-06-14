import { Form, TextField, Submit } from '@redwoodjs/web'
import { useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'

const HomePage = () => {
  const [, setZip] = useState()
  const [, setName] = useState()

  //setting value for zip code and navigating to MusicForecast page
  const onSubmit = (data) => {
    setZip(data.zip)
    setName(data.name)
    navigate(routes.musicForecast({ zip: data.zip, name: data.name }))
  }

  return (
    <section className="bg-black flex flex-col h-screen fade-in">
      <p className="text-white text-5xl lg:text-7xl py-16 px-4 lg:p-20 music-forecast">
        Music forecast is a web-app that pairs the weather in your location with
        some good jams
      </p>
      <Form onSubmit={onSubmit} className="text-2xl p-3 mx-auto">
        <TextField
          className="lg:w-80 w-full border border-white bg-black p-2 placeholder-white focus:outline-none"
          name="name"
          placeholder="your name here"
          validation={{ required: true }}
        />
        <TextField
          className="lg:w-80 w-full border border-white bg-black p-2 placeholder-white focus:outline-none"
          name="zip"
          placeholder="zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit className="lg:w-72 w-full text-black bg-white border py-2 px-16 border-white hover:bg-black hover:text-white focus:outline-none">Discover</Submit>
      </Form>
    </section>
  )
}

export default HomePage
