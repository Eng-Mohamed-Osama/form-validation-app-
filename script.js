//Main Class
function Member(_name,_age,_email,_job,_password){
    this.name = _name,
    this.age = _age,
    this.email = _email,
    this.job = _job,
    this.password = _password
}
 //Array that contain the Users Info
let arr =[];

arr.push(new Member('mohamed',30, 'user1@gmail.com','lawyer',3507010) , new Member('sally',21, 'user2@gmail.com','doctor',205030) , new Member('rana',25, 'user3@gmail.com','engineer',3506010) ,new Member('ramy',30, 'user4@gmail.com','teacher',2001036) );
//Getting the input values
let inp = document.getElementById('inpEmail');
let inp2 = document.getElementById('inpPassword');
let inf1 = document.getElementById('inf');
let inf2 = document.getElementById('inf2');
let formcont = document.getElementById('mainform');

//Two functions to handle the message Error
inp.addEventListener('keydown', function(){
    inf1.style.display = 'none';
});
inp2.addEventListener('keydown', function(){
    inf2.style.display = 'none';
});

//The PreventDefault function to stop the form from submitting
function stopit(event){
    event.preventDefault();
}

//The event itself to validate the form 
document.getElementById('inpSub').addEventListener('click', function(e){
    console.log(e);
    for(i=0 ;i<arr.length;i++){
        if(inp.value ==  arr[i].email  && inp2.value == arr[i].password){
            console.log(arr[i].email);
            console.log(arr[i].password);
            inf1.innerHTML ='';
            inf2.innerHTML ='';
            inf1.style.display = 'block';  
            inf2.style.display = 'block';
            formcont.setAttribute('action','login.html');
            formcont.removeEventListener('submit',stopit);
            break;
         }else{ 
            inf1.style.display = 'block';  
            inf2.style.display = 'block';  
            inf1.innerHTML ='Enter A Valid Email';
            inf2.innerHTML ='Enter A Valid Password';
            formcont.addEventListener('submit',stopit);
        }
   } 
});