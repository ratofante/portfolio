import React from 'react'
import Separator from '../Separator/Separator'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import MyWork from './sections/MyWork'

const Home = () => {
   return (<>
      <AboutMe />
      <Separator type={'section'} />
      <MyWork />
      <Separator type={'section'} />
      <Contact />
   </>)
}

export default Home