let btn = document.getElementById('submit')
btn.addEventListener('click',Storage)
function Storage(event) {
    event.preventDefault();
    const expense= document.getElementById('expense').value;
    const description = document.getElementById('description').value;
    const category =document.getElementById('category').value;


  const obj={
  expense,
  description,
  category
  }

  console.log(obj)
  axios.post("http://localhost:3000/todo/add-expense",obj)
  .then((response) => {
      showUserOnScreen(response.data.newExpenseDetails)
     // console.log(newExpenseDetails)
  }).catch(err => {
      document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
  })
}

window.addEventListener("DOMContentLoaded", (objId)=>{
  axios.get(`http://localhost:3000/todo/get-expense/${objId}`)
  .then((response) =>{
    console.log(response)

    for(var i =0; i< response.data.allExpense.length;i++){
     showUserOnScreen(response.data.allExpense[i])
    }
  }).catch((err) => console.log(err))

})

function showUserOnScreen(obj){
  const parentElement = document.getElementById('listOfitems')
  
  const childNode =`<li id = ${obj.id}>${obj.id}- ${obj.expense} - ${obj.description} - ${obj.category}
  <button onclick = deleteUser('${obj.id}')>Delete</button>
  <button onclick = editUser('${obj.expense}','${obj.description}','${obj.category}','${obj.id}')>Edit</button>
<input type="checkbox" id="myCheck" onclick= clickedUser('${obj.expense}','${obj.description}','${obj.category}','${obj.id}')>
  </li>`  
                
   parentElement.innerHTML = parentElement.innerHTML +childNode

}

function TodoCompleted(obj2){
  const parentElement1 = document.getElementById('listOfitems1')
  const childNode1 =`<li>${obj2.expense} - ${obj2.description} - ${obj2.category}
  </li>`   

  parentElement1.innerHTML = parentElement1.innerHTML +childNode1
}

function clickedUser(expense,description,category,objId){
    var chec = document.getElementById('myCheck')

    if(!chec.checked == true){
      obj2={
        expense,
        description,
        category
      }
      document.getElementById('expense').value.hidden = expense;
      document.getElementById('description').value.hidden = description;
      document.getElementById('category').value.hidden = category
      
      removeUserfromScreen(objId)
      TodoCompleted(obj2)
    }   
    }
  
  function editUser(expense,description,category,objId){
    const updatebuttton=`<button onclick = updateExpense('${objId}')>Update</button>`
    const updateParent = document.getElementById('updateButton')

    updateParent.innerHTML = updateParent.innerHTML + updatebuttton

    console.log(objId)
    document.getElementById('expense').value = expense;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category
    removeUserfromScreen(objId)
  }

  function updateExpense(objId){
    expense = document.getElementById('expense').value
    description = document.getElementById('description').value
    category = document.getElementById('category').value
    const obj1={
      expense,
      description,
      category
      }

axios.patch(`http://localhost:3000/todo/edit-expense/${objId}`,obj1).then((response)=>{
    showUserOnScreen(response.data.expense1)  
  console.log(response)
}).catch((err)=>console.log(err))
}

 function deleteUser (objId){
  axios.delete(`http://localhost:3000/todo/delete-expense/${objId}`)
  .then((response)=>{
    removeUserfromScreen(objId)
  }).catch((err) => {   
                console.log(err)
                
 })
 
}

 function removeUserfromScreen(objId){
  const parentNode= document.getElementById('listOfitems')
  const childNodeTobeDeleted = document.getElementById(objId)
  if(childNodeTobeDeleted){
    //parentNode.removeChild(childNodeTobeDeleted);
      childNodeTobeDeleted.remove()
  }

 }