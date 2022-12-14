import Link from 'next/link'

export default function PostPage() {
  return (
    <div className="mx-auto flex h-screen flex-col content-start items-center justify-start p-40">
      <h1 className="mb-20 text-4xl text-orange-400"> List of Components </h1>
      <ul>
        <li>
          <Link href={`/test/test-page`}>Test Components</Link>
        </li>
      </ul>
    </div>
  )
}
