import DatePickerComponent from "../../../Common/DatePickerComponent";
import OutstationDataState from "../../../../Hooks/OutstationDataState";
import { useState } from "react";

const SearchBox = () => {
  const { startDate, returnDate, setStartDate, setReturnDate, sourceInputRef } =
    OutstationDataState();

  const [guestCount, setGuestCount] = useState(1); 
  return (
    <div className={`search-box `}>
      
      <div className="journeyType ">
          <div className="selectBox">
            <input
              id="radio-1"
              type="radio"
              name="hotelType"
              value="Single Room"
              // onChange={handleRadioChange}
              // checked={selectedValue === "One-Way"}
            />
            <label htmlFor="radio-1" className="radio-label">
            Single Room
            </label>
          </div>

          <div className="selectBox">
            <input
              id="radio-2"
              type="radio"
              name="hotelType"
              // onChange={handleRadioChange}
              // checked={selectedValue === "Round-Trip"}
              value="Multiple Rooms"
            />
            <label htmlFor="radio-2" className="radio-label">
              Multiple Rooms
            </label>
          </div>

        

          
        </div>

      <div className="left-part row fourColumnSearch">
        <div className="search-body title-hotel col-2">
          <h6>{"Hotel"}</h6>

          <input
            type="text"
            name="text"
            placeholder="Select Location"
            className="form-control"
            ref={sourceInputRef}
          />
        </div>
        <div className="search-body col-2 search-input">
          <h6>{"CheckIn"}</h6>
          <DatePickerComponent startDate={new Date(startDate)} setStartDate={setStartDate} />

        </div>
        <div className="search-body col-2 search-input">
          <h6>{"CheckOut"}</h6>
          <DatePickerComponent startDate={new Date(returnDate)} setStartDate={setReturnDate} />

        </div>
        <div className="search-body col-2 search-input">
          <h6>{"Guests"}</h6>
          <div className="qty-box">
            <div className="input-group">
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-left-minus"
                  data-type="minus"
                  data-field=""
                  onClick={() =>
                    setGuestCount(guestCount <= 1 ? guestCount : guestCount - 1)
                  }
                >
                  <i className="fas fa-chevron-down"></i>
                </button>
              </span>
              <input
                type="text"
                name="quantity"
                onChange={() => setGuestCount(guestCount)}
                className="form-control input-number"
                value={guestCount}
              />
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-right-plus"
                  data-type="plus"
                  data-field=""
                  onClick={() => setGuestCount(guestCount + 1)}
                >
                  <i className="fas fa-chevron-up"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default SearchBox;
