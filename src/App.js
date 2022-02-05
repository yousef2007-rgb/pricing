import logo from './logo.svg';
import './App.css';
import {motion} from 'framer-motion';
import {useState} from 'react';
function App() {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }  
  const [toggleState,setToggleState] = useState("annually")
  const [basicPricing,setBasicPricing] = useState(199.99);
  const [professionalPricing,setProfessionalPricing] = useState(249.99);
  const [masterPricing,setMasterPricing] = useState(399.99);
  return (
    <div className="App">
      <h1 className='title'>our pricing</h1>
      <div className='toggle'>
      <p>Annually </p>
      <label class="switch">
      <input type="checkbox" onClick={()=>{
        if(toggleState == "annually"){
          setToggleState("monthly");
          setBasicPricing(19.99);
          setProfessionalPricing(24.99);
          setMasterPricing(39.99);
        }else{
          setToggleState("annually");
          setBasicPricing(199.99);
          setProfessionalPricing(249.99);
          setMasterPricing(399.99);
        }
      }}/>
      <span class="slider round"></span>
      </label>
      <p> Monthly</p>
      </div>
      <motion.div className='cardsContaiener' 
      initial="hidden"
      animate="visible"
      variants={list}>
        <motion.div className='card' variants={item}>
            <h2>Basic</h2>
            <span>${basicPricing}</span>
            <hr />
            <p>500 GB Storage</p>
            <hr />
            <p>2 Users Allowed</p>
            <hr />
            <p>Send up to 3 GB</p>
            <hr />
            <div className='learnMoreBtn'>
            <a href="#">Learn More</a>
            </div>
        </motion.div>
        <motion.div id='professionalCard' className='card' variants={item}>
          <h2>Professional</h2>
            <span>${professionalPricing}</span>
            <hr />
            <p>1 TB Storage</p>
            <hr />
            <p>5 Users Allowed</p>
            <hr />
            <p>Send up to 10 GB</p>
            <hr />
            <div className='learnMoreBtn'>
            <a href="#">Learn More</a>
            </div>
        </motion.div>
        <motion.div className='card' variants={item}>
            <h2>Master</h2>
            <span>${masterPricing}</span>
            <hr />
            <p>2 TB Storage</p>
            <hr />
            <p>10 Users Allowed</p>
            <hr />
            <p>Send up to 20 GB</p>
            <hr />
            <div className='learnMoreBtn'>
            <a href="#">Learn More</a>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
