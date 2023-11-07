import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from '../components/HomePage'
import useFetch from '@/hooks/useFetch'
const inter = Inter({ subsets: ['latin'] });

const {data,error,loading}=useFetch('https://swc.iitg.ac.in/saPortal/api/teams?populate=deep');
console.log(data);
export default function Home() {
  return (
     <HomePage></HomePage>
  )
}
