"use client"

function getCards(){
    const data = [
      {
        "id": "1",
        "name": "AIKYAM",
        "partner": "Partner",
        "img": "/lakme.jpg"
      },
      {
        "id": "2",
        "name": "MANSHAKTI",
        "partner": "Partner",
        "img": "/pumaa.jpg"
  
      },
      {
        "id": "3",
        "name": "SAFHER",
        "partner": "Partner",
        "img": "/lakme.jpg"
  
      },
      {
        "id": "4",
        "name": "PRITHVI",
        "partner": "Partner",
        "img": "/pumaa.jpg"
  
      },
      {
        "id": "5",
        "name": "NORTHEAST UNVEILED",
        "partner": "Partner",
        "img": "/lakme.jpg"
  
      },
      {
        "id": "6",
        "name": "UDAAN",
        "partner": "Partner",
        "img": "/pumaa.jpg"
      },
      {
        "id": "7",
        "name": "NORTHEAST UNVEILED",
        "partner": "Partner",
        "img": "/lakme.jpg"
  
      },
      {
        "id": "8",
        "name": "UDAAN",
        "partner": "Partner",
        "img": "/pumaa.jpg"
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
          <div className="name"><h2>{sponsor.name}</h2></div>
          <div className="partner"><p>{sponsor.partner}</p></div>
      </div>
      ))}
  </>
)
}
