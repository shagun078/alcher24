"use client"
import './components/footer.css';
import './components/mobile_footer.css';
import './components/bg_change.css';
import './components/star_change.css';
import icon1 from '/public/footer_img/Vector.png';
import icon2 from '/public/footer_img/Vector (1).png';
import icon3 from '/public/footer_img/Vector (5).png';
import icon4 from '/public/footer_img/Vector (3).png';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


const Footer = ({ bg, star, circle_src1, circle_src2, windows_src, alcheringa_logo }) => {

    const router = useRouter();
    const path = usePathname();

    return (
        <div className="container_footer">
            <div className="navbar_footer">
                <nav className="navbar_menu_footer">
                    <ul>
                        <li onClick={() => router.push("/events")} className={path === '/events' ? 'c c1' : ''}>
                            <Link href="/events">Events</Link></li>
                        <li onClick={() => router.push("/competition")} className={path === '/competition' ? 'c c2' : ''}>
                            <Link href="/competition">Competitions</Link></li>
                        <li onClick={() => router.push("/kartavya")} className={path === '/kartavya' ? 'c c3' : ''}>
                            <Link href="/kartavya">Kartayva</Link></li>
                        {/* <li onClick={() => router.push("/mun")} className={path === '/mun' ? 'c c4' : ''}>
                        <Link href="/mun">MUN</Link></li>
                        <li onClick={() => router.push("/merch")} className={path === '/merch' ? 'c c5' : ''}>
                        <Link href="/merch">Merch</Link></li> */}
                        <li >
                            <Link href="https://iitgmun.alcheringa.in">MUN</Link></li>
                        <li >
                            <Link href="https://forms.gle/rddFejMdxRapGsMS9">Merch</Link></li>
                        <li onClick={() => router.push("/teams")} className={path === '/teams' ? 'c c6' : ''}>
                            <Link href="/team">Teams</Link></li>
                        <li onClick={() => router.push("/sponsor")} className={path === '/sponsor' ? 'c c7' : ''}>
                            <Link href="/sponsor">Sponsors</Link></li>
                    </ul>
                    {/* Change color in color_change.css */}
                    {/* Change background in bg_change.css */}
                </nav>
            </div>
            <div className={bg}>
                <div className="circle_box">
                    <Image src={circle_src1} alt="" />
                    <Image id="circle_2nd_img" src={circle_src2} alt="" />
                </div>
                <div className="extra_box">
                </div>
                <div className="windows_box">
                    <div className="crop_container">
                        <div className="crop_box">
                            <Image className="windows_img"
                                src={windows_src}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="complex_grid">
                        <div id="spark1" className={star}></div>
                        <div className="blank_box"></div>
                        <div id="spark2" className={star}></div>
                        <div className="blank_box"></div>
                        <div id="spark3" className={star}></div>
                        <Image
                            className="alcheringa"
                            src={alcheringa_logo}
                            alt="Hail Alcher"
                            height={500}
                            width={500}
                        />
                        <div id="spark5" className={star}></div>
                        <div className="blank_box"></div>
                        <div id="spark6" className={star}></div>
                        <div className="blank_box"></div>
                        <div id="spark4" className={star}></div>

                        {/* Change stars color in star_change.css file */}
                    </div>
                </div>
                <div className="credits_1">
                    <div className="cred grid_1">
                        <h1>Anurag</h1>
                        <div className="info">
                            <a href="tel:+91 9864558336">+91 9864558336</a>
                            <br />
                            <a href="mailto:anurag@alcheringa.in">anurag@alcheringa.in</a>
                        </div>
                    </div>
                    <div className="cred grid_2">
                        <h1>Ankit Kumar</h1>
                        <div className="info">
                            <a href="tel:+91 8092267185">+91 8092267185</a>
                            <br />
                            <a href="mailto:ankit.k@alcheringa.in">ankit.k@alcheringa.in</a>
                        </div>
                    </div>
                    <div className="cred_1" id="seperate">
                        <p id='normal_text'>Follow us on</p>
                        <p id="follow_text">Follow us</p>
                        <p id="on_text">on</p>
                        <div className="icons">
                            <a href="https://www.instagram.com/alcheringaiitg/" target="_blank" ><Image src={icon1} alt="" /></a>
                            <a href="https://www.facebook.com/alcheringaiitg" target="_blank" ><Image src={icon2} alt="" /></a>
                            <a href="https://twitter.com/alcheringaiitg" target="_blank" ><Image src={icon3} alt="" /></a>
                            <a href="https://www.youtube.com/@alcheringaIITG" target="_blank" ><Image src={icon4} alt="" className='yt_icon' /></a>
                        </div>
                    </div>
                </div>
                <div className="credits_2">
                    <div className='extra_width'>Designed and Developed by&nbsp;
                        <a className='hover_parent'>
                            <div id="right_shift_1" className='hover_child'>
                                <p>Swapnil Banerjee</p>
                                <p>Rishi Kiran</p>
                                <p>Nikita Sharma</p>
                                <p>Farhan</p>
                                <p>Sobha</p>
                            </div>
                            Alcher Creatives
                        </a>&nbsp;&&nbsp;
                        <a className='hover_parent'>
                            <div id="right_shift_2" className='hover_child'>
                                <p>Himank Bohara</p>
                                <p>Shubham Kumar Jha</p>
                                <p>Aditya Dadhich</p>
                                <p>Deepak Sutradhar</p>
                                <p>Shagun Sharma</p>
                            </div>
                            Alcher Web Operations
                        </a>
                    </div>

                    <div className='hide_text_portrait'>
                        <p>For Business Enquiries</p>
                        <a href="mailto:alcheringa@iitg.ac.in">alcheringa@iitg.ac.in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;