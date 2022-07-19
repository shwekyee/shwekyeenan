import React from 'react'
import './side.css'
import { Image } from 'react-bootstrap'
import { TelephoneFill } from 'react-bootstrap-icons'

import profile from '../../Image/nan.jpg';

const Side = () => {
  return (
    <div className='side_bar'>
        <div className='profile'>
            <Image fluid src={profile}></Image>
        </div>
        {/* <a href='https://a3678.live4000.com/Chat/Chat?userID=&lang=en' className='bg-light text-dark'><ChatDotsFill></ChatDotsFill> Customer Support</a> */}
        <a href='https://t.me/nannan68' className='side-viber'><TelephoneFill></TelephoneFill> Telegram</a>
    </div>
  )
}

export default Side