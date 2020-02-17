import React from "react";
export default function Form(props) {
  const posit = ['Cleaner','Accountant','Boss of this gym','Security','Work simulator'] 
  const positOption = posit.map(pos=> <option value={pos}>{pos}</option> )
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
            checked={state.contractor}
            name="contractor"
            type="checkbox"
            onChange={handleInputChange} />
    </form>
</div>
)
}