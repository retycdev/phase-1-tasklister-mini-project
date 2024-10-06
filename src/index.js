document.addEventListener("DOMContentLoaded", () => {
  // your code here


  const createTaskForm= document.getElementById('create-task-form')
  let tskDescrptn= document.getElementById('tsk-descrptn')
  const tasks= document.getElementById('tasks')
  const formData=new FormData(createTaskForm);
  let submitBtn= document.getElementById('submit-btn')



createTaskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    

if(tskDescrptn.value==="")
{
  //chek if tsk inpt is empty
  alert("Can't insert empty task") 
}
else{
  for(let [name,value] of formData){
    value=tskDescrptn.value //destruct value  property frm formData

     let newTsk= document.createElement('li')
     let tskContent=document.createElement('p')
     let tskActions =document.createElement('div')
     let deleteTsk= document.createElement('button') // for delete actions
     let editTsk=document.createElement('button'); //for edit
     let tskPriority=document.createElement('select') // for  priority selection

     let options=['Priority','High','Medium','Low']

     //dynamically adds  options to select elemnt,  tskPriority
     options.forEach((optn)=>{
     let optionElement= document.createElement('option')
     optionElement.value=optn.toLowerCase();
     optionElement.textContent=optn
    
      tskPriority.appendChild(optionElement)   //priority 
   

      
     })

     
     //actions styles
     tskActions.style.display='flex'
     tskActions.style.justifyContent='space-between'
     tskActions.style.width='64px'
     
     tskActions.appendChild(editTsk) //append edit & delete actions
     tskActions.append(deleteTsk)

     //edit icn styles
     editTsk.style.border="1px solid black"
     editTsk.style.height="24px"
     editTsk.style.width="24px"
     editTsk.style.textAlign="center"
     editTsk.innerHTML=('i')
     
      
     //delete icn styles
     deleteTsk.style.border="1px solid black"
     deleteTsk.style.height="24px"
     deleteTsk.style.width="24px"
     deleteTsk.style.textAlign="center"
     deleteTsk.innerHTML=('X')


      //ALL FUNCTIONS START HERE!!


 //Set Priority
 tskPriority.addEventListener('click',()=>{
  let selectedPriority = tskPriority.value;
        
  switch(selectedPriority){
    case("high"):{
     newTsk.style.backgroundColor="red";
     break
     
    }
    case("medium"):{
      newTsk.style.backgroundColor="orange";
      break
    }
    case("low"):{
      newTsk.style.backgroundColor="green";
      break
    }
    default:
      newTsk.style.backgroundColor="#387478"
      break
    

  }
  
 })



     

     //edit tsk
     editTsk.addEventListener('click',(e)=>{
      if(e.target.tagName==="BUTTON"){
        //set  tsk descptn value to tsk content
        tskDescrptn.value= tskContent.innerHTML;
        e.target.disabled=true //disable edit btn

        //edit task value
        
      submitBtn.style.display="none"  //hide  submit btn
     

      let updateTskBtn= document.createElement('button') //create updt tsk btn
      updateTskBtn.innerHTML=('Update Task')
      updateTskBtn.style.backgroundColor="violet"
      updateTskBtn.style.color="white"
      
      updateTskBtn.addEventListener('click', () => {
        tskContent.innerHTML = tskDescrptn.value; // Update task description
        tskDescrptn.value = ""; // Clear input field
        submitBtn.style.display="block"; // Re-enable submit button
        submitBtn.style.opacity = '1'; // Reset opacity
        updateTskBtn.remove(); // Remove update button
        e.target.disabled=false //Re-enable edit btn

    });

      createTaskForm.appendChild(updateTskBtn) //add updt tsk btn to form
      }
     })
      //delete tsk
     deleteTsk.addEventListener('click' ,(e)=>{
       
      if(e.target.tagName=="BUTTON"){
        e.target.closest('li').remove() //remove list element
      }
      
     })

     


     // Adds task to the tasks list

     tskContent.innerHTML=value  //get input value
     newTsk.append(tskContent)
     newTsk.append(tskPriority)
     newTsk.append(tskActions)
     tasks.appendChild(newTsk)
     
     tskDescrptn.value="" //make tsk input empty
     
      console.log(`${name}= ${value}`)
  }}

  })})
