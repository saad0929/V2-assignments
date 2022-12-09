import React from 'react';
import { useContext, useState } from "react";
import "./writehostel.css";
import axios from "axios";
import { Context } from "../../context/Context";
import ReactPlayer from 'react-player'
import Webcam from "react-webcam"
export default function Writehostel() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [area, setArea] = useState("");
  const [amount, setAmount] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState("");
  const[file1,setFile1] = useState(null);
  const[video,setVideo] = useState(null);
  const { user } = useContext(Context);
  const [image,setImage]=useState('');
  const webcamRef = React.useRef(null);

    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        // setImage(imageSrc)
        setFile(imageSrc)

        });
      


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHostel = {
      username: user.username,
      title,
      desc,
      address,
      floor,
      room,
      area,
      amount,
      contact,
    };
    if (file) {
      
      const data =new FormData();
      const filename = file.name;
            
            
            data.append("name", filename);
            data.append("file", file);
            
           
            newHostel.photo = filename;
            if(file1)
            {
      const filename1 = file1.name;
      data.append("name", filename1);
            data.append("file1", file1);
            newHostel.photo1 = filename1;
            }
      
            if(video)
            {
              const videoname = video.name;
               data.append("name", videoname);
            data.append("video", video);
            newHostel.video = videoname;
            }
            
            
      
            
      
            
            try {
              await axios.post("/upload", data);
            } catch (err) {}
          }
          try {
            const res = await axios.post("/hostels", newHostel);
            window.location.replace("/hostel/" + res.data._id);
          } catch (err) {}
        };

  
  
 
const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: "user"
};



  return (

    <div className="write">
      {image == '' ? <Webcam
                    audio={false}
                    height={500}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={520}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
       {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setFile('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                    
                        className="webcam-btn">Capture</button>
                        
                }
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          
            <i className="writeIcon fas fa-plus"> </i>
            
            <button type="button" class="btn btn-secondary">Input images</button>
<br></br>
            <br></br>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            
            onChange={(e) => setFile(e.target.files[0])} 
           
          />
</div>



<div className="writeFormGroup">

<div className="writeFormGroup">
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
  </div>
          <input
            type="text"
            // placeholder="Address"
            class="form-control"
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          </div>
</div>

<br></br>
  
  </div>
        


        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}