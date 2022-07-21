const FighterScreen = ({selectedFighter, setSelectedFighter}) => {
return (
  <div
    id="fighter-screen"
    style={{
      backgroundImage: `url(https://www.smashbros.com/assets_v2/img/fighter/${selectedFighter.toLowerCase()}/bg.jpg)`,
      backgroundSize: "cover",
    }}
  >
    <img
      src={`https://www.smashbros.com/assets_v2/img/fighter/${selectedFighter.toLowerCase()}/main.png`}
      className="char-model"
    />
    <h3 className="char-name">{selectedFighter}</h3>
    <h3 className="char-name-bg">{selectedFighter}</h3>
    <button className="close-btn" onClick={()=> {setSelectedFighter()}}>&#10005;</button>
  </div>
);
}

export default FighterScreen