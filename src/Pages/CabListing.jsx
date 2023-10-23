import ListingBanner from "../Components/Cab/Listing/Filters/ListingBanner"
import ListingView from "../Components/Cab/Listing/ListingView"
import Layout from "../Layout/Layout"

function CabListing(){
  const data = [
    {
      id: 1,
      img: "/assets/images/cab/car/5.png",
      gridimg: "/assets/images/cab/car/12.jpg",
      sliderimg: [
        { img: "/assets/images/cab/car/12.jpg" },
        { img: "/assets/images/cab/car/13.jpg" },
      ],
      name: "Peugeot Citroen",
      rate: "4",
      cabType: "sadan",
      category: "popular",
      capacity: "5",
      luggage: "2 luggage",
      option: "automatic",
      price: 1200,
      fare: "25",
    },
    {
      id: 2,
      name: "suzuki",
      img: "/assets/images/cab/car/6.png",
      gridimg: "/assets/images/cab/car/13.jpg",
      sliderimg: [
        { img: "/assets/images/cab/car/13.jpg" },
        { img: "/assets/images/cab/car/14.jpg" },
      ],
      cabType: "medium",
      category: "popular",
      rate: "3",
      capacity: "5",
      luggage: "2 luggage",
      option: "manual",
      price: 1100,
      fare: "25",
    },
    {
      id: 3,
      img: "/assets/images/cab/car/7.png",
      gridimg: "/assets/images/cab/car/14.jpg",
      sliderimg: [
        { img: "/assets/images/cab/car/14.jpg" },
        { img: "/assets/images/cab/car/15.jpg" },
      ],
      name: "honda",
      category: "latest",
      rate: "2",
      cabType: "standard",
      capacity: "5",
      luggage: "4 luggage",
      option: "manual",
      price: 1100,
      fare: "25",
    },
    {
      id: 4,
      img: "/assets/images/cab/car/8.png",
      gridimg: "/assets/images/cab/car/15.jpg",
      sliderimg: [
        { img: "/assets/images/cab/car/15.jpg" },
        { img: "/assets/images/cab/car/16.jpg" },
      ],
      name: "hyundai-kia",
      category: "latest",
      cabType: "SUV",
      rate: "1",
      capacity: "2",
      luggage: "2 luggage",
      option: "automatic",
      price: 2000,
      fare: "25",
    },
    {
      id: 5,
      img: "/assets/images/cab/car/9.png",
      gridimg: "/assets/images/cab/car/16.jpg",
      sliderimg: [
        { img: "/assets/images/cab/car/16.jpg" },
        { img: "/assets/images/cab/car/17.jpg" },
      ],
      name: "Ford",
      rate: "3",
      category: "trend",
      cabType: "tempo travel",
      capacity: "8",
      luggage: "2 luggage",
      option: "manual",
      price: 1100,
      fare: "25",
    },
    {
      id: 6,
      img: "/assets/images/cab/car/10.png",
      gridimg: "/assets/images/cab/car/17.jpg",
      sliderimg: [
        { img: "/assets/images/cab/car/17.jpg" },
        { img: "/assets/images/cab/car/18.jpg" },
      ],
      category: "trend",
      name: "Hyundai-Kia",
      cabType: "SUV",
      rate: "5",
      capacity: "10",
      luggage: "2 luggage",
      option: "manual",
      price: 1900,
      fare: "25",
    },
    {
      id: 7,
      img: "/assets/images/cab/car/11.png",
      gridImg: "/assets/images/cab/car/18.jpg",
      sliderImg: [
        { img: "/assets/images/cab/car/18.jpg" },
        { img: "/assets/images/cab/car/17.jpg" },
      ],
      category: "trend",
      name: "general motors",
      cabType: "Luxury",
      rate: "4",
      capacity: "15",
      luggage: "2 luggage",
      option: "manual",
      price: 1000,
      fare: "25",
    },
  ];

    return(
        <>
        <Layout title="light_header"/>
        <ListingBanner title={"cab search"}/>
        <ListingView data={data}/>
      </>
    )
}
 export default CabListing