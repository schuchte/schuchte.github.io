
var tasknumber: number = 0;

window.addEventListener("load", function(): void {
  document.querySelector(".adding").addEventListener("click", AddTask);
  document.querySelector(".number").addEventListener("click", AddTask);
});

function AddTask (): void {
  var newtask: string = (<HTMLInputElement>document.querySelector(".newtask")).value;
  console.log(newtask);
  addTaskToList(newtask); 
  var element = document.querySelector(".box");
  var numberoftasks = element.children.length;
  tasknumber = numberoftasks;
  console.log("Die Anzahl der To-Dos lautet:" + numberoftasks);
  document.querySelector(".number").innerHTML = numberoftasks + " in total";
}

function addTaskToList (newTaskValue: string): void {
  var addElement = document.createElement("div");
  addElement.setAttribute("class", "Template");
  addElement.setAttribute("id", "TaskId" + tasknumber); // Template konstruiert
  var myHtmlTemplate: string =  ""; // Template Inhalte
  myHtmlTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + tasknumber + "\"></button>";
  myHtmlTemplate += "<input class=\"firsttask\" id=\"firsttask" + tasknumber + "\" value=\"" + newTaskValue + "\" ></input>";
  myHtmlTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + tasknumber + "\"></button>";
  addElement.innerHTML = myHtmlTemplate;
  document.querySelector(".box").appendChild (addElement); // Hinzufügen vom Template
  console.log ("addTasktoList:" + newTaskValue);

}


function DeleteTaskText (ClickedTrash): void {
  console.log("This is deleating the task");
  ClickedTrash.parentElement.remove(); // div wird bei click auf Tonne gelöscht
  tasknumber --;
  // Counter
  var element = document.querySelector(".box");
  var numberoftasks = element.children.length;
  document.querySelector(".number").innerHTML = numberoftasks + " in total";
}

function CheckedButton (ClickedButton): void {
 if ( ClickedButton.classList.contains("fa-circle") ) {
      ClickedButton.classList.remove("fa-circle");
      ClickedButton.classList.add("fa-check-circle");
  } else {
      ClickedButton.classList.remove("fa-check-circle");
      ClickedButton.classList.add("fa-circle");
}}
