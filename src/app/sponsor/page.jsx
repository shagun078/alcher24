import "./components/sponsor.css"
import design from './resources/design.png'
import SponsorList from "./components/sponsor_list"
import gucci from './resources/gucci.png'
import Image from "next/image";




function App () {
  const image=[
    gucci
  ];
  return (
    <>
    <div className="App">

      <h1>We Have Worked With</h1>
     
      <div className="title">
      <h1> TITLE SPONSOR </h1> </div>
      <div className="titlesponsorimg">
      <Image 
        src={design} 
        alt="design" 
        style={{
          width: '36.3vw',
          height: '11.2vw',
          position: "absolute",
          zIndex: '1',
          right: '31vw',
        }}
      />
      <div className='card_shadowt'>
      <div className='cardt'>
        <div className='imagecardt'>
          {/* background image */}
        </div>
      </div>
    </div> 
      </div>

      <div className="cotitle">
      <h1> CO-TITLE SPONSOR </h1> </div>
      <div className="cotitlesponsorimg">
      <Image 
        src={design} 
        alt="design" 
        style={{
          width: '36.3vw',
          height: '11.2vw',
          position: "absolute",
          zIndex: '1',
          right: '30.5vw',
        }}
      />
      <div className='card_shadowct'>
      <div className='cardct'>
        <div className='imagecardct'>
          {/* background image */}
        </div>
      </div>
    </div> 
      </div>

      <div className='powered'>
       <h1> POWERED BY</h1>
      </div>
      <div className='poweredimg'>
      {/* <Image 
        src={gucci} 
        alt="design"
        style={{
          width: '100%',
          height: '100%',
          color: 'black'

        }}
      /> */}
      </div>
      
    <div className='sponsorfooter'>
        
      <div className="heading2">Media Sponsors</div>
      <div className="sponsors">
        <SponsorList></SponsorList>  
      </div>  

    </div>

    </div>
    </>
  );
  
};
export default App;