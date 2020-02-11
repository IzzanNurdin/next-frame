import Link from 'next/link';

function Index() {
   return(
      <div>
         <p className="col-md-2">Halo Dunia!</p>
         <Link href="/about"><a className="col-lg-6">Kesini yuk</a></Link>
      </div>
   )
}

export default Index;