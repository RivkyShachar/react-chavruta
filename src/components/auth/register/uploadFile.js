import React, { useState } from 'react';
import axios from 'axios'
const UploadFile = () => {
    const presetKey = "wiejdrdt";
    const cloudName = "dmxzrb6dq";
    const [image, setImage] = useState();
    function handleFile(e) {
        const file = e.target.files[0];
        const formData=new FormData();
        formData.append('file',file);
        formData.append("upload_preset",presetKey);
        axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,formData)
        .then(res=>setImage(res.data.secure_url))
        .catch(err=>console.log(err));
    }
    return (
        <div>

            {<div className="col-2 text-center">
                <div className="input-group">

                    <div className="profile-pic-container m-1">

                    </div>
                    <input
                        type="file"
                        name='image'
                        onChange={handleFile}
                    />
                    <img src={image} className='w-100 h-100'/>
                </div>
            </div>}
        </div>
    )
}

export default UploadFile