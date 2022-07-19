import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './main.css'

import headerPhoto from '../../Image/mainheader.jpg'
import logo from '../../Image/shwekyeeapp.png'
import download from '../../Image/downloadNow.png'

// import game1 from '../../Image/game-1.png'
// import game2 from '../../Image/game-2.png'
// import game3 from '../../Image/game-3.png'
// import game4 from '../../Image/game-4.png'
// import game5 from '../../Image/game-5.png'
// import game6 from '../../Image/game-6.png'
// import game7 from '../../Image/game-7.png'
// import game8 from '../../Image/game-8.png'

import saba from '../../Image/sabaremovebg.png'
import sbo from '../../Image/SBOremovebg.png'


// const game_items = [
//     {img:game1, title:'Rome'},
//     {img:game2, title:'Cei Shen Fishing'},
//     {img:game3, title:'Sweet Bonanza'},
//     {img:game4, title:'Master Joker'},
//     {img:game5, title:'The Dog House'},
//     {img:game6, title:'Billionaire'},
//     {img:game7, title:'Gate of Olympus'},
//     {img:game8, title:'Buffalo King'},
// ]

const Main = () => {
  return (
    <Container fluid>
        <Row className='justify-content-center'>
            <Col sm={12} lg={8} xl={6} className='overflow-hidden'>
                <div className='header_box text-center'>
                    <Image fluid src={headerPhoto}></Image>
                    <div className='header_content'>
                        <div className='img1'>
                            <Image fluid src={logo}></Image>
                        </div>
                        <div className='img2'>
                            <a href='https://shwekyee.app/' className='btn-transition'><Image fluid src={download}></Image></a>
                        </div>
                    </div>
                </div>
                <div className='football'>
                        <div className='saba'>
                            <Image fluid src={saba}></Image>
                        </div>
                        <div className='sbo'>
                            <Image fluid src={sbo}></Image>
                        </div>
                </div>
                {/* <div className='main-box'>
                        <h5 className='text-center'>Hot Game များ</h5>
                        <div className='game-list'>
                            {
                                game_items.map( (item,idx) => {
                                    return (
                                    <div key={idx} className="items">
                                        <Image fluid className='items-img'
                                         src={item.img}></Image>
                                         <p className='text-center'>{item.title}</p>
                                    </div>
                                    )
                                })
                            }
                        </div>
                </div>  */}

                <div className='footer_box'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Image src={logo}></Image>
                    </div>
                    <div>
                        <h4>ထောင်ချီ<span className='text-danger'>HOT</span>ဂိမ်းများ</h4>
                        <p>သူငယ်ချင်းများမျှဝေပြီး
                        ကော်မရှင်ရယူပါ</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <a href='https://shwekyee.app/' className='btn-transition'><Image fluid src={download}></Image></a>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Main