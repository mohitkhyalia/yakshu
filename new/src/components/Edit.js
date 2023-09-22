import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Edit() {
  const [selectedFile, setSelectedFile] = useState(
   
  );

  const handleFileChange = (event) => {
    console.log('hnji');
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  


  const [selectedimg1, setSelectedimg1] = useState(
    "https://drive.google.com/uc?id=15aAnnuUW8kGvf8sa0x1F4keUMSScK0Mi"
  );
  const [selectedimg2, setSelectedimg2] = useState(
    "https://drive.google.com/uc?id=15a1uyKyIKqdtTjThPD68gwaEQKKscV7k"
  );
  const [selectedimg3, setSelectedimg3] = useState(
    "https://drive.google.com/uc?id=15j2-FshbJ9Jqy9S1Xn4qyD5mIlXd4wGF"
  );
  const [selectedimg4, setSelectedimg4] = useState(
    "https://img.buzzfeed.com/buzzfeed-static/static/2022-06/30/5/asset/3bcff46634fe/sub-buzz-1238-1656566647-29.jpg?downsize=600:*&output-format=auto&output-quality=auto"
  );
  const [selectedimg5, setSelectedimg5] = useState(
    "https://i.pinimg.com/originals/df/ee/e8/dfeee810ae387028b253a01a921bc37c.jpg"
  );
  const [selectedimg6, setSelectedimg6] = useState(
    "https://i.pinimg.com/originals/ac/68/0f/ac680f364257ff75eb2a43a616910d6f.jpg"
  );
  const [selectedimg7, setSelectedimg7] = useState(
    "https://drive.google.com/uc?id=15M3yBRWY041aSQ7OHMRsPaFyFrHsk1u-"
  );
  const [selectedimg8, setSelectedimg8] = useState(
    "https://drive.google.com/uc?id=15jzAA2wCXhfsp6cY5bnMPa9XYcvbnEk_"
  );
  const [selectedimg9, setSelectedimg9] = useState(
    "https://drive.google.com/uc?id=15ickmt0AFqpfwuNaVmCaJ9pH-2WmdPFR"
  );
  const FileChange = (event) => {
    const myInput = event.target.getAttribute("data-my-variable");
    

    const file = event.target.files[0];
    if (file) {
      if (myInput === "1") {
        setSelectedimg1(URL.createObjectURL(file));
        console.log(selectedimg1);
      } else if (myInput === "2") {
        setSelectedimg2(URL.createObjectURL(file));
      } else if (myInput === "3") {
        setSelectedimg3(URL.createObjectURL(file));
      } else if (myInput === "4") {
        setSelectedimg4(URL.createObjectURL(file));
      } else if (myInput === "5") {
        setSelectedimg5(URL.createObjectURL(file));
      } else if (myInput === "6") {
        setSelectedimg6(URL.createObjectURL(file));
      } else if (myInput === "7") {
        setSelectedimg7(URL.createObjectURL(file));
      } else if (myInput === "8") {
        setSelectedimg8(URL.createObjectURL(file));
      } else if (myInput === "9") {
        setSelectedimg9(URL.createObjectURL(file));
      }
    }
  };
  

  return (
   
      
        <div className="center" id="confettiCanvas">
          
          <div className="top-heading">
            <input
              className="input-file"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
            />
            {selectedFile && (
              <div className="video-container">
                <video autoPlay muted loop id="background-video">
                  <source src={selectedFile} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>
          <p className="p-t">
            Happy Birthday! <br /> Wishing you a day as beautiful as your smile.
          </p>
          <div className="down-arrow"></div>

          <div className="bt">
            <div className="bt-left">
              <p className="p">
                It's been two years of pure joy since you came into our lives.
                Happy birthday to our little bundle of happiness!{" "}
              </p>
              {/*<!--Of course! Here's a birthday wish for the special girl:

            "🎉🎂 Happy Birthday to an amazing and wonderful girl! 🎈🎁 May your day be filled with joy, laughter, and unforgettable moments. May this year bring you all the happiness and success you deserve. Keep shining bright and spreading your positive energy everywhere you go. Enjoy your day to the fullest! 🎉🎊"</p>
        -->*/}
            </div>
            <div className="bt-img">
              <img src="" alt="" />
            </div>
          </div>

          <div className="box">
            <div className="hcard">
              <div className="imgBx">
                {selectedimg1 && (
                  <img src={selectedimg1} alt="Selected file preview" />
                )}
              </div>
              <div className="details">
                <h2>
                  Born to
                  <br />
                  <span>Rule</span>
                </h2>
                <br />
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="1"
                  onChange={FileChange}
                />
              </div>
            </div>

            <div className="hcard">
              <div className="imgBx">
                {selectedimg2 && (
                  <img src={selectedimg2} alt="Selected file preview" />
                )}
              </div>
              <div className="details">
                <h2>
                  Born to
                  <br />
                  <span>Rule</span>
                </h2>
                <br />
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="2"
                  onChange={FileChange}
                />
              </div>
            </div>

            <div className="hcard">
              <div className="imgBx">
                {selectedimg3 && (
                  <img src={selectedimg3} alt="Selected file preview" />
                )}
              </div>
              <div className="details">
                <h2>
                  Born to
                  <br />
                  <span>Rule</span>
                </h2>
                <br />
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="3"
                  onChange={FileChange}
                />
              </div>
            </div>
          </div>

          <section className="new-line-section">
            <div className="gallery">
              <img   alt="" />
              <img
                src="https://assets.codepen.io/1506195/unsplash-7.jpg"
                alt=""
              />
              <img
                src="https://assets.codepen.io/1506195/unsplash-3.jpg"
                alt=""
              />
              <img
                src="https://assets.codepen.io/1506195/unsplash-2.jpg"
                alt=""
              />
              <img
                src="https://assets.codepen.io/1506195/unsplash-6.jpg"
                alt=""
              />
              <img
                src="https://assets.codepen.io/1506195/unsplash-0.jpg"
                alt=""
              />
              <img alt="" />
            </div>
          </section>

          <section>
            <div className="scene">
              <div className="inp-t">
                <p>Img for front</p>
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="4"
                  onChange={FileChange}
                />
                <p>Img for back</p>
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="7"
                  onChange={FileChange}
                />
              </div>
              <div className="tcard">
                <div className="card__face card__face--front">
                  {selectedimg4 && (
                    <img src={selectedimg4} alt="Selected file preview" />
                  )}
                </div>
                <div className="card__face card__face--back">
                  {selectedimg7 && (
                    <img src={selectedimg7} alt="Selected file preview" />
                  )}
                </div>
              </div>
              <div className="inp-t">
                <p>Img for front</p>
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="5"
                  onChange={FileChange}
                />
                <p>Img for back</p>
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="8"
                  onChange={FileChange}
                />
              </div>
              <div className="tcard">
                <div className="card__face card__face--front">
                  {selectedimg5 && (
                    <img src={selectedimg5} alt="Selected file preview" />
                  )}
                </div>
                <div className="card__face card__face--back">
                  {selectedimg8 && (
                    <img src={selectedimg8} alt="Selected file preview" />
                  )}
                </div>
              </div>

              <div className="inp-t">
                <p>Img for front</p>
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="6"
                  onChange={FileChange}
                />
                <p>Img for back</p>
                <input
                  className="input-file"
                  type="file"
                  accept="image/*"
                  data-my-variable="9"
                  onChange={FileChange}
                />
              </div>
              <div className="tcard">
                <div className="card__face card__face--front">
                  {selectedimg6 && (
                    <img src={selectedimg6} alt="Selected file preview" />
                  )}
                </div>
                <div className="card__face card__face--back">
                  {selectedimg9 && (
                    <img src={selectedimg9} alt="Selected file preview" />
                  )}
                </div>
              </div>
            </div>
          </section>

          <div className="footer">
            <ul>
              <li>
                <Link to="https://instagram.com/mohitkhyalia_mk">
                  Developer
                </Link>
              </li>
              <li>
                <Link to="/Edit">Create Your Own</Link>
              </li>
            </ul>
          </div>
        </div>
        
        );
 
       
}
