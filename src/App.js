import React,{useEffect,useState} from 'react'
// importing bootstrap from 'bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// importing cards from components
import Cards from '../src/Components/cards'



function App() {

  const [cards,setCards] = useState([])

  useEffect(() =>{
    fetch('./data.json')
    .then((res) =>res.json())
    .then(data => setCards(data))
    
  },[])

  const handleClick = () => {
    console.log("I am clicked")
  }

  return (
    
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
  );
}

export default App;
