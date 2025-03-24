import React from 'react'
import Hero from './component/Hero'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero />
      <section className='relative w-screen h-dvh bg-violet-500'></section>
    </main>
  )
}

export default App