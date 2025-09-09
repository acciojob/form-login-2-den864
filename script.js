
document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();

    const form=document.querySelector("form");
    const data=new FormData(form);

    const fname=data.get("First Name").trim();
    const lname=data.get("Last Name").trim();
    const phone=data.get("Phone Number").trim();
    const email=data.get("Email ID").trim();

    if(!fname || !lname || !phone || !email) return;

    const s=`First Name: ${fname} Last Name: ${lname} Phone Number: ${phone} Email ID: ${email}`;
    alert(s);

})

