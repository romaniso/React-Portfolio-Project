import React from "react";
import Button from "./Button";
import PText from "./PText";
//import { AiFillStar } from "react-icons/ai";

export default function AboutInfoItem({
  title = "This is title",
  items = [
    { title: "HTML", stars: null, download: null },
    { title: "CSS", stars: null, download: null },
    { title: "JS", stars: null, download: null },
  ],
}) {
  //  const createStars = (stars) => {
  //    let arr = [];
  //    for (let i = 0; i < stars; i++) {
  //      arr.push(<AiFillStar key={i} />);
  //    }
  //    return arr.map((star) => star);
  //  };
  return (
    <div className="aboutInfo__item">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item card" key={index}>
            <>
              <PText className="item__wrapper">{item.title}</PText>
            </>

            {/*<>
              {item.stars ? (
                <span className="item__stars">{createStars(item.stars)}</span>
              ) : null}
            </>*/}
            <>
              {item.download ? (
                <Button
                  className="item__file"
                  btnText="dowload"
                  download={item.download}
                />
              ) : null}
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
