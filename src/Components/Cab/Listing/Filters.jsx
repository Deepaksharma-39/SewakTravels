import { useState } from "react";
import renderFiltersByType from "../../../HOC/renderFiltersByType";

function Filters({setShowFilter,showFilter}){
    const [show, setShow] = useState(false);
    return (
        <div className="left-sidebar" style={{left:showFilter?"-1px":""}}>
        <div className="back-btn" onClick={()=>setShowFilter(!showFilter)}>back</div>
        
        <div className={`middle-part collection-collapse-block ${show ? "" : "open"}`} >
          { (
            <>
              <div className="d-flex align-items-center justify-content-between">
                <h5>Latest Filter</h5>
                <img src="/assets/images/icon/adjust.png" className="img-fluid" alt="" onClick={() => setShow(!show)}/>
              </div>
              <div className={`collection-collapse-block-content ${ show ? "hide-content" : ""}`} >{renderFiltersByType()}</div>
            </>
          )} 
        </div>
       
      </div>
      );
}

export default Filters;