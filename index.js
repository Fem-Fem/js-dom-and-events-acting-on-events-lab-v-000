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
//
// function paragraphSelector() {
//   return $('p');
// }
//
// function lastImageSelector() {
//   return $('img:last');
// }

// function addNewElementAsLi() {
//   return $('#baby-ninja');
// }
//
// function addNewLiOnClick() {
//   return $('.pics');
// }
//
// function retrieveEmployeeInformation() {
//   return $('#pic-list li:first-child');
// }
