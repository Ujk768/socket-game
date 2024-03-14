import "./App.css";
import Square from "./components/Square/Square";

function App() {
  const elements = [[1,2,3],[4,5,6],[7,8,9]];
  return (
    <div className="main-wrapper">
      <div className="player-wrapper">
        <div className="left">Self</div>
        <div className="right">Opponent</div>
      </div>
        <h1>Tic Tac Toe</h1>
      <div className="square-wrapper"> 
        {
          elements.map((arr)=>
          arr.map((e)=>{
            return <Square/>
          }))
        }
       </div>

     
    </div>
  );
}

export default App;
