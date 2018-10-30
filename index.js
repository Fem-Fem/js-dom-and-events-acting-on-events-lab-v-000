function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let x = document.querySelector('input')

function retrieveEmployeeInformation() {
  return x.value
}

function addNewElementAsLi() {
  // return $('#baby-ninja');
  x = retrieveEmployeeInformation();
  document.querySelector('.employee-list').innerHTML = x;
}

// function addNewLiOnClick(){
//   let submit = document.querySelector('input[type="submit"]')
//   submit.addEventListener('click', function(event){
//     addNewElementAsLi()
//     // resetInput()
//   })
// }

function clearInput() {
  document.querySelector('input').value = ""
}

function addNewLiOnClick() {
  const main = document.querySelector('input[type="submit"]');
  main.addEventListener('click', function(event) {
    addNewElementAsLi();
    clearInput();
  });
}

function clearEmployeeListOnLinkClick() {
  const main = document.querySelector('a');
  const ul = document.querySelector('ul');
  main.addEventListener('click', function(event){
    document.querySelector('employee-list').innerHTML = ""
  });
}

// function clearEmployeeListOnLinkClick(){
//   let link = document.querySelector('a')
//   let ul = document.querySelector('ul')
//   link.addEventListener('click', function(event){
//     ul.innerHTML = ''
//   })
// }
