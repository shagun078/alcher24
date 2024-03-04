"use client"

function getCards(){
    const data = [
      {
        "id": "1",
        "name": "Trending on Guwahati",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/trending.png",
        "slink": "https://www.instagram.com/trendingonguwahati/"
      },
      {
        "id": "2",
        "name": "Assam Unofficial",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/Assam_unofficial.png",
        "slink" : "https://www.instagram.com/assam.unofficial/?hl=en"
      },
      {
        "id": "3",
        "name": "Bull Head",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/bullhead_logo.jpg",
        "slink": "#"
      },
      {
        "id": "4",
        "name": "Campus Times Pune",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/campus-times-pune-official-logo-round-2023.png",
        "slink" : "https://www.campustimespune.com/"
      },
      {
        "id": "5",
        "name": "Dibrugarh Unofficial",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/DIBRUGARH_UNOFFICIAL.png",
        "slink": "https://www.instagram.com/dibrugarh.unofficial/?hl=en"
      },
      {
        "id": "6",
        "name": "Teenagers of Assam",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/image11.png",
        "slink": "https://www.instagram.com/teenagersofassamofficial/"
      },
      {
        "id": "7",
        "name": "Just Assam Things",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/JAT_logo.jpg",
        "slink": "https://www.instagram.com/justassamthings.exe/?hl=en"
      },
      {
        "id": "8",
        "name": "KnowAfest.com",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/image1.jpg",
        "slink": "https://www.knowafest.com/"
      },
      {
        "id": "9",
        "name": "Odisha Shines.com",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/image6.jpg",
        "slink": "https://www.instagram.com/odishashines/?hl=en"
      },
      {
        "id": "10",
        "name": "Rourkela Shines",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/image7.jpg",
        "slink": "https://www.instagram.com/rourkelashines/?next=%2Fkneenuh6%2F&hl=hr"
      },
      {
        "id": "11",
        "name": "Sach Kahoon",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/image8.jpg",
        "slink": "https://epaper.sachkahoon.com/"
      },
      {
        "id": "12",
        "name": "Sachi Shiksha",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/image9.jpg",
        "slink": "https://sachishiksha.com/"
      },
      {
        "id": "13",
        "name": "Youth Incorporated",
        "partner": "Digital Media Partner",
        "img": "/sponsor_res/digital_media/image4.jpg",
        "slink": "https://youthincmag.com/"
      },
      {
        "id": "14",
        "name": "Millennium Post",
        "partner": "Enewspaper Partner",
        "img": "/sponsor_res/Enewspaper/MillenniumPost_logo.jpg",
        "slink": "https://www.millenniumpost.in/"
      },
      {
        "id": "15",
        "name": "DU Updates",
        "partner": "Youth and student Media Partner",
        "img": "/sponsor_res/youth_media/du_updates.png",
        "slink": "https://www.instagram.com/duupdates/"
      },
      {
        "id": "16",
        "name": "TNEC",
        "partner": "Youth and Student Media Partner",
        "img": "/sponsor_res/youth_media/TNEC.png",
        "slink": "https://startup.assam.gov.in/?incubatee=north-eastern-chronicle-tnec"
      },
      {
        "id": "17",
        "name": "Siliconindia",
        "partner": "Digital News Partner",
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