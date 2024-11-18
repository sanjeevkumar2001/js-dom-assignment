// we selected all form values
let name1 = document.querySelector(".id");
let name2 = document.querySelector(".name");
let name3 = document.querySelector(".contact");
let name4 = document.querySelector(".email");
const creatediv = document.createElement("div");
const div = document.querySelector(".container1");
// button is selected and  added event listener to the button
document.querySelector(".button").addEventListener("click",addlist);
function addlist(){
              // created 4para, 1 delete button, 1 edit button.
         const creatediv = document.createElement("div");
         const item = document.createElement("p");
         const item1 = document.createElement("p");
         const item2= document.createElement("p");
         const item3 = document.createElement("p");
         const item4 = document.createElement("button");
         const item5 = document.createElement("button");
         
       //  Giving values to the item
         item.innerHTML = name1.value;
         item1.innerHTML = name2.value;
         item2.innerHTML = name3.value;
         item3.innerHTML = name4.value;
         item4.innerHTML = '<i class="fa-solid fa-trash"></i>';
         item5.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
       //   appended every item to the div
         creatediv.appendChild(item);
         creatediv.appendChild(item1);
         creatediv.appendChild(item2);
         creatediv.appendChild(item3);
         creatediv.appendChild(item4);
         creatediv.appendChild(item5);
         //added class a1 to display in flex
        creatediv.classList.add("a1");
       // if somefield is empty when we enter information, it will alert us and will not proceed further 
         if (name1.value == '') {
                alert("enter your id to proceed");
                return;
         }
         if (name2.value == ''){
                alert("enter your name to proceed");
                return;
         }
         if (name3.value == ''){
                alert("enter your conactno to proceed");
                return;
         }
         if (name4.value == ''){
                alert("enter your email to proceed");
                return;
         }
         
         
       // append create div with original div in the html to display information
       div.appendChild(creatediv);
       //local storage is set, so that our data will not disappear after refreshing.
      localStorage.setItem(name1.value,name2.value);
         
       localStorage.setItem(name3.value,name4.value);
       //after submitting the field will become empty
       name1.value = '';
       name2.value = '';
       name3.value = '';
       name4.value = '';
       
       // adding event listener for delete button, we can delete records.
         item4.addEventListener("click",deleteitem)
         function deleteitem(){
             creatediv.remove();
         }
       // adding event listener for edit button, so we can edit records.
         item5.addEventListener("click",edititem)
         function edititem(){
              
              document.querySelector(".id").value = item.innerHTML;
              document.querySelector(".name").value = item1.innerHTML;
              document.querySelector(".contact").value = item2.innerHTML;
              document.querySelector(".email").value = item3.innerHTML;
              creatediv.remove();
              
         }
}




























