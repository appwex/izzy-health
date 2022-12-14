import Test from 'components/test/test'
import Head from 'next/head'

const TestStory = () => {
  return (
    <div className="mx-auto flex h-full min-h-full items-center justify-center">
      <Head>
        <title>Izzy-Health Test Place</title>
        <meta name="description" content="place to test your components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Test />
    </div>
  )
}

export default TestStory
