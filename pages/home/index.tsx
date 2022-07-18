import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <Head>
        <title>Platforms on Vercel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto w-48">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="Platforms on Vercel"
        />
      </div>
    </div>
  );
}

const getStaticProps = () => {

  const path = `${process.env.STRAPI_API_URL}/api/home`;
  
  fetch(path || '', {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "GET"
  })
  .then( data => {
    console.log(data)
    return {
      props: { products: JSON.parse(JSON.stringify(data)) },      
    };
  })
  .catch(error => {
    console.log(error)
    return {
      props: {},
    }
  })
}
