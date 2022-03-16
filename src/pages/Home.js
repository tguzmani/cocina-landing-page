import React from 'react'
import Hero from '../modules/hero/Hero'
import ArticlesView from './../modules/articles/views/ArticlesView'
import ContactView from './../modules/contact/views/ContactView'

const Home = () => {
  return (
    <div>
      <Hero />
      <ArticlesView />
      <ContactView />
    </div>
  )
}

export default Home
