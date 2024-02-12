// import small_card from '@/app/kartavya/resources/small_card.png'

"use client"

function getCards(){
    const data = [
      {
        "id": "1",
        "heading": "AIKYAM",
        "body": "Aikyam's main aim is to sensitise people about how communal violence and hatred is still a burning issue in India and to promote the idea of 'unity in diversity' through performances, panel discussions and fundraisers.",
        "img": "/Aikyam-min.jpg"
      },
      {
        "id": "2",
        "heading": "MANSHAKTI",
        "body": "Manshakti is Alcheringa's mental health awareness campaign where we strive to address the wide variety of mental health issues that people suffer from, while reducing stigma and promoting a culture of care and understanding.",
        "img": "/Manshakti-min.jpg"
  
      },
      {
        "id": "3",
        "heading": "SAFHER",
        "body": "Acknowledging the sad reality of violence against women and lack of women safety in India, SafHer, through a variety of workshops and other programmes highlights that women raise their voice against misconduct and get perpetrators to justice.",
        "img": "/Safher-min.jpg"
  
      },
      {
        "id": "4",
        "heading": "PRITHVI",
        "body": "As the name suggests, Prithvi aims at taking active steps to save our planet from climate change and promotes environmental protectionism right from the grassroot level through a variety of programmes to involve the people around us.",
        "img": "/Prithvi-min.jpg"
  
      },
      {
        "id": "5",
        "heading": "NORTHEAST UNVEILED",
        "body": "North East Unveiled is conducted every year to promote the cultural diversity of North East India through performances and showcasing of regional art and handicraft forms, as well as to address the social issues in this region and come up with solutions.",
        "img": "/North-East-Unveiled-min.jpg"
  
      },
      {
        "id": "6",
        "heading": "SANRAKSHAN",
        "body": "Sanrakshan is a dual-purpose campaign tackling AIDS awareness and substance abuse, fostering a socially responsible community that is aware of safe practices and at the same time eliminating the stigma surrounding these issues.",
        "img": "/try_large.jpg"
  
      }
    ]

    return data;
}
export default function CardList() {
    // const flip_cards = await getCards();
    let flip_cards = getCards();
    var sectionStyle = {
        width: "100%",
        height: "calc((970/772)*24.667vw)",
    };
  return (
    <>
        {flip_cards.map((card)=>(
        // <div key={card.id} className="col" onTouchStart="this.classList.toggle('hover');">
        <div key={card.id} className="col">
            <div className="container">
                <div className="front" style={{sectionStyle, backgroundImage:`url('${card.img}')`}}>
                    <div className="inner">
                    <p>{card.heading}</p>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                    <p>{card.body}</p>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}
