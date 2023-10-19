// let tbody = document.querySelector("tbody");
// let emaildata = document.getElementById("email");
// let passwordata = document.getElementById("password");
// let savebtn = document.getElementById("datasave");
// let warning = document.getElementById("warning");
// let cleardata = document.getElementById("cleardata")


// // empty array 
// let usersData = [];


// // save button

// savebtn.addEventListener("click", () => {
//   let userdata = {
//     id: usersData.length + 1,
//     email: emaildata.value,
//     passwordata: passwordata.value,
//   };
//   let verify = false;

//   usersData.map((data) => {
//     let val = Object.values(data);
//     let ver = val.includes(userdata.email);
//     if (ver) {
//       verify = true;
//     }
//   });

//   if (!verify) {
//     if(userdata.email.length<=6){
//         warning.textContent="write proper Email"
//         return
//     }
//     if (userdata.passwordata.length < 6) {
//       warning.textContent = "password minimum 6 charactar";
//       return;
//     } else {
//       usersData.push(userdata);
//     }
//   } else {
//     warning.textContent = "Email alreadt exited";
   
//     return
//   }

//   showData();
//   emaildata.value = "";
//   passwordata.value = "";
//   warning.textContent = "";
// });


// //  clear button

// cleardata.addEventListener("click",()=>{
//     emaildata.value = "";
//     passwordata.value = "";
//     warning.textContent = "";

// })
  


// // delete user button


// const deleteuser = (index) => {
//   usersData.splice(index, 1);
//   console.log(index);
//   console.log(usersData);
//   showData();
// };


// // creating table


// const showData = () => {
//   while (tbody.firstChild) {
//     tbody.firstChild.remove();
//   }

//   usersData.map(({ id, email, passwordata }, index) => {
//     id = index + 1;
//     let tr = document.createElement("tr");
//     console.log(index);
//     tr.innerHTML = `
//     <td>${id}</td>
//     <td>${email}</td>
//     <td>${passwordata}</td>
//     <td class="py-1"><button onclick="deleteuser(${index})" class="bg-transparent border-4 px-4 py-1 text-xl font-semibold border-red-500 hover:scale-105 active:scale-100 ">delete</button></td>
    
    
//     `;
//     tbody.appendChild(tr);
//   });
// };





// GTP improve code

// DOM Element Selection
const tbody = document.querySelector("tbody");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const saveButton = document.getElementById("datasave");
const warning = document.getElementById("warning");
const clearButton = document.getElementById("cleardata");

// Data Storage
let usersData = [];

// Event Listener: Save Button
saveButton.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  // Validate email and password
  if (!isValidEmail(email)) {
    showWarning("Please enter a valid email.");
    return;
  }

  if (!isValidPassword(password)) {
    showWarning("Password must be at least 6 characters long.");
    return;
  }

  // Check for duplicate email
  if (isDuplicateEmail(email)) {
    showWarning("Email already exists.");
    return;
  }

  // Add user data to the array
  usersData.push({ email, password });

  // Update the table and clear input fields
  showData();
  clearInputFields();
  hideWarning();
});

// Event Listener: Clear Button
clearButton.addEventListener("click", () => {
  clearInputFields();
  hideWarning();
});

// Event Listener: Delete User Button
function deleteUser(index) {
  usersData.splice(index, 1);
  showData();
}

// Display User Data
function showData() {
  tbody.innerHTML = "";

  usersData.forEach((userData, index) => {
    const { email, password } = userData;
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td class="py-1">
          <button onclick="deleteUser(${index})" class="bg-transparent border-4 px-4 py-1 text-xl font-semibold border-red-500 hover:scale-105 active:scale-100">Delete</button>
        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

// Helper function: Validate Email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Helper function: Validate Password
function isValidPassword(password) {
  return password.length >= 6;
}

// Helper function: Check for Duplicate Email
function isDuplicateEmail(email) {
  return usersData.some((userData) => userData.email === email);
}

// Helper function: Show Warning Message
function showWarning(message) {
  warning.textContent = message;
}

// Helper function: Hide Warning Message
function hideWarning() {
  warning.textContent = "";
}

// Helper function: Clear Input Fields
function clearInputFields() {
  emailInput.value = "";
  passwordInput.value = "";
  hideWarning();
}

