// let formSelect = document.querySelector("#myform");
// formSelect.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("This form submitted");
// });

// let inputSelector = document.querySelector("#inputUser");
// inputSelector.addEventListener("input", function (e) {
//   let inputUserName = e.target.value;
//   console.log("Typing", inputUserName);
// });
// ====================================================
// let formSelect = document.querySelector("#myform");
// let inputSelector = document.querySelector("#inputUser");
// formSelect.addEventListener("submite", (e) => {
//   e.preventDefault();
//   console.log(e.target.username.value);
//   console.log(formSelect.element.username.value);
//   console.dir(formSelect.username.value);
//   console.log(e.target.inputSelector.value);
// //   ------------------------------------
// if (!e.target.username.value || !e.target.inputSelector.value) {
//     alert("your input is empty! please write something")
//     return;
// }else{
// alert("submitted!")
// }
// });
// ===================================================
// const formShopping = document.querySelector("#shoppingForm");
// const listUl = document.querySelector("list");
// const formFunc = formShopping.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const liHtml = document.createElement("li");
//   liHtml.innerHTML = e.target.product.value + " " + e.target.qty.value;
//   listUl.append(li);
//   e.target.product.value = "";
//   e.target.qty.value = "";
// });
// ==================================================
// const inputText = document.querySelector("input")
// inputText.addEventListener("change", ()=>{
//     console.log("change");

// })
// inputText.addEventListener("input",()=>{
//     console.log("input");

// })
// =====================================================
// practice
// const formElement = document.createElement("form");
// const inputEmail = document.createElement("input");
// const inputName = document.createElement("input");
// const submitBtn = document.createElement("button");
// function input(inputName, inputEmail, submitBtn) {
//   inputName.setargument("type","text");
//   inputName.name = "name";
//   inputName.placeholder = "Enter your name";
//   inputEmail.setargument("type","email");
//   inputEmail.name = "email";
//   inputEmail.placeholder = "Enter your email";
//   submitBtn.type = "submit";
//   submitBtn.textContent = "Submit";
// }
// input(inputName, inputEmail, submitBtn);
// formElement.append(inputEmail, inputName, submitBtn);
// document.querySelector("body").append(formElement);
// formElement.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const nome = inputName.value.trim();
//   const email = inputEmail.value.trim();
//   if (!nome || !email) {
//     alert("please write both fields");
//   }
//   console.log(`your name ${nome}`, `your email ${email}`);
//   e.target.inputEmail.value = "";
//   e.target.inputName.value = "";
// });

// =====================================================
// promise
// const myPromise = new Promise((resolve, reject)=>{
//     let success = true;
//     if (success) {
//         resolve("Done successfully")
//     }else{
//         reject("Somethig went wrong")
//     }
// })
// myPromise
// .then(result => console.log("true", result)
// ).catch(error => console.log("false", error)
// )

// function waitTwoSeconds() {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Finished")
//         },2000)
//     })
// }
// waitTwoSeconds().then(result => console.log(result)
// )
// ===================
// function checkAge(age) {
//     return new Promise ((resolve,reject)=>{
//         if (age>18) {
//         resolve ("Allowed")
//         }else{
//             reject("Denied")
//         }
//     })

// }
// checkAge(20).then((result) => console.log(result)
// ).catch((error) => console.log(error)
// )
// =====================
function rainbow(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backfaceVisibility = color;
      resolve();
    }, delay);
  });
}
rainbow("red", 2000)
  .then(() => rainbow("orange", 3000))
  .then(() => rainbow("yellow", 4000))
  .catch((error) => console.log(error));

//   async
async function greet() {
    return "Hello"
}
greet().then((msg)=>{
    console.log(msg)
    
})

function waitTwoSecond() {
    return new promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Done after two second")
        },2000)
    })
}
async function run() {
    console.log("Waiting...");
    const result = await waitTwoSecond()
    console.log(result);
    
}