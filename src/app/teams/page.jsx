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

export default function Teams() {
  return (
    <main>
        <section className='teams_heading'>
            <div className="left_window">
                {/* <Image
                    src={left_window}
                    alt='left_window'
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                /> */}
            </div>
            <div className="teams_head1">
                <h2>MEET THE TEAMS</h2>
                <h5>"Act as if what you do makes a difference. It does"</h5>
            </div>
            <div className="right_window">
                {/* <Image
                    src={right_window}
                    alt='right_window'
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                /> */}
            </div>
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
                        <p>+91 1234567890</p>
                        <p>anurag@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>ankit.k@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>lakshya@alcheringa.in</p>
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
                            width: '60vw',
                            height: 'auto'
                        }}
                    />
                </div>
                <div className="names_crm">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>rachit@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>harshit@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>chakradhar@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>kanika@alcheringa.in</p>
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
                        <p>+91 1234567890</p>
                        <p>creatives@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>creatives@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>creatives@alcheringa.in</p>
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
                        <p>+91 1234567890</p>
                        <p>abhinav@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>priyanshu.s@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>rahul@alcheringa.in</p>
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
                        <p>+91 1234567890</p>
                        <p>webops@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>webops@alcheringa.in</p>
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
                        <p>+91 1234567890</p>
                        <p>iitgmun@alcheringa.in</p>
                    </div>
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>iitgmun@alcheringa.in</p>
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
                            // marginBottom: '-0.5vw'
                        }}
                    />
                </div>
                <div className="names_finance">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>sabir@alcheringa.in</p>
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
                            // marginBottom: '0.5vw'
                        }}
                    />
                </div>
                <div className="names_convener">
                    <div>
                        <h6>Firstname Lastname</h6>
                        <p>+91 1234567890</p>
                        <p>madhav@alcheringa.in</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
