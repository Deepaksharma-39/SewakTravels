import { useEffect, useState } from "react";
import Img from "../Components/Cab/Home/Img.tsx";

const Loader = ({ loaderTimeout }) => {
    const loadingTime = loaderTimeout;
    const [show, setShow] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(false);
      }, loadingTime);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [show]);
    return (
      
      <div className={`loader-wrapper food-loader ${show ? "" : "loaderhide"}`}>
          <div className="loader">
            <Img src={'/assets/images/loader.gif'} alt="Animated GIF" width={300} height={200} />
          </div>
        </div>

    );
  };
  
  export default Loader;