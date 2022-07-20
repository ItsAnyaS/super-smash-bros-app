const Fighter = ({fighter}) => {
     <div>
       <img
         className="fighter-img"
         src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.toLowerCase()}.png`}
         alt={fighter}
         // key={}
       />
       <h5 className="fighter-name">{fighter}</h5>
     </div>;
}

export default Fighter