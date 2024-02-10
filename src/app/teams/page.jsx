import Image from 'next/image'
import React from 'react'
import model_prb from './resources/team_images/model_prb.png'
import model_crm from './resources/team_images/model_crm.png'
import model_creatives from './resources/team_images/model_creatives.png'
import model_events from './resources/team_images/model_events.png'
import model_web_app from './resources/team_images/model_web_app.png'
import model_mun from './resources/team_images/model_mun.png'
import model_finance from './resources/team_images/model_finance.png'
import model_convener from './resources/team_images/model_convener.png'

import './components/teams.css'
import Footer from '../components/footer/page'
import Navbar from '../components/navbar/page'
import circle1 from '/public/footer_img/Frame 15232-min.png';
import windows1 from '/public/footer_img/Frame 15230-min.png';

export default function Teams() {
  return (
    <>
    <Navbar  reg_bg= {"register reg_bg6"}/>
    <section>
        <div className='fake_div1'></div>
        <div className='fake_div2'></div>
        <div className='fake_div3'></div>
        <div className='fake_div4'></div>
        <div className='fake_div5'></div>
        <div className='fake_div6'></div>
        <div className='fake_div7'></div>
        <div className='fake_div8'></div>
        <div className='fake_div9'></div>
        <div className='fake_div10'></div>
        <div className='fake_div11'></div>
        <div className='fake_div12'></div>
        <div className='fake_div13'></div>
        <div className='fake_div14'></div>
        <div className='fake_div15'></div>
        <div className='fake_div16'></div>
    </section>
    
    <main>
        <section className='teams_heading'>
            <div className="left_window"></div>
            <div className="teams_head1">
                <h2>MEET THE TEAMS</h2>
                <h5>"Act as if what you do makes a difference. It does"</h5>
            </div>
            <div className="right_window"></div>
        </section>

        <section className='all_teams'>
            <div className="prb">
                <div className="head_prb">
                    <h4>PUBLIC RELATIONS & BRANDING</h4>
                </div>
                <div className="bg_prb">
                    <Image
                        src={model_prb}
                        alt='model_prb'
                        style={{
                            width: '60vw',
                            height: 'auto'
                        }}
                    />
                </div>
                <div className="names_prb">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:anurag@alcheringa.in'>anurag@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:ankit.k@alcheringa.in'>ankit.k@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:lakshya@alcheringa.in'>lakshya@alcheringa.in</a>
                    </div>
                </div>
            </div>
            <div className="crm">
                <div className="head_crm">
                    <h4>CORPORATE RELATION & MARKETING</h4>
                </div>
                <div className="bg_crm">
                    <Image
                        src={model_crm}
                        alt='Corporate Relation & Marketing'
                        style={{
                            width: '75vw',
                            height: 'auto'
                        }}
                    />
                </div>
                <div className="names_crm">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:rachit@alcheringa.in'>rachit@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:harshit@alcheringa.in'>harshit@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:chakradhar@alcheringa.in'>chakradhar@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:kanika@alcheringa.in'>kanika@alcheringa.in</a>
                    </div>
                </div>
            </div>
            <div className="creatives">
                <div className="head_creatives">
                    <h4>CREATIVES</h4>
                </div>
                <div className="bg_creatives">
                    <Image
                        src={model_creatives}
                        alt='Creatives'
                        style={{
                            width: '60vw',
                            height: 'auto',
                            paddingBottom: '0px',
                            marginBottom: '-10px'
                        }}
                    />
                </div>
                <div className="names_creatives">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:creatives@alcheringa.in'>creatives@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:creatives@alcheringa.in'>creatives@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:creatives@alcheringa.in'>creatives@alcheringa.in</a>
                    </div>
                </div>
            </div>
            <div className="events">
                <div className="head_events">
                    <h4>EVENTS</h4>
                </div>
                <div className="bg_events">
                    <Image
                        src={model_events}
                        alt='Events'
                        style={{
                            width: '60vw',
                            height: 'auto'
                        }}
                    />
                </div>
                <div className="names_events">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:abhinav@alcheringa.in'>abhinav@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:priyanshu.s@alcheringa.in'>priyanshu.s@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:rahul@alcheringa.in'>rahul@alcheringa.in</a>
                    </div>
                </div>
            </div>
            <div className="web_app">
                <div className="head_web_app">
                    <h4>WEB & APP OPERATIONS</h4>
                </div>
                <div className="bg_web_app">
                    <Image
                        src={model_web_app}
                        alt='Web & App Operations'
                        style={{
                            width: '45vw',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="names_web_app">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:webops@alcheringa.in'>webops@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:appops@alcheringa.in'>appops@alcheringa.in</a>
                    </div>
                </div>
            </div>
            <div className="mun">
                <div className="head_mun">
                    <h4>IITG MUN</h4>
                </div>
                <div className="bg_mun">
                    <Image
                        src={model_mun}
                        alt='IITG MUN'
                        style={{
                            width: '45vw',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="names_mun">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:iitgmun@alcheringa.in'>iitgmun@alcheringa.in</a>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:iitgmun@alcheringa.in'>iitgmun@alcheringa.in</a>
                    </div>
                </div>
            </div>
            <div className="finance">
                <div className="head_finance">
                    <h4>FINANCE & ACCOUNT</h4>
                </div>
                <div className="bg_finance">
                    <Image
                        src={model_finance}
                        alt='Finance and Account'
                        className='finance_img'
                        style={{
                            width: '25vw',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="names_finance">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:sabir@alcheringa.in'>sabir@alcheringa.in</a>
                    </div>
                </div>
            </div>
            <div className="convener">
                <div className="head_convener">
                    <h4>CONVENER</h4>
                </div>
                <div className="bg_convener">
                    <Image
                        src={model_convener}
                        alt='Convener'
                        className='convener_img'
                        style={{
                            width: '25vw',
                            height: 'auto',
                        }}
                    />
                </div>
                <div className="names_convener">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <a href='tel:+91 1234567890'>+91 1234567890</a>
                        <br />
                        <a href='mailto:madhav@alcheringa.in'>madhav@alcheringa.in</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer  bg= {"footer img6"} star= {"star1 star"}  circle_src= {circle1} windows_src= {windows1}/>
    </>
  )
}
