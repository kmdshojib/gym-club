import React,{useEffect,useState} from 'react'
// importing bootstrap from 'bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// importing cards from components
import Cards from './Components/cards/cards'
import './App.css'
import Profile from './Components/profile/profile';
import Header from './Components/Header/header'
import Question from './Components/accordion/accordion'


function App() {

  const [cards,setCards] = useState([])
  const [exerciseTime,setExerciseTime] = useState([])
  const [breakTime,setBreakTime] = useState([])
  const [items,setItems] = useState([])

  // fetching data from local mechine

  useEffect(() =>{
    fetch('./data.json')
    .then((res) =>res.json())
    .then(data => setCards(data))
    
  },[])

  // handle click on add items

  const handleClick = (time,e) => {
    const getTime =[...exerciseTime,time]
    setExerciseTime(getTime)
    e.target.classList.toggle('btn-success')
  }

  
  // calcuating total time of exercise
  const totalTime = exerciseTime.reduce((a,b)=> a+b, 0)
  

  const handleClickSeconds = (e) =>{
    const getBreakTime = parseInt( e.target.innerText)
    setBreakTime(getBreakTime)
    if(e.target){
      e.target.classList.add('bg-change') 
    }else if(!e.target){
      e.target.classList.remove('bg-change')
    }
    
  }

  // adding items to local stoage

  useEffect(() =>{
    localStorage.setItem("exersiseTime", JSON.stringify(totalTime))
    localStorage.setItem("totalBreakTime", JSON.stringify(breakTime));
  },[totalTime,breakTime])
  


  return (
    <div>
    <Header className = "mb-5 mt-5" />
      <div className='d-flex w-70 mobile-res'>
        
        <div className='card-container me-5'>
        
            {
              cards.map(data => 
                          <Cards 
                                key={data.id} 
                                name={data.name} 
                                img={data.img}
                                time={data.time}
                                description={data.description}
                                handleClick={handleClick}
              />)
            }
      </div>
      <Profile 
        handleClickSeconds={handleClickSeconds}
        totalTime={totalTime}
         getBreakTime={breakTime}
      />
    </div>
      <Question  />
    </div>
  );
}

export default App;
