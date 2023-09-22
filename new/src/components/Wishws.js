import React from 'react'
import {Link} from "react-router-dom";
//315514987470-upd89493j65r9ojm7g3i7gbv4vd83l4f.apps.googleusercontent.com
//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
export default function Wishws() {

    return (
        <>
        <div className="center" id="confettiCanvas">
      
      <div className="top-heading">
          {/*<!--div className="top-img"><h1 className="glow">Happy Birthday</h1></div-->*/}
          <div className="video-container">
          <video autoPlay muted loop id="background-video">
      <source src="https://drive.google.com/uc?id=15k8GOTk3-_YOVnBmDe-8qZO7fLcuvJrX" type="video/mp4" />
    </video>
          </div>
          <div className="down-arrow"></div>
          <p className="p-t">Happy Birthday! <br/> Wishing you a day as beautiful as your smile.</p>
          
      </div>
      
      <div className="bt">
        <div className="bt-left">
          <p className="p">It's been two years of pure joy since you came into our lives. Happy birthday to our little bundle of happiness! </p>{/*<!--Of course! Here's a birthday wish for the special girl:

            "🎉🎂 Happy Birthday to an amazing and wonderful girl! 🎈🎁 May your day be filled with joy, laughter, and unforgettable moments. May this year bring you all the happiness and success you deserve. Keep shining bright and spreading your positive energy everywhere you go. Enjoy your day to the fullest! 🎉🎊"</p>
    -->*/}</div>
        <div className="bt-img">
          <img src="" alt=""/>
        </div>
      </div>
      
      <div className="box">
          <div className="hcard">
            <div className="imgBx" id="div1" >
                <img src="https://drive.google.com/uc?id=15aAnnuUW8kGvf8sa0x1F4keUMSScK0Mi" alt="images"/>
            </div>
            <div className="details">
                <h2>Just Being<br/><span>Cute</span></h2>
            </div>
          </div>
        
           <div className="hcard">
             <div className="imgBx" id="div2" >
                <img src="https://drive.google.com/uc?id=15a1uyKyIKqdtTjThPD68gwaEQKKscV7k" alt="images"/>
             </div>
             <div className="details">
                <h2>Born to<br/><span>Rule</span></h2>
              </div>
           </div>
    
           <div className="hcard">
             <div className="imgBx" id="div3" >
                <img src="https://drive.google.com/uc?id=15j2-FshbJ9Jqy9S1Xn4qyD5mIlXd4wGF" alt="images"/>
             </div>
             <div className="details">
                <h2>Unconditional Love<br/><span>Family</span></h2>
              </div>
           </div>
     
      </div>
  
      <section className="new-line-section">
          
      <div class="gallery">
            <img src="https://assets.codepen.io/1506195/unsplash-1.jpg" alt="img" />
            <img src="https://assets.codepen.io/1506195/unsplash-7.jpg" alt="img" />
            <img src="https://assets.codepen.io/1506195/unsplash-3.jpg" alt="igm" />
            <img src="https://assets.codepen.io/1506195/unsplash-2.jpg" alt="img" />
            <img src="https://assets.codepen.io/1506195/unsplash-6.jpg" alt="img" />
            <img src="https://assets.codepen.io/1506195/unsplash-0.jpg" alt="img" />
            <img src="https://assets.codepen.io/1506195/unsplash-8.jpg" alt="img" />
        </div>
  
      </section>

      <section>
          <div className="scene">
              <div className="tcard">
                <div className="card__face card__face--front">
                  <img src="https://img.buzzfeed.com/buzzfeed-static/static/2022-06/30/5/asset/3bcff46634fe/sub-buzz-1238-1656566647-29.jpg?downsize=600:*&output-format=auto&output-quality=auto" />
                </div>
                <div className="card__face card__face--back">
                  <img src="https://drive.google.com/uc?id=15M3yBRWY041aSQ7OHMRsPaFyFrHsk1u-" />
                </div>
              </div>
              <div className="tcard">
                <div className="card__face card__face--front">
                  <img src="https://i.pinimg.com/originals/df/ee/e8/dfeee810ae387028b253a01a921bc37c.jpg" />
                </div>
                <div className="card__face card__face--back">
                  <img src="https://drive.google.com/uc?id=15jzAA2wCXhfsp6cY5bnMPa9XYcvbnEk_" />
                </div>
              </div>
              <div className="tcard">
                <div className="card__face card__face--front">
                  <img src="https://i.pinimg.com/originals/ac/68/0f/ac680f364257ff75eb2a43a616910d6f.jpg" />
                </div>
                <div className="card__face card__face--back">
                  <img src="https://drive.google.com/uc?id=15ickmt0AFqpfwuNaVmCaJ9pH-2WmdPFR" />
                </div>
              </div>
            </div>
            
      </section>


      <div className="footer">
        <ul>
        <li>
        <Link to="https://instagram.com/mohitkhyalia_mk">Developer</Link> 
        
        </li>
        <li>
        <Link to="/login">Create Your Own</Link>
        </li>
        </ul>
      </div>
    </div>
        </>
    )
  
}


