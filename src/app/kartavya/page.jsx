import Image from 'next/image'
import hand_upper from './resources/hand_upper.png'
import hand_lower from './resources/hand_lower.png'
import stars from './resources/stars.png'
import CardList from './components/cardList'
import ListItem from './components/list'

import styles from './components/kartavya.css'



export default function Home() {
  return (
    <main>
      <section className='texture_wheel'>

        <div className='hand_upper'>
          <Image
            src={hand_upper}
            alt="upper hand"
            style={{
              width: '100%',
              height: 'auto'
            }}
            quality={100}
            placeholder='blur'
          />
        </div>


        <h1 className="head">KARTAVYA</h1>
        <h3 className="detail1">&ldquo;Act as if what you do makes a difference. It does&ldquo;</h3>

        <div className="large_card_shadow">
          <div className="large_card">

            <div className='stars1'>
              <Image
                src={stars}
                alt="stars"
                style={{
                  width: '5vw',
                  height: 'auto',
                  float: 'right',
                  marginTop: '-3vw',
                }}
                quality={100}
                placeholder='blur'
              />
            </div>
            <h5></h5>
            <h4></h4>
            <div className='stars2'>
              <Image
                src={stars}
                alt="stars"
                style={{
                  width: '5vw',
                  height: 'auto',
                }}
                quality={100}
                placeholder='blur'
              />
            </div>
            
          </div>
        </div>



        <section className="cards">
          <CardList></CardList>
        </section>

      </section>

      <div className='hand_lower'>
        <Image
            src={hand_lower}
            alt="lower hand"
            style={{
              width: '100%',
              height: 'auto'
            }}
            quality={100}
            placeholder='blur'
          />
      </div>



      <section className='achievements'>
        <div className="head2">
          <h3>Alcher Community</h3>
          <h2>Our Achievements</h2>
        </div>
        <div><hr></hr></div>
        <ListItem></ListItem>        


      </section>


    </main>
  )
}
