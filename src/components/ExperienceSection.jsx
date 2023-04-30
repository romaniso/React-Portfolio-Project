import Timeline from "./Timeline";
import TitleSection from "./TitleSection";
import "../styles/ExperienceSection.css";

export default function ExperienceSection() {
  return (
    <div className="experience-section__container container">
      <TitleSection heading="My experience " subheading="Where I’ve Worked" />
      <Timeline />
    </div>
  );
}
