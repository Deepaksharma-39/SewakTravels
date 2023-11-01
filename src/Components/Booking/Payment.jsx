import Button from "../Common/Button";

function Payment() {
  return (
    <div className="review_box">
      <div className="flight_detail">
        <div className="promo-section">
        <div className="grand_total">
                        <h5>Grand total: <span>$2500</span></h5>
                    </div>
            <Button name="proceed to pay" btnClass="btn btn-solid" />
          
          <div className="promos">
            <form>
              <div className="form-check">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="radiocls2"
                  id="radio1"
                  defaultValue="option1"
                  defaultChecked
                />
                <div>
                  <label className="form-check-label title" htmlFor="radio1">
                    Make part payment now
                  </label>
                  
                </div>
              </div>
              
              <div className="form-check">
                <input
                  className="form-check-input radio_animated"
                  type="radio"
                  name="radiocls2"
                  id="radio2"
                  defaultValue="option2"
                />
                <div>
                  <label className="form-check-label title" htmlFor="radio2">
                    Make full payment now
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
