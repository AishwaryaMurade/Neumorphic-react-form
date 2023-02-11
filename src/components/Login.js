import { useRef } from "react";
import hands from './../Images/hands.png'
import monkey from './../Images/monkey.gif'
import monkeyeyesclosed from './../Images/monkeyclosedeye.gif'

const Login = () => {

const imgref =useRef()

    function closeye() {
        imgref.current.style.backgroundImage = "url("+monkeyeyesclosed+")";
        imgref.current.firstChild.style.marginTop = "0%";
    }
    function openeye() {
        imgref.current.style.backgroundImage = "url("+monkey+")";
        imgref.current.firstChild.style.marginTop = "110%";
    }

    return (
<div className="container">
  <div className="anmationicon" ref={imgref}>
    <img  src={hands} />
  </div>
  <div className="brand-title">Sign In</div>
  <div className="social">
    <button className="google"><img src="https://img.icons8.com/color/512/google-logo.png"/></button>
    <button className="facebook"><img src="https://img.icons8.com/color/512/facebook-new.png"/></button>
    <button className="apple"><img src="https://img.icons8.com/ios-glyphs/512/mac-os.png"/></button>
  </div>
  <form className="formcontrol">
    <label>EMAIL ID</label>
    <input type="email" placeholder="Please enter Email ID" onClick={openeye}/>
    <label>PASSWORD</label>
    <input type="password" placeholder="Please enter password" onClick={closeye}/>
    <div className="submit">
    <button type="submit">LOGIN</button>
    </div>

  </form>
</div>
    )
}

export default Login