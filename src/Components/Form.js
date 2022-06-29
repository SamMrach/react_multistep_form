import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
const Form=()=>{
    const [formData,setForm]=useState({
        firstName:"",
        lastName:"",
        email:"",
        Adress:"",
        terms:false,
        privacy:false,

    })
    const steps=[
        {
            id:1,
            name:"personal informations"
        },
        {
            id:2,
            name:"Shipping informations"
        },
        {
            id:3,
            name:"legal information"
        }
    ]
    const [step,setStep]=useState(1);
    const handleChange=(e)=>{
        console.log(e.target.name);
        setForm({...formData,[e.target.name]:e.target.value});
        console.log(formData);
    }
    const handleToggle=(e)=>{
        setForm({...formData,[e.target.name]:!formData[e.target.name]});
    }
    const next=()=>{
        setStep(step+1);
    }
    const previous=()=>{
        setStep(step-1);
    }
    return(
        <div class="container p-5 w-50 h-50 shadow rounded mt-5" >
        <form>
            <h4 class="fs-6 text-muted " >step {step} of 3</h4>
            <h2 class="mb-3 " >{steps[step-1].name}</h2>
            {
                step ==1 ? (
                <>
                <div class="row">
                <div class="col">
                  <div class="form-floating mb-3">
                    <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" class="form-control" id="floatingTextInput1" placeholder="John"/>
                    <label for="floatingTextInput1">First Name</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-floating mb-3">
                    <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" class="form-control" id="floatingTextInput2" placeholder="Smith" />
                    <label for="floatingTextInput2">Last Name</label>
                  </div>
                </div>
              </div>
              <div class="form-floating mb-3">
                <input type="email" name="email" value={formData.email} onChange={handleChange} class="form-control" id="floatingEmailInput" placeholder="name@example.com"/>
                <label for="floatingEmailInput">Email address</label>
              </div>
                </>
                ):null
            }
        
        {
            step == 2 ? (
                <div class="form-floating mb-3">
          <input name="Adress" value={formData.Adress} onChange={handleChange} type="text" class="form-control" id="floatingAdressInput" placeholder="N 143 Bloc 8 benseffar"/>
          <label for="floatingAdressInput"> Address</label>
        </div>
            ):null
        }
        
        {
            step==3 ? (
                <>
                 <div class="form-check form-switch mb-3">
          <input name="terms" value={formData.terms} onChange={handleToggle} class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
          <label class="form-check-label" for="flexSwitchCheckChecked">I agree to the Terms and Conditions of this Website.</label>
        </div>
        <div class="form-check form-switch mb-3">
          <input name="privacy" value={formData.privacy} onChange={handleToggle} class="form-check-input" type="checkbox" id="privacy"  />
          <label class="form-check-label" for="privacy">I accept the privacy policy.</label>
        </div>
                </>
            ) : null
        }
        <div class="d-flex justify-content-between align-items-center" style={{width:'170px'}}  >
       
        {
            step > 1 ? (<button type="button" class="btn " style={{backgroundColor:'black',color:'white'}} onClick={previous} >Previous</button>):null
        }
        {
            step <3 ? (<button type="button" class="btn " style={{backgroundColor:'black',color:'white'}} onClick={next} >Next</button>) : null
        }
         {
            step == 3 ? (<button type="submit" class="btn btn-primary ">Submit</button>) :null
        }
        </div>
        

      </form>
      </div>
    )
}
export default Form;