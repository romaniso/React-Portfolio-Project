import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={30}
      color="25, 133, 161"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      innerStyle={{
        boxShadow: "0 0 25px 5px rgba(250, 140, 67, 0.272)",
      }}
      outerStyle={{
        backgroundColor: "#fa8c431c",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
