window.onload = function() {
	//variables //getelements from the html 
	var form = document.getElementById("form");
	var input = document.getElementById("input");
	var btn = document.getElementById("btn");
	var list = document.getElementById("list");	
	var btnClr = document.getElementById("btnClr");	
    var id = 1; //count 
    
	// listItem = {item: "todo item", checked: flase}
	var listItem = "";  //empty array initialised 
	var todoList = [];  //empty object initialised 

	//if button clicked call the function and (add item , strikethrough , clear list) respectively
	btn.addEventListener("click", addItem); 
	list.addEventListener("click", boxChecked);
    btnClr.addEventListener("click", clearList);
    
	//add item to list
	function addItem() {
		if(input.value === "") {
			alert("You must enter some value!");
		}
		else {
            var text = input.value;	

            //linking input to checkbox 
            var item = `<li id="li-${id}">${text}<input id="box-${id}" 			class="checkboxes" type="checkbox"></li>`;			
			list.insertAdjacentHTML('beforeend', item);	 
			listItem = {item: text, checked: false}; //object to add the items in the list
            todoList.unshift(listItem);		
            id++; //increment count
			form.reset(); //clear the input tab s
		}
	}

	//adding string through style to list item
	function boxChecked(event) {
		const element = event.target;
		if(element.type === "checkbox") {
            element.parentNode.style.textDecoration = "line-through";
        }
	} 

	//clear list
	function clearList() {
		todoList = []; //empty the todo list 
		list.innerHTML = "";   //clear the list in html page	 
    }
}    