import React, {useContext} from 'react';
import alertContext from "../../context/alert/AlertContext";

const Alert = () =>{
  const AlertContext = useContext(alertContext);

  const {alert} = AlertContext;

return (alert !== null && (
  <div className={`alert alert-${alert.type}`}>
    <i className="fa fa-info-circle"/> {alert.msg}
    </div>
  )
)
}
export default Alert;
