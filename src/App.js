
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom'

import Protected from './Protected';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

import AdminLogin from './components/Sign In/AdminLogin';
import JobProviderLogin from './components/Sign In/JobProviderLogin';
import JobSeekerLogin from './components/Sign In/JobSeekerLogin';

import AdminRegisteration from './components/Admin/AdminRegisteration';
import AdminHome from './components/Admin/AdminHome';
import ViewAllJobs from './components/Admin/ViewAllJobs';
import AdminProfile from './components/Admin/AdminProfile';
import UpdateAdmin from './components/Admin/UpdateAdmin';
import DeleteAdmin from './components/Admin/DeleteAdmin';
import ViewAllJobprovider from './components/Admin/ViewAllJobprovider';
import ManageJobProvider from './components/Job Provider/ManageJobProvider';
import DeleteJobProvider from './components/Job Provider/DeleteJobProvider';

import JobProviderRegistration from './components/Job Provider/JobProviderRegistration';
import JobProviderHome from './components/Job Provider/JobProviderHome';
import ViewAllEmployees from './components/Job Provider/ViewAllEmployees';
import ViewAllJobSeeker from './components/Job Provider/ViewAllJobSeeker';
import ViewAllPostedJobs from './components/Job Provider/ViewAllPostedJobs';
import PostJobs from './components/Job Provider/PostJobs';
import JobProviderProfile from './components/Job Provider/JobProviderProfile';
import UpdateJobs from './components/Job Provider/UpdateJobs'


import JobSeekerRegistration from './components/Job Seeker/JobSeekerRegistration';
import JobSeekerHome from './components/Job Seeker/JobSeekerHome';
import JobSeekerProfile from './components/Job Seeker/JobSeekerProfile';
import ManageProfile from './components/Job Seeker/ManageProfile';
import UpdateEducation from'./components/Job Seeker/UpdateEducation';
import UpdateExperience from'./components/Job Seeker/UpdateExperience';
import UpdateProfile from'./components/Job Seeker/UpdateProfile';
import ViewJobSeekerProfile from './components/Job Seeker/ViewJobSeekerProfile';
import AddEducation from './components/Job Seeker/AddEducation';
import AddExperience from './components/Job Seeker/AddExperience';
import UpadateJobProviderProfile from './components/Job Provider/UpadateJobProviderProfile';
import ViewAvilableJobs from './components/Job Seeker/ViewAvilableJobs';
import ApplyForJob from './components/Job Seeker/ApplyForJob';

function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>

      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/JobProviderLogin" element={<JobProviderLogin/>}/>
      <Route path="/JobSeekerLogin" element={<JobSeekerLogin/>}/>

      
      <Route path="/JobSeekerRegistration" element={<JobSeekerRegistration/>}/>
      <Route path="/AdminRegisteration" element={<AdminRegisteration/>}/>
      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/ViewAllJobs" element={<ViewAllJobs/>}/>
      <Route path="/AdminProfile" element={<AdminProfile/>}/>
      <Route path="/UpdateAdmin" element={<UpdateAdmin/>}/>
      <Route path="/DeleteAdmin" element={<DeleteAdmin/>}/>
      <Route path="/ViewAllJobprovider" element={<ViewAllJobprovider/>}/>
      <Route path="/ManageJobProvider" element={<ManageJobProvider/>}/>

      
      <Route path="/JobProviderRegistration" element={<JobProviderRegistration/>}/>
      <Route path="/JobProviderHome" element={<JobProviderHome/>}/>
      <Route path="/ViewAllEmployees" element={<ViewAllEmployees/>}/>
      <Route path="/ViewAllJobSeeker" element={<ViewAllJobSeeker/>}/>
      <Route path="/ViewAllPostedJobs" element={<ViewAllPostedJobs/>}/>
      <Route path="/PostJobs" element={<PostJobs/>}/>
      <Route path="/JobProviderProfile" element={<JobProviderProfile/>}/>
      <Route path="/UpdateJobs" element={<UpdateJobs/>}/>
      <Route path="/DeleteJobProvider" element={<DeleteJobProvider/>}/>
      <Route path="/UpadateJobProviderProfile" element={<UpadateJobProviderProfile/>}/>
      <Route path="/AddExperience" element={<AddExperience/>}/>


      <Route path="/JobSeekerHome" element={<JobSeekerHome/>}/>
      <Route path="/JobSeekerProfile" element={<JobSeekerProfile/>}/>
      <Route path="/ManageProfile" element={<ManageProfile/>}/>
      <Route path="/UpdateProfile" element={<UpdateProfile/>}/>
      <Route path="/UpdateEducation" element={<UpdateEducation/>}/>
      <Route path="/UpdateExperience" element={<UpdateExperience/>}/>
      <Route path="/ViewJobSeekerProfile" element={<ViewJobSeekerProfile/>}/>
      <Route path="/AddEducation" element={<AddEducation/>}/>
      <Route path="/AddExperience" element={<AddExperience/>}/>
      <Route path="/ViewAvilableJobs" element={<ViewAvilableJobs/>}/>
      <Route path="/ApplyForJob" element={<ApplyForJob/>}/>

      

    </Routes>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    </>
    
  );
}

export default App;
