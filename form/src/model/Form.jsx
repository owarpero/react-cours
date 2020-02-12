import React from "react";
export default function Form(props) {
  const posit = ['Cleaner','Accountant','Boss of this gym','Security','Work simulator'] 
  const positOption = posit.map(pos=>  <option value={pos}>{pos}</option> )
   return(
    <div>
      <form action="#" onSubmit={props.onSubmit}>
        <div>
          <input className="user-input" type="text" name="name" onChange={props.handleInputChange} placeholder="Name" />
        </div> 
        <div className="select">
          <select name='select' onChange={props.handleInputChange}>
            {positOption}
          </select>
        </div>
        <div>
          <input type="submit" value="Add" />
          <span className="sign-in">Contractor?</span>
        </div>
        <input
            name="contractor"
            type="checkbox"
            onChange={props.handleInputChange} />
    </form>
</div>
)
}