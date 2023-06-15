import styles from "../style";
import { robot } from "../assets";
import { useState } from "react";
import { signInWithGoogle } from '../Firebase';
import IotIntro from "./IotIntro";

const Hero = (onloggedIn) => {
  const [loggedIn, setLoggedIn] = useState(0);
  function signInFunction() {
    signInWithGoogle();
    setLoggedIn(1);
    onloggedIn(loggedIn);
  }
  return (
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxwidth}`}>
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <IotIntro onloggedIn={onloggedIn} />

          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero