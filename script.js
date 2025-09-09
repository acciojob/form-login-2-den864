//your JS code here. If required.

document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const form=document.querySelector("form");
    const data=new FormData(form);

    const fname=data.get("fname").trim();
    const lname=data.get("lname").trim();
    const phone=data.get("phone_number").trim();
    const email=data.get("email").trim();

    if(!fname || !lname || !phone || !email) return;

    const s=`First Name: ${fname} Last Name: ${lname} Phone Number: ${phone} Email ID: ${email}`;
    alert(s);

})
