import Link from "next/dist/client/link"
import { useEffect } from 'react'
import { useRouter } from "next/dist/client/router"

export default function NotFound() {
    const router = useRouter() 

    useEffect(() => {
            setTimeout(() => {
                router.push('/')
            },4000)
    },[])
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Ooops ! this page cannout be found </h2>
            <p>Redirecting to <Link href='/'>HomePage</Link> for more marmite goodness ... </p>


            <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
        </div>
    )
}