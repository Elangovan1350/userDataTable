let tbody = document.querySelector("tbody");
let emaildata = document.getElementById("email");
let passwordata = document.getElementById("password");
let savebtn = document.getElementById("datasave");
let warning = document.getElementById("warning");
let cleardata = document.getElementById("cleardata")


// empty array 
let usersData = [];


// save button

savebtn.addEventListener("click", () => {
  let userdata = {
    id: usersData.length + 1,
    email: emaildata.value,
    passwordata: passwordata.value,
  };
  let verify = false;

  usersData.map((data) => {
    let val = Object.values(data);
    let ver = val.includes(userdata.email);
    if (ver) {
      verify = true;
    }
  });

  if (!verify) {
    if(userdata.email.length<=6){
        warning.textContent="write proper Email"
        return
    }
    if (userdata.passwordata.length < 6) {
      warning.textContent = "password minimum 6 charactar";
      return;
    } else {
      usersData.push(userdata);
    }
  } else {
    warning.textContent = "Email alreadt exited";
   
    return
  }

  showData();
  emaildata.value = "";
  passwordata.value = "";
  warning.textContent = "";
});


//  clear button

cleardata.addEventListener("click",()=>{
    emaildata.value = "";
    passwordata.value = "";
    warning.textContent = "";

})
  


// delete user button


const deleteuser = (index) => {
  usersData.splice(index, 1);
  console.log(index);
  console.log(usersData);
  showData();
};


// creating table


const showData = () => {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }

  usersData.map(({ id, email, passwordata }, index) => {
    id = index + 1;
    let tr = document.createElement("tr");
    console.log(index);
    tr.innerHTML = `
    <td>${id}</td>
    <td>${email}</td>
    <td>${passwordata}</td>
    <td class="py-1"><button onclick="deleteuser(${index})" class="bg-transparent border-4 px-4 py-1 text-xl font-semibold border-red-500 hover:scale-105 active:scale-100 ">delete</button></td>
    
    
    `;
    tbody.appendChild(tr);
  });
};
