"use client"
import './components/footer.css';
import './components/mobile_footer.css';
import './components/bg_change.css';
import './components/star_change.css';
import alcheringa from './resources/alcheringa.png';
import icon1 from './resources/Vector.png';
import icon2 from './resources/Vector (1).png';
import icon3 from './resources/Vector (2).png';
import icon4 from './resources/Vector (3).png';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import circle from "./resources/Round_element.png";
import circle1 from './resources/Frame 15232-min.png';
import windows from './resources/Windows.png';
import windows1 from './resources/Frame 15230-min.png';


const Footer = () => {

    const props = [
        { "title": "/", "bg": "footer ", "star": "star", "id": 0, "reg_bg": "register reg_bg", "circle_src": circle, "windows_src": windows },
        { "title": "/events", "bg": "footer img1", "star": "star1 star", "id": 1, "reg_bg": "register reg_bg1", "circle_src": circle1, "windows_src": windows1 },
        { "title": "/competition", "bg": "footer img2", "star": "star1 star", "id": 2, "reg_bg": "register reg_bg2", "circle_src": circle1, "windows_src": windows1 },
        { "title": "/kartavya", "bg": "footer img3", "star": "star1 star", "id": 3, "reg_bg": "register reg_bg3", "circle_src": circle1, "windows_src": windows1 },
        { "title": "/mun", "bg": "footer img4", "star": "star1 star", "id": 4, "reg_bg": "register reg_bg4", "circle_src": circle1, "windows_src": windows1 },
        { "title": "/merch", "bg": "footer img5", "star": "star1 star", "id": 5, "reg_bg": "register reg_bg5", "circle_src": circle1, "windows_src": windows1 },
        { "title": "/teams", "bg": "footer img6", "star": "star1 star", "id": 6, "reg_bg": "register reg_bg6", "circle_src": circle1, "windows_src": windows1 },
        { "title": "/sponsor", "bg": "footer img7", "star": "star1 star", "id": 7, "reg_bg": "register reg_bg7", "circle_src": circle1, "windows_src": windows1 },
    ];

    const router = useRouter();
    const path = usePathname();

    console.log(props);

    for (let i = 0; i < props.length; i++) {
        if (path === props[i].title) {
            return (
                <div className="container">
                    <div className="navbar_footer">
                        <nav className="navbar_menu_footer">
                            <ul>
                                <li onClick={() => router.push("/events")} className={path === '/events' ? 'c c1' : ''}>
                                    <Link href="/events">Events</Link></li>
                                <li onClick={() => router.push("/competition")} className={path === '/competition' ? 'c c2' : ''}>
                                    <Link href="/competition">Competitions</Link></li>
                                <li onClick={() => router.push("/kartavya")} className={path === '/kartavya' ? 'c c3' : ''}>
                                    <Link href="/kartavya">Kartayva</Link></li>
                                <li onClick={() => router.push("/mun")} className={path === '/mun' ? 'c c4' : ''}>
                                    <Link href="/mun">MUN</Link></li>
                                <li onClick={() => router.push("/merch")} className={path === '/merch' ? 'c c5' : ''}>
                                    <Link href="/merch">Merch</Link></li>
                                <li onClick={() => router.push("/team")} className={path === '/team' ? 'c c6' : ''}>
                                    <Link href="/team">Team</Link></li>
                                <li onClick={() => router.push("/sponsor")} className={path === '/sponser' ? 'c c7' : ''}>
                                    <Link href="/sponsor">Sponsors</Link></li>
                            </ul>
                            {/* Change color in color_change.css */}
                            {/* Change background in bg_change.css */}
                        </nav>
                    </div>
                    <div className={props[i].bg}>
                        <div className="circle_box">
                            <Image src={props[i].circle_src} alt="" />
                            <Image id="circle_2nd_img" src={props[i].circle_src} alt="" />
                        </div>
                        <div className="extra_box">
                        </div>
                        <div className="windows_box">
                            <div className="crop_container">
                                <div className="crop_box">
                                    <Image className="windows_img" src={props[i].windows_src} alt="" />
                                </div>
                            </div>
                            <div className="complex_grid">
                                <div key={props[i].id} id="spark1" className={props[i].star}></div>
                                <div className="blank_box"></div>
                                <div key={props[i].id} id="spark2" className={props[i].star}></div>
                                <div className="blank_box"></div>
                                <div key={props[i].id} id="spark3" className={props[i].star}></div>
                                <Image className="alcheringa" src={alcheringa} alt="" />
                                <div key={props[i].id} id="spark5" className={props[i].star}></div>
                                <div className="blank_box"></div>
                                <div key={props[i].id} id="spark6" className={props[i].star}></div>
                                <div className="blank_box"></div>
                                <div key={props[i].id} id="spark4" className={props[i].star}></div>

                                {/* Change stars color in star_change.css file */}
                            </div>
                        </div>
                        <div className="credits_1">
                            <div className="cred grid_1">
                                <h1>Anurag</h1>
                                <div className="info">
                                    <p>+91 7061520276</p>
                                    <p>anurag@alcheringa.in</p>
                                </div>
                            </div>
                            <div className="cred grid_2">
                                <h1>Ankit Kumar</h1>
                                <div className="info">
                                    <p>+91 8340349585</p>
                                    <p>ankit.k@alcheringa.in</p>
                                </div>
                            </div>
                            <div className="cred_1" id="seperate">
                                <p id='normal_text'>Follow us on</p>
                                <p id="follow_text">Follow us</p>
                                <p id="on_text">on</p>
                                <div className="icons">
                                    <Link href="https://www.instagram.com/alcheringaiitg/"><Image src={icon1} alt="" /></Link>
                                    <Link href="https://www.facebook.com/alcheringaiitg"><Image src={icon2} alt="" /></Link>
                                    <Link href="https://twitter.com/alcheringaiitg"><Image src={icon3} alt="" /></Link>
                                    <Link href="https://www.youtube.com/@alcheringaIITG"><Image src={icon4} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="credits_2">
                            <p className='extra_width'>Designed and Developed by <a href="">Alcher Creatives</a> & <a href="">Alcher Web Operations</a></p>
                            <div>
                                <p>For Business Enquiries</p>
                                <a href="">publicrelations24@alcheringa.in</a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Footer;