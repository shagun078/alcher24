"use client"

function getCards(){
    const data = [
      {
        "id": "1",
        "name": "Trending on Guwahati",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/trending.png",
        "slink": "#"
      },
      {
        "id": "2",
        "name": "Assam unofficial",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/Assam_unofficial.png",
        "slink" : "https://www.instagram.com/assam.unofficial/?hl=en"
      },
      {
        "id": "3",
        "name": "Bull head",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/bullhead_logo.jpg",
        "slink": "#"
      },
      {
        "id": "4",
        "name": "Campus times pune",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/campus-times-pune-official-logo-round-2023.png",
        "slink" : "https://www.campustimespune.com/"
      },
      {
        "id": "5",
        "name": "Dibrugarh unofficial",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/DIBRUGARH_UNOFFICIAL.png",
        "slink": "https://www.instagram.com/dibrugarh.unofficial/?hl=en"
      },
      {
        "id": "6",
        "name": "Teenagers of Assam",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/image11.png",
        "slink": "https://www.instagram.com/teenagersofassamofficial/"
      },
      {
        "id": "7",
        "name": "Just assam things",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/JAT_logo.jpg",
        "slink": "https://www.instagram.com/justassamthings.exe/?hl=en"
      },
      {
        "id": "8",
        "name": "KnowAfest.com",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/image1.jpg",
        "slink": "https://www.knowafest.com/"
      },
      {
        "id": "9",
        "name": "OdishaShines.com",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/image6.jpg",
        "slink": "https://www.instagram.com/odishashines/?hl=en"
      },
      {
        "id": "10",
        "name": "Rourkela Shines",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/image7.jpg",
        "slink": "https://www.instagram.com/rourkelashines/?next=%2Fkneenuh6%2F&hl=hr"
      },
      {
        "id": "11",
        "name": "Sach kahoon",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/image8.jpg",
        "slink": "https://epaper.sachkahoon.com/"
      },
      {
        "id": "12",
        "name": "Sachi shiksha",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/image9.jpg",
        "slink": "https://sachishiksha.com/"
      },
      {
        "id": "13",
        "name": "Youth incorporated",
        "partner": "Digital media Partner",
        "img": "/sponsor_res/digital_media/image4.jpg",
        "slink": "https://youthincmag.com/"
      },
      {
        "id": "14",
        "name": "Millennium post",
        "partner": "Enewspaper Partner",
        "img": "/sponsor_res/Enewspaper/MillenniumPost_logo.jpg",
        "slink": "https://www.millenniumpost.in/"
      },
      {
        "id": "15",
        "name": "DU Updates",
        "partner": "Youth and student media Partner",
        "img": "/sponsor_res/youth_media/du_updates.png",
        "slink": "#"
      },
      {
        "id": "16",
        "name": "TNEC",
        "partner": "Youth and student media Partner",
        "img": "/sponsor_res/youth_media/TNEC.png",
        "slink": "https://startup.assam.gov.in/?incubatee=north-eastern-chronicle-tnec"
      },
      {
        "id": "17",
        "name": "Siliconindia",
        "partner": "Digital news Partner",
        "img": "/sponsor_res/digital_news/siliconindia.png",
        "slink": "https://www.siliconindia.com/"
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
            <img className="sponsorimg" src={sponsor.img}/>
            <div id="name"><a href={sponsor.slink} target="_blank"><h2>{sponsor.name}</h2></a></div>
            <div id="partner"> <p>{sponsor.partner}</p></div>
        </div>
        ))}
    </>
  )
}