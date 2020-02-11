import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

function Index({ stars }) {
  return (
    <div>
      <p className="col-md-2">Halo Dunia!</p>
      <Link href="/about">
        <a className="col-lg-6">Kesini yuk</a>
      </Link>
      <p>{stars}</p>
    </div>
  )
}

Index.getInitialProps = async ctx => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  /**
   * `ctx` return `pathname`, `query`, `asPath`, and `AppTree`
   * so you can get pathname(URL), query/params from URL, and custom path from asPath
   */
  console.log(ctx)
  return { stars: json.stargazers_count }
}

export default Index
