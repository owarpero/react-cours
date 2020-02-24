import React from "react";
import posit from '../global/positOption';
export default function Form(props) {
  const positOption = posit.getPositions().map(pos=> <option key={pos.key} value={pos.titel}>{pos.titel}</option> )
  const { onSubmit,handleInputChange,state  } = props
   return(
    <div>
      <form action="#" onSubmit={onSubmit}>
        <div>
          <input className="user-input" type="text" name="name" onChange={props.handleInputChange} value={state.name} placeholder="Name" />
        </div> 
        <div className="select">
          <select name='select' value={state.select} onChange={handleInputChange}>
            {positOption}
          </select>
        </div>
        <div>
          <input type="submit" value={state.submitValue} />
          <span className="sign-in">Contractor?</span>
        </div>
        <input
            disabled={state.disabled}
            checked={state.contractor}
            name="contractor"
            type="checkbox"
            onChange={handleInputChange} />
            
    </form>
</div>
)
}