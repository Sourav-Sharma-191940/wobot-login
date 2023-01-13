import React from 'react'
import "../Styles/login.css";
import Logo from "../Images/wobot_logo_blue.svg"

export default function Login() {
    return (
        <>
            <div className='box'>
                <img className="logo" alt="logo" src={Logo} />
                <div className='content'>
                <img className="logos px-auto"  alt="logo" src={Logo} />
                    <div className='heading'>It's a delight to have you <br />onboard</div>
                    <div className='subtitle'>Help us know you better.<br />
                        (This is how we optimize Wobot as per your business needs)</div>
                    <form>

                        <label for="Cname">Company Name</label>
                        <input type="text" id="cname" name="cname" placeholder='e.g. Example Inc' />
                        <label for="iname">Industry</label>
                        <select id="select" name="select">
                        <option value="se">Select</option>
                            <option value="cl">Cloud</option>
                            <option value="sa">Software</option>
                            <option value="da">Database</option>
                        </select>
                        <label for="csize">Company Size</label><br/>
                        <button class="button1">1-20</button>
                        <button class="button1">21-50</button>
                        <button class="button1">51-200</button>
                        <button class="button1">201-500</button>
                        <button class="button1">500+</button>
                        <button class="button2">Get Started</button>
                    </form>
                </div>
                <div className='footer'>
                Terms of use  |  Privacy policy 
                </div>
            </div>
        </>
    )
}
