import Image from "next/image";
import coming_soon from "../resources/coming_soon_card.png";

export function Cardleft(){
  return (
    <div className="card">
      <div className="details-left">
        <div className="coming-soon-left">
          <Image
            src={coming_soon}
            alt="lower hand"
            style={{
              width: "auto",
              height: "100%",
            }}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="wrap-left">
          <h4>PRONITES</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            rem!
          </p>
        </div>
      </div>
    </div>
  );
};

export function Cardright(){
  return (
    <div className="card">
      <div className="details-right">
        <div className="coming-soon-right">
          <Image
            src={coming_soon}
            alt="lower hand"
            style={{
              width: "auto",
              height: "100%",
            }}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="wrap-right">
          <h4>PRONITES</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            rem!
          </p>
        </div>
      </div>
    </div>
  );
};