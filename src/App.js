import React,{useEffect,useState} from 'react'
// importing bootstrap from 'bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// importing cards from components
import Cards from '../src/Components/cards'



function App() {

  const [cards,setCards] = useState([])
  const [exerciseTime,setExerciseTime] = useState([])

  useEffect(() =>{
    fetch('./data.json')
    .then((res) =>res.json())
    .then(data => setCards(data))
    
  },[])

  const handleClick = (time) => {
    const getTime =[...exerciseTime,time]
    setExerciseTime(getTime)
  }


  // calcuating total time of exercise
  const totalTime = exerciseTime.reduce((a,b)=> a+b, 0)
  
  return (
    <div>
        <div className=''>
            {
              cards.map(data => 
                          <Cards 
                                key={data.id} 
                                name={data.name} 
                                img={data.img}
                                time={data.time}
                                handleClick={handleClick}
              />)
            }
      </div>
      <div>
        <p>Exercise time: {totalTime}</p>
      </div>
    </div>
  );
}

export default App;
