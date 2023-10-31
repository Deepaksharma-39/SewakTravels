import { useState } from "react";
import CabSearch from "./CabSearch";
import { useContext } from "react";
import { AppContext } from "../../../Context/JourneyContext";
import { Link } from "react-router-dom";

function ListSearch() {

  const context = useContext(AppContext);
  const { journeyData } = context;


  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("in city"); 
  const [pickup,setPickup]= useState(journeyData?.pickup||"Delhi")
  const [destination,setDestination]= useState(journeyData?.dropoff||"Shimla")

  // Create a Date object from your pickup date string
  const pickupDate = new Date(journeyData?.pickupDate);

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

  let dayOfWeek = null;
  if (pickupDate) {
    dayOfWeek = pickupDate.getDay();
  } else {
    dayOfWeek = "week";
  }

  // Get the month (0 = January, 1 = February, ..., 11 = December)
  const month = pickupDate.getMonth() || "mm";

  // Get the date (day of the month)
  const date = pickupDate.getDate() || "DD";

  // Get the year
  const year = pickupDate.getFullYear() || "YYYY";

  // Convert the numerical values to human-readable strings
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-inner small-section pb-0">
      <div className="container">
        <div className="flight-search">
          <div className="responsive-detail">
            <div className="destination">
              <span>{journeyData?.tripType || "One Way"}</span>
            </div>
            <div className="destination">
              <span>
                {pickup}
              </span>
              <span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
              <span>
                {destination}
              </span>
            </div>
            <div className="details">
              <span>
                {daysOfWeek[dayOfWeek]}, {date} {months[month]} {year}
              </span>
              <span className="divider">|</span>

              <span>
                {"Pickup Time: "}
                {journeyData?.pickupTime || "12.00PM"}
              </span>
            </div>
            <div className="modify-search">
              <Link
                to={"#"}
                className="btn btn-solid color1"
                onClick={() => setSearchBarOpen(!searchBarOpen)}
              >
                Modify search
              </Link>
            </div>
          </div>
          <CabSearch
            resClass="res-cab"
            setSearchBarOpen={setSearchBarOpen}
            searchBarOpen={searchBarOpen}
            setSelectedValue={setSelectedValue}
            setDestination={setDestination}
            setPickup={setPickup}
            destination={destination}
            pickup={pickup}
          />
        </div>
      </div>
    </div>
  );
}

export default ListSearch;
