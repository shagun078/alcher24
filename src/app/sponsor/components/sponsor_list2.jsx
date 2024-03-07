"use client"

function getCards(){
    const data = [
      {
        "id": "31",
        "name": "French Essence",
        "partner": "Official Fragrance Partner",
        "img": "/sponsor_res/spons/french_essence.jpg",
        "slink": "https://frenchessence.com/"
      },
      {
        "id": "32",
        "name": "The Table",
        "partner": "Restaurant Partner",
        "img": "/sponsor_res/spons/the_table.jpg",
        "slink": "https://www.instagram.com/thetableguwahati/?hl=en"
      },
      {
        "id": "33",
        "name": "Avon",
        "partner": "Cosmetics Partner",
        "img": "/sponsor_res/spons/avon.jpg",
        "slink": "https://www.avon.co.in/"
      },
      {
        "id": "1",
        "name": "BIS",
        "partner": "UDAAN Title Sponsor / Startdization Partner",
        "img": "/sponsor_res/spons/Bureau_of_Indian_Standards_Logo.png",
        "slink": "https://www.bis.gov.in/"
    
      },
      {
        "id": "2",
        "name": "JIO SAAVN",
        "partner": "Official music streaming Partner",
        "img": "/sponsor_res/spons/JioSaavn_logo.png",
        "slink": "https://www.jiosaavn.com/"

      },
      {
        "id": "3",
        "name": "UNSTOP",
        "partner": "Online hosting Partner",
        "img": "/sponsor_res/spons/unstop_logo.png",
        "slink": "https://unstop.com/"

      },
      {
        "id": "4",
        "name": "Edufabrica",
        "partner": "Tech & bio workshop Partner",
        "img": "/sponsor_res/spons/Edufabrica.png",
        "slink": "https://www.edufabrica.net/"

      },
      {
        "id": "5",
        "name": "GMDA",
        "partner": "Kartavya in association with",
        "img": "/sponsor_res/spons/gmda.jpg",
        "slink": "http://gmda.assam.gov.in/"

      },
      {
        "id": "6",
        "name": "NTPC",
        "partner": "Platinum sponsor",
        "img": "/sponsor_res/spons/ntpc.png",
        "slink": "https://www.ntpc.co.in/"

      },
      {
        "id": "7",
        "name": "PEE SAFE",
        "partner": "Women hygiene Partner",
        "img": "/sponsor_res/spons/Pee_Safe.png",
        "slink": "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjFvPeAqNaEAxUHC6IDHQnfC5UYABAAGgJsZQ&ase=2&gclid=CjwKCAiAuYuvBhApEiwAzq_YiSWNffk-crZtM1w_kB89F_3IMHwIu-_cYdK38kWaWrshs_uLEUR4GBoC0HUQAvD_BwE&ohost=www.google.co.in&cid=CAESVeD2rkgScKiDLQ3NGdnWd6_EVr0hKFJEBcpp35u0Kvt9_trjPLAamt6Y3no0lxqH6NmqjkpluxTGEVArNdhyHnfLE5kCGH1vFTi0JE7mUlFsXzOngNo&sig=AOD64_3Vf_hrXNyJ5elo7nepjQQc3sYWWA&q&nis=4&adurl&ved=2ahUKEwjQufCAqNaEAxVdHRAIHTwND4wQ0Qx6BAgFEAE"

      },
      {
        "id": "8",
        "name": "SAFEEXPRESS",
        "partner": "Official supply chain partner",
        "img": "/sponsor_res/spons/safeexpress.png",
        "slink": "https://www.safexpress.com/"

      },
      {
        "id": "9",
        "name": "SLICK",
        "partner": "Community Partner",
        "img": "/sponsor_res/spons/slick_logo.png",
        "slink": "https://slickapp.co/"

      },
      {
        "id": "10",
        "name": "ASACS",
        "partner": "Sanrakshan Title Sponsor / Awareness partner",
        "img": "/sponsor_res/spons/asacs.jpg",
        "slink": "http://asacs.assam.gov.in/"

      },
      {
        "id": "11",
        "name": "MDH",
        "partner": "Official Spice Partner",
        "img": "/sponsor_res/spons/mdh.png",
        "slink": "https://mdhspices.com/"

      },
      {
        "id": "12",
        "name": "Local All Natural Soda",
        "partner": "Drinking Partner",
        "img": "/sponsor_res/spons/local.png",
        "slink": "https://localallnaturalsoda.com/"

      },
      {
        "id": "13",
        "name": "Coca cola",
        "partner": "Beverage Partner",
        "img": "/sponsor_res/spons/coke_logo.png",
        "slink": "https://www.coca-colacompany.com/"

      },
      {
        "id": "14",
        "name": "Canara",
        "partner": "Banking Partner",
        "img": "/sponsor_res/spons/canara_bank.png",
        "slink": "https://canarabank.com/"

      },
      {
        "id": "15",
        "name": "Hurricane Energy Drink",
        "partner": "Energy Drink partner",
        "img": "/sponsor_res/spons/Hurricane_logo.png",
        "slink": "https://www.instagram.com/huricanedrink/"

      },
      {
        "id": "16",
        "name": "Unibic",
        "partner": "Snack Partner",
        "img": "/sponsor_res/spons/Unibic_logo.png",
        "slink": "https://www.unibicfoods.com/"

      },
      {
        "id": "17",
        "name": "Bigrock",
        "partner": "Web hosting Partner",
        "img": "/sponsor_res/spons/bigrock_new_logo.png",
        "slink": "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwitov6AqdaEAxXaVZEFHdSLD8sYABACGgJscg&ase=2&gclid=CjwKCAiAuYuvBhApEiwAzq_YiXnWZGuHwjFlk9F1iNAPzuaZuKgoxHxs4LZF4XzM8kchslA4cHOXkxoC7s0QAvD_BwE&ohost=www.google.co.in&cid=CAESVeD2_vihopylUYzqT4XCr_h849SLswwvuFX-VICo_fnGjCtRG9MaC_l7rFtDFrDTcB1mvayvzrJyL0vVw6GvZ-Udsf4dAtrDcgqFT-q8LHCTWh_Rvts&sig=AOD64_2yZqfpj7B6WdxhkGYdPA9UajRsWw&q&nis=4&adurl&ved=2ahUKEwigy_eAqdaEAxWvPxAIHU6QCC8Q0Qx6BAgHEAE"

      },
      {
        "id": "18",
        "name": "INSTAX",
        "partner": "Moments Partner",
        "img": "/sponsor_res/spons/instax.png",
        "slink": "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjqqeuOqdaEAxX6GKIDHSecCUAYABAAGgJsZQ&ase=2&gclid=CjwKCAiAuYuvBhApEiwAzq_YibKTCrkRJ0_RWx2dycc-kDsfjGM4xU9raqamGy1S2QFfvwbH3ZVEHRoCRrUQAvD_BwE&ohost=www.google.co.in&cid=CAESVeD2ivoFr_ofIyWDFdAUB31mKWZEo46htTrjhOWvmg0HHb6A4vDGT_1OX6HKV4apMgaPe-K4TzA1o-7hs4LkIm7nYceKvbBXE4LTW47YcqI7_ej9HkA&sig=AOD64_1SW5RLpy2fRyZXAR8YOdNLcLWICw&q&nis=4&adurl&ved=2ahUKEwj22eWOqdaEAxU9DRAIHciABBQQ0Qx6BAgNEAE"

      },
      {
        "id": "19",
        "name": "Ocean Beverage",
        "partner": "Hydrating Partner",
        "img": "/sponsor_res/spons/ocean.png",
        "slink": "https://oceanbeverages.in/"

      },
      {
        "id": "20",
        "name": "Smarto",
        "partner": "Sustainable Ride Partner",
        "img": "/sponsor_res/spons/Smarto_logo.png",
        "slink": "https://smartocabs.com/terms-of-service/"

      },
      {
        "id": "21",
        "name": "OIL",
        "partner": "SAFHER Title Sponsor / Strategic Partner",
        "img": "/sponsor_res/spons/oil_india.png",
        "slink": "https://www.oil-india.com/"

      },
      {
        "id": "22",
        "name": "Ongc",
        "partner": "Sustainable Partner",
        "img": "/sponsor_res/spons/ongc.png",
        "slink": "https://ongcindia.com/"

      },
      {
        "id": "23",
        "name": "ASDMA",
        "partner": "Gold Sponsor",
        "img": "/sponsor_res/spons/asdma.png",
        "slink": "http://asdma.assam.gov.in/"

      },
      {
        "id": "24",
        "name": "Assam startup",
        "partner": "Startup Partner",
        "img": "/sponsor_res/spons/Logo_Assam_Start.png",
        "slink": "https://startup.assam.gov.in/"

      },
      // {
      //   "id": "25",
      //   "name": "ATDC",
      //   "partner": "Tourism Partner",
      //   "img": "/sponsor_res/digital_news/siliconindia.png",
      //   "slink": "http://www.assamtourismonline.com/"

      // },
      {
        "id": "26",
        "name": "Medifio",
        "partner": "Health Tech Partner",
        "img": "/sponsor_res/spons/med.png",
        "slink": "https://medifio.com/"

      },
      {
        "id": "27",
        "name": "Remarkskill",
        "partner": "Workshop Partner",
        "img": "/sponsor_res/spons/remark.png",
        "slink": "https://remarkskill.com/"

      },
      {
        "id": "28",
        "name": "JAOBOL",
        "partner": "Rental Partner",
        "img": "/sponsor_res/spons/Jaobol.png",
        "slink": "https://jaobol.com/"

      },
      {
        "id": "29",
        "name": "Goezy",
        "partner": "Bike and Car Rental Partner",
        "img": "/sponsor_res/spons/goezy.png",
        "slink": "https://goezycars.in/"

      },
      {
        "id": "30",
        "name": "Go ridez",
        "partner": "Bike and Car Rental Partner",
        "img": "/sponsor_res/spons/goridez.png",
        "slink": "https://www.goridez.in/"

      }
    ]
    return data;
}

export default function SponsorList() {
    let sponsor_card = getCards();
  return (
    <>
        {sponsor_card.map((sponsor)=>(
        <div key={sponsor.id} className="col">
            <a href={sponsor.slink} target="_blank">
              <img className="sponsorimg" src={sponsor.img}/>
              <div id="name"><h2>{sponsor.name}</h2></div>
            </a>
            <div id="partner"> <p>{sponsor.partner}</p></div>
        </div>
        ))}
    </>
  )
}