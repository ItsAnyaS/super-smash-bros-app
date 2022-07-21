const Fighter = ({fighter, setSelectedFighter}) => {

  const handleClick = (element) => {
  setSelectedFighter(element.name)
  }

    return (
      <div
        style={{ backgroundColor: fighter.color }}
        onClick={() => {
         setSelectedFighter(fighter.name)
        }}
      >
        <img
          className="fighter-img"
          src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.name.toLowerCase()}.png`}
          alt={fighter.name}
        />
        <h5 className="fighter-name">{fighter.name}</h5>
      </div>
    );
}

export default Fighter