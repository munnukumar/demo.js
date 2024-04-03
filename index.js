// Write your code below:
function patientDetail(event){
    event.preventDefault();
    console.log(event.target.p_name.value);
    console.log(event.target.p_email.value);
    console.log(event.target.p_phone.value);
    console.log(event.target.date.value);
    console.log(event.target.time.value);
  
  }
  
  module.exports = patientDetail;