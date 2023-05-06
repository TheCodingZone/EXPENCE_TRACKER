var selectedRow=null;

function showAlert(message,className){
    const div=document.createElement('div');
    div.className=`alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container=document.querySelector(".container");
    const main=document.querySelector(".main");

    container.insertBefore(div,main);

    setTimeout( ()=>
     document.querySelector(".alert").remove(),3000);
    

}
//Get Form data
// document.querySelector("#form-data").addEventListener("submit",(e)=>{
//     e.preventDefault();

//     const expence=document.querySelector("#expence").value;
//     const description=document.querySelector("#description").value;
//     const category=document.querySelector("#category").value;

//     //validate
//     if(expence== "" ||description== "" ||category== "" )
//     {
//         showAlert("Please Enter Details","danger"); 
    
//     }

// })

function readFormData(){
    const expence=document.querySelector("#expence").value;
    const description=document.querySelector("#description").value;
    const category=document.querySelector("#category").value;


    if(expence== "" ||description== "" ||category== "" )
        {
            showAlert("Please Enter Details","danger"); 
        
         }
         else{
            if(selectedRow==null){
            const list=document.querySelector("#list-item");
            const row=document.createElement("tr");
            row.innerHTML=`
            <td>${expence}</td>
            <td>${description}</td>
            <td>${category}</td>
            <td><a href="#" class="btn btn-warning btn-sm edit">EDIT</a>
            <a href="#" class="btn btn-danger btn-sm delete">DELETE</a>
            </td>`;
            list.appendChild(row);
            selectedRow=null;
            // localStorage.setItem("EXPENCE",selectedRow.children[0].textContent);
            // localStorage.setItem("DESCRIPTIN",selectedRow.children[1].textContent);
            // localStorage.setItem("CATEGORY",selectedRow.children[2].textContent);
            showAlert("Details Added Successfully","success");
            }
       
        else{
            selectedRow.children[0].textContent=expence;
            selectedRow.children[1].textContent=description;
            selectedRow.children[2].textContent=category;
            
            selectedRow=null;
            showAlert("Student Data Edited","info");
        }
        clearFields();
    }

}

//Edit data
document.querySelector("#list-item").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains ("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#expence").value = selectedRow.children [0] .textContent;
    document.querySelector("#description").value = selectedRow.children [1].textContent;
    document.querySelector("#category").value = selectedRow.children [2].textContent;
    }
    });

//Clear Fields
function clearFields(){
    document.querySelector('#expence').value="";
    document.querySelector('#description').value="";
    document.querySelector('#category').value="";
}

//Delete Data
document.querySelector('#list-item').addEventListener("click",(e)=>{
    target=e.target;
    if(target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("DATA SUCCESSFULLY DELETED", "danger");
        }
});