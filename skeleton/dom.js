// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    let container = document.getElementById('todo-container');
    let addTodoForm = document.getElementById('add-todo');
  
    let state = [
      { id: -3, description: 'Study for the exam', done: false },
      { id: -2, description: 'Visiting my Grandme', done: false },
      { id: -1, description: 'Prepare my lunch', done: false },
    ]; // this is our initial todoList
  
    // This function takes a todo, it returns the DOM node representing that todo
    let createTodoNode = function(todo) {
      let todoNode = document.createElement('li');
   
      // you will need to use addEventListener
  
      // add span holding description
      let descriptionSpa = document.createElement('span');
      descriptionSpa.innerHTML = todo.description;
      if(todo.done){
        todoNode.className = "Marked";
      }
      todoNode.appendChild(descriptionSpa);
  
      // this adds the delete button
      let deleteButtonNode = document.createElement('button');
      deleteButtonNode.textContent = "Delete";
      deleteButtonNode.addEventListener('click', function(event){
        let newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
  
      todoNode.appendChild(deleteButtonNode);
  
      // add markTodo button
      let markTodoButtonNode = document.createElement("button");
      markTodoButtonNode.textContent = 'Mark';

      markTodoButtonNode.addEventListener('click', function(event){
        let newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
        console.log(newState);
      });
      todoNode.appendChild(markTodoButtonNode);
  
    

  
        // add classes for css
      return todoNode;
      };
    
    // bind create todo form
      if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
          // https://developer.mozilla.org/en-US/docs/Web/Events/submit
          // what does event.preventDefault do?
          // what is inside event.target?
          event.preventDefault();
          //let input = document.getElementById("item");
          let desc = event.target.description.value;
        
          // hint: todoFunctions.addTodo
          let object = {id:0, description:"", done:false};
          object['description'] = desc;
          
          let newState = todoFunctions.addTodo(state, Object);
          update (newState);
          event.target.description.value = "";
         
        });
      
    }
  
    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
  
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });
  
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);

})();
