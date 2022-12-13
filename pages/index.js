import Head from 'next/head'

const Home = () => {
  return (
    <div className="mx-auto flex h-screen items-center justify-center">
      <Head>
        <title>Izzy-Health</title>
        <meta
          name="description"
          content="Personalized health for you and your family from anywhere"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
    </div>
  )
}

export default Home
