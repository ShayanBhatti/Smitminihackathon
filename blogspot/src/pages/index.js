import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Dashboard from './component/dashboard/Dashboard'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
  
  <div className='nav-bar'>
    <Link className='link' href="./component/authentication/signupform">Signup</Link>
    <Link className='link' href="/component/authentication/loginform">Login</Link>
    
     </div>
<Dashboard/>
  
  
  
  
  </>
  )
}
