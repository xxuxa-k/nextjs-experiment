import Head from 'next/head'
import { useState, useEffect } from 'react'

const Home = () => {

  const [target, setTarget] = useState('who?')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setTarget(e.target.value)
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <Head>
        <title>form-sample</title>
      </Head>

      <main className="items-center">
        <h1 className="font-semibold text-4xl text-center">form-sample</h1>

        <form className="flex flex-col">
          <input type="text" className="rounded" onChange={ handleChange } defaultValue={ target } />
        </form>
      </main>
    </div>
  )
}

export default Home
