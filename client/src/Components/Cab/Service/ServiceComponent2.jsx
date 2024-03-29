import Animation from "../../Common/Animation";
import TitleComponent from "../../Common/TitleComponent";
import ServiceOne from "./ServiceOne";

const ServicesComponent2 = () => {
  const services = [
    {
      id: 1,
      src: "/assets/images/hotel/icon/food.png",
      title: "awesome food",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's.",
    },
    {
      id: 2,
      src: "/assets/images/hotel/icon/make-up.png",
      title: "beauty & health",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's.",
    },
    {
      id: 3,
      src: "/assets/images/hotel/icon/fireplace.png",
      title: "conference room",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's.",
    },
    {
      id: 4,
      src: "/assets/images/hotel/icon/flipper.png",
      title: "swimming pool",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's.",
    },
    {
      id: 5,
      src: "/assets/images/hotel/icon/playground.png",
      title: "play ground",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's.",
    },
    {
      id: 6,
      src: "/assets/images/hotel/icon/tree.png",
      title: "beautiful garden",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum the industry's.",
    },
  ];
  
    return (
      <section className="section-b-space animated-section">
        <Animation />
        <div className="container">
          <TitleComponent title={"Sewak"} subTitle={"Awesome Service"} span={"Service"} titleClass={"title-3"} />
          <ServiceOne serviceData={services} />
        </div>
      </section>
    );
  };
  
  export default ServicesComponent2;