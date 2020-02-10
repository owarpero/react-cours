import React from "react";
export default function Form(props) {
    return   (<div><form action="#" onSubmit={props.onSubmit}>
    <div>
      <input className="user-input" type="text" name="name" id="name" onChange={props.handelChange} placeholder="Name" />
    </div> 
    <div className="select">
      <select name='select' onChange={props.handelChange}>
        <option value="Cleaner" >Cleaner</option>
        <option value="Accountant" className="icon-monkey">Accountant</option>
        <option value="Boss of this gym" className="icon-bear">Boss of this gym</option>
        <option value="Security" className="icon-squirrel">Security</option>
        <option value="Work simulator" className="icon-elephant">Work simulator</option>
      </select>
    </div>
   <div>
    <input type="submit" value="Add" />
      <span className="sign-in">Contractor?</span>
  </div>
  <div className="radio-check">   
    <input type="radio" className="radio-no" id="no" name="remember" value="no" checked={props.state.radioGroup.no}  onChange={props.handelRadio} />
    <label htmlFor="no"><i className="fa fa-times"></i></label>  
    <input type="radio" className="radio-yes" id="yes" name="remember"  value="yes" checked={props.state.radioGroup.yes} onChange={props.handelRadio} />
    <label htmlFor="yes"><i className="fa fa-check"></i></label>
    <span className="switch-selection"></span>
  </div>

</form>
</div>)
}