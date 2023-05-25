import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import {useLocation} from 'react-router-dom'
import Swal from 'sweetalert2';
const Private = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="container mx-auto">
          <div>
          <progress className="progress progress-primary w-56" value="100" max="100"></progress>
          </div>
      </div>
    )
  } else if (user) {
    return children;
  } else {
    Swal.fire('You need to login first')
    return (
    
      
      <Navigate
        to="/login"
        state={{
            from: location,
        }}
        replace
      />
  
    );
  }
};

export default Private;
