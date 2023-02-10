import { AddEmployeeAPI } from "../Utils/fetch";
import {Link} from "react-router-dom";
import "./styles.css";

function AddEmployee()
{
 
  const addEmployee= () =>
  {
    const lastname=document.getElementById('lastname').value
    const firstname=document.getElementById('firstname').value
    const middlename=document.getElementById('middlename').value
    const sex=document.getElementById('sex').value
    const birthdate=document.getElementById('birthdate').value
    const civilStatus=document.getElementById('civilStatus').value
    const street=document.getElementById('street').value
    const barangay=document.getElementById('barangay').value
    const municipalCity=document.getElementById('municipalCity').value
    const province=document.getElementById('province').value
    const country=document.getElementById('country').value
    console.log("Resuldaadadadadt:");

    AddEmployeeAPI(lastname, firstname, middlename, sex, birthdate, civilStatus, street, barangay, municipalCity, province, country)
    .then((result)=>
    {
      console.log("Resuldaadadadadt:",result)
      console.log("Result:",result)
    })
    .catch(error=>{
      console.log('error: ', error)
    })
  }


    return(
        <>
    
       <div class="container-fluid vh-200 bg-dark">
    <div class="row vh-100">
      <div class="container py-5 h-100 primary-div">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-6">
            <div class="card shadow-2-strong radius" >
              <div class="card-body p-5">
    
              <h5 class="mb-4 text-center">Employee Basic Personal Information</h5>
 
                <div class="form-outline mb-1">
                <label>*Lastname</label>
                  <input  id="lastname"  type="text" placeholder="Lastname" class="form-control form-control-sm border-secondary" />
                </div>
                <div class="form-outline mb-1">
                <label>*Firstname</label>
                  <input  id="firstname"  type="text" placeholder="Firstname" class="form-control form-control-sm border-secondary" />
                </div>
                <div class="form-outline mb-2">
                <label>Middlename <i>(Optional)</i></label>
                  <input  id="middlename"  type="text" placeholder="Firstname" class="form-control form-control-sm border-secondary" />
                </div>

                <div class="form-outline mb-1">
                <label>*Sex</label>
                 <select class="form-select form-select-sm form-control form-control-sm border-secondary " id="sex">
                     <option selected>Choose...</option>
                     <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                 </div>

                 <div class="form-outline mb-1">
                <label>*Birtdate</label>
                <input  id="birthdate"  type="text" placeholder="mm/dd/yyyy" class="form-control form-control-sm border-secondary" />
                </div>

                <div class="form-outline mb-2">
                <label>*Civil Status</label>
                 <select class="form-select form-select-sm form-control form-control-sm border-secondary " id="civilStatus">
                     <option selected>Choose...</option>
                     <option value="1">Single</option>
                    <option value="2">Married</option>
                    <option value="3">Widow / Widower</option>
                    <option value="4">Seperated</option>
                    <option value="5">Annulled</option>
                  </select>
                 </div>

                 <div class="form-outline mb-1">
                <label>*Address</label>
                <input  id="street"  type="text" placeholder="House Lot # / Streets / Purok" class="form-control form-control-sm border-secondary mb-1" />
                <input  id="barangay"  type="text" placeholder="Barangay" class="form-control form-control-sm border-secondary mb-1" />
                <input  id="municipalCity"  type="text" placeholder="Municipal / City class" class="form-control form-control-sm border-secondary mb-1" />
                <input  id="province"  type="text" placeholder="Province" class="form-control form-control-sm border-secondary mb-1" />
                <input  id="country"  type="text" placeholder="Country" class="form-control form-control-sm border-secondary mb-3" />
                </div>
       
            

                <div class="form-outline d-grid gap-2">
               
                <button class="btn btn-primary btn-sm btn-block" onClick={addEmployee}>Save</button>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
        </>
     );
    
}
export default AddEmployee;
