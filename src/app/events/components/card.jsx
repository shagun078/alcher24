import Image from "next/image";

export function Cardleft({ key, data }) {
  return (
    <div className="card">
      <div className="details-left">
        <div className="coming-soon-left">
          <Image
            src={data.img}
            alt="competition image"
            style={{
              width: "auto",
              height: "100%",
            }}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="wrap-left">
          <h4>{data.title}</h4>
          <p>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export function Cardright({ key, data }) {
  return (
    <div className="card">
      <div className="details-right">
        <div className="coming-soon-right">
          <Image
            src={data.img}
            alt="competition image"
            style={{
              width: "auto",
              height: "100%",
            }}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="wrap-right">
          <h4>{data.title}</h4>
          <p>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};