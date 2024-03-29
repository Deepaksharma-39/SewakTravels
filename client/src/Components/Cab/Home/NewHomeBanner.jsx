import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TabContent, TabPane } from "reactstrap";
import { AppContext } from "../../../Context/JourneyContext";
import { calculateDistanceAndDuration } from "../../../Utility/DistanceCalculator";
import CabSearch from "./CabSearch/CabSearch";
import SearchTabs from "./CabSearch/SearchTabs";
import FlightSearch from "./FlightSearch/FlightSearch";
import HotelSearch from "./HotelSearch/HotelSearch";
import TourSearch from "./TourSearch/TourSearch";

const NewHomeBanner = ({activeTab,callback}) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 3);

  const [startDate, setStartDate] = useState(new Date(tomorrow));
  const [returnDate, setReturnDate] = useState(new Date(dayAfterTomorrow));

  const [startTime, setStartTime] = useState("12:00 PM");
  const [returnTime, setReturnTime] = useState("12:00 PM");

  const [selectedValue, setSelectedValue] = useState("Outstation One-Way");

  const [source, setSource] = useState("Delhi, India");
  const [destination, setDestination] = useState("Chandigarh, India");
  
  const [rentals,setRentals]= useState("4hrs 40km");


  const { journeyData, setJourneyData } = useContext(AppContext);
  const handleSearch = () => {
    // Modify the state using the setJourneyData function
    calculateDistanceAndDuration(
      source,
      destination,
      selectedValue,
      journeyData,
      setJourneyData,
      startDate,
      returnDate,
      startTime,
      returnTime,
      rentals
    );
  };

  const isButtonDisabled = source === "" || destination === "";

  return (
    <section className="home_section slide-1 p-0" id="home">
      <div>
        <div
          className="home home-mobile"
          id="block"
          style={{ width: "100%" }}
          data-vide-bg="/assets/video/city.mp4"
          data-vide-options="position: 0% 50%, loop: true"
        >
          <video
            width="100%"
            height="100%"
            controls={false}
            autoPlay
            className="video-mixed"
          >
            <source src="/assets/video/city.mp4" type="video/mp4" />
          </video>
          <div className="container custom-container mix-layout-section">
            <div className="row">
              <div className="col-xl-10 m-auto">
                <div className="home-content mix-layout smaller-content">
                  <div className="bg-transparent">
                
                    <SearchTabs callbackActive={callback} />
                    <TabContent
                      activeTab={activeTab}
                      className="tab-content"
                      id="pills-tabContent"
                    >
                      <TabPane tabId="1">
                        <div className="mix-demo-classic">
                          <CabSearch
                            source={source}
                            destination={destination}
                            setSource={setSource}
                            setDestination={setDestination}
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                            startDate={startDate}
                            setStartDate={setStartDate}
                            returnDate={returnDate}
                            setReturnDate={setReturnDate}
                            setStartTime={setStartTime}
                            setReturnTime={setReturnTime}
                            setRentals={setRentals}
                          />
                        </div>
                      </TabPane>
                      <TabPane tabId="2">
                        <div className="mix-demo-flight">
                          <FlightSearch
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                          />
                        </div>
                      </TabPane>
                      <TabPane tabId="3">
                        <div className="mix-demo-flight">
                          <HotelSearch />
                        </div>
                      </TabPane>
                      <TabPane tabId="4">
                        {" "}
                        <div className="mix-demo-flight">
                          <TourSearch />
                        </div>
                      </TabPane>
                    </TabContent>
                    <div className="btn-search col-2 searchButton">
                      <Link
                        to={
                          isButtonDisabled
                            ? "/" // Link to a placeholder if the button is disabled
                            : {
                                pathname: `/cab/listing/${encodeURIComponent(
                                  source
                                )}/${encodeURIComponent(destination)}`,
                                state: { journeyData },
                              }
                        }
                        className={`btn btn-rounded color1 searchButton ${
                          isButtonDisabled ? "disabled" : ""
                        }`}
                        onClick={isButtonDisabled ? "" : handleSearch}
                      >
                        {"Search"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHomeBanner;
