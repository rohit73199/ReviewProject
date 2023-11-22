import React from 'react'
import NavBar1 from './NavBar1'
import { Link } from 'react-router-dom'
import './Home.css'
import { Typography } from '@mui/material'
import SearchBar from './SearchBar'
import Contact from './Contact'
import About from './About'

const Home = () => {

  return (
    <div>
    <NavBar1></NavBar1>
    <div className="postnavbar">
         <Link><p className="postnavbar" href="//">ADOPT OR GET INVOLVED</p></Link>
            <Link><p  className="postnavbar" >DOG AND PUPPIES</p></Link>
               <Link><p  className="postnavbar" >CATS AND KITTENS</p></Link>
               <Link><p className="postnavbar" >OTHER PETS</p></Link>

        </div>
    <div className="proj">
        <div className="mycont">
            
            <Typography variant='h3' textAlign={'center'} fontFamily={'Oswald'} color={'white'}>
                Find Your New Best Friend
            </Typography>
            <SearchBar/>
            <div className="middlepage">
                <div className="middle1"></div>
                <div className="middle2"></div>
                <div className="middle3"></div>
            </div>
            </div>
            </div>
        <div className="bottom">
           
                <About/>
                <Contact/>
           
        </div>
        </div>
  )
};
export default Home