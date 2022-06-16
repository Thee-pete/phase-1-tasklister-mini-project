document.addEventListener("DOMContentLoaded", () => {
  // your code here

  document.querySelector('form').addEventListener('submit', submitInfo)


  function submitInfo(e){
    e.preventDefault()
    const inputValue = document.getElementById('new-task-description').value;
    const listIs = document.getElementById("tasks")
    const listItem = document.createElement('li')
    listIs.appendChild(listItem)
    listItem.appendChild(document.createTextNode(inputValue))

  }
});