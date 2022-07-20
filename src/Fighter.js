const Fighter = ({fighter}) => {
    return ( <div style={{backgroundColor: fighter.color}}>
       <img
         className="fighter-img"
         src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.name.toLowerCase()}.png`}
         alt={fighter.name}
        //  style={{backgroundColor: fighter.color}}
         // key={}
       />
       <h5 className="fighter-name">{fighter.name}</h5>
     </div>)
}

export default Fighter