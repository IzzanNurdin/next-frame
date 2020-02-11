import Link from 'next/link';

function About() {
    return (
       <div>
          <p className="col-lg-6">Cuma ini kok</p>
          <Link href="/"><a className="col-lg-6">Balik aja yuk</a></Link>
       </div>
    )
}

export default About;