import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import '../../styles/components/superadmindash.css';






const superAdmin = () => {
    // const history = useHistory();
    const logOut =()=>{

        localStorage.removeItem('token')
        //    history.push('/admin');
        }
        
    return(
    <div className="app-container">
        <ul>
        <li className="nav__list-item">
        <a href="#">Dashboard</a>
      </li>
      <li className="nav__list-item">
        <a href="adminlist">adminlist</a>
      </li>
        </ul>
                <form>
                    <Link  onClick={logOut} className="play-button">logOut</Link>
                </form>           
    </div>


    );

}  
export default superAdmin;