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

function addNewElementAsLi() {
  // return $('#baby-ninja');
  x = retrieveEmployeeInformation
  document.querySelector('.employee-list').innerHTML = retrieveEmployeeInformation
}

function increaseRankBy(n) {
  let array = document.querySelectorAll('ul.ranked-list')

  for (let i = 0; i < array.length; i++) {
    let this_child = array[i].children

    for (let j = 0; j < this_child.length; j++) {
      this_child[j].innerHTML = parseInt(this_child[j].innerHTML) + n
    }
  }
}
//
// function addNewLiOnClick() {
//   return $('.pics');
// }
//
// function retrieveEmployeeInformation() {
//   return $('#pic-list li:first-child');
// }
