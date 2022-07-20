import './App.css';
import Fighter from './Fighter'



function App() {

  const fighters = [
    {name:'Roy', color: 'blue'}, {name:'Ganondorf', color: 'red'},{ name:'Mario', color: 'lightblue'}, {name: 'Luigi', color: 'pink'}, {name:'Marth', color: 'blue'}, {name:'Link',color:'pink'}, {name:'Inkling', color:'purple'}, {name:'Samus', color:'lightgreen'},{name: 'Fox', color: 'lightgreen'}, {name:'Sheik', color:"blue"}, {name:'Zelda', color:'pink'}, {name:'Ken', color: 'red'}
  ]

  return (
    <div className="App">
    <h1>Fighters</h1>
    <div className="fighters-grid">
      {
        fighters.map((element, index) =>{
          return (
           <Fighter fighter={element}/>
          );
        })
      }
    </div>
    </div>
  );
}

export default App;
