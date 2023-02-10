import { Link } from "react-router-dom";

function TopNavBar(props)
{
  let isUserLoggedIn  = JSON.parse(localStorage.getItem('user'))
  console.log('props: ', props);
    return (
    <>

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div class="container-fluid">
    <Link to='/' class="navbar-brand" href="#"><strong>NYC</strong> <i>Employee Management System</i> </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample06">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        
          <li class="nav-item">
            <Link to='/add-employee' className="nav-link active" onClick={()=>{props.setCurrentLink('/add-employee')}}> Add Employee </Link>

           
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">View List</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" disabled>|</a>
          </li>
        
    
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle active"  data-bs-toggle="dropdown" aria-expanded="false">{isUserLoggedIn.username}</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >Profile</a></li>
              <li><a className="dropdown-item" >Account Seeting</a></li>
              <li><a className="dropdown-item">Logout</a></li>
            </ul>
          </li>
        </ul>
   
      </div>
    </div>
  </nav>
    </>
    );
}

export default TopNavBar;