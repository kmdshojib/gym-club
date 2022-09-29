import React from 'react'
import './profile.styles.css'

// imporing tost
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import {Button} from 'react-bootstrap';

 const Profile = ({handleClickSeconds,totalTime,totalBreakTime}) => {
    const notify = () => toast("Congratulations! You have successfully completed your today's goal!");
  return (
    <div className='exercise-profile-details'>
        <div className="profile-wraper  d-flex flex-row">
            <img className='profile-picture' src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="" />
            <div className="profile-info pt-1">
                <div className="profile-name">Kamruzaman Shojib</div>
                <div className="address  text-muted">Kushtia,Bangladesh</div>
            </div>
        </div>
        <div className="heightweight-wraper d-flex mt-3 ms-3 mb-3 justify-content-around">
            <div className="height">
                <div className="height-info fw-bold">75<sub className='text-muted'>kg</sub></div>
                <div className="height-title fw-bold text-muted">Weight</div>
            </div>
            
            <div className="Weight">
                <div className="height-info fw-bold">6.5</div>
                <div className="height-title fw-bold text-muted">Height</div>
            </div>
            <div className="Age">
                <div className="height-info fw-bold">25<sub className='text-muted'>yrs</sub></div>
                <div className="height-title fw-bold text-muted">Height</div>
            </div>
        </div>

        <div className="break">
            <h5 className="add-break ms-4 mb-3">Add a Break</h5>

            <div className="seconds d-flex  justify-content-around">
                <div className="tens" onClick={(e) => handleClickSeconds(e)}>10s</div>
                <div className="twentys" onClick={(e) => handleClickSeconds(e)}>20s</div>
                <div className="thirtys" onClick={(e) => handleClickSeconds(e)}>30s</div>
                <div className="fourtys" onClick={(e) => handleClickSeconds(e)}>40s</div>
            </div>
        </div>

        <div className="exercise-details mt-4 ms-4">
            <h5 >Exercise Detils</h5>
            <div className="exercise-time d-flex mt-3">
                <h6 className='fw-bold pe-5'>Exercise time</h6>
                <div className='text-muted ps-2'>{totalTime} Seconds</div>
            </div>
            <div className="break-time d-flex mt-3">
                <h6 className='fw-bold pe-5'>Break time</h6>
                <div className='text-muted ps-2'>{totalBreakTime} Seconds</div>
            </div>

            <Button className='mt-4 ms-4' variant="primary" onClick={notify}>Activity Completed</Button>
            <ToastContainer />
       </div>
    </div>
  )
}

export default Profile
