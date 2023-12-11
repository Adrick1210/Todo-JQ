// define the variables used
$input = $("input");
// console.log($input);
$todos = $(".todos");
// console.log($todos);

// store the button in a variable
$button = $("button");
// console.log($button);

// Event listener for the button
$button.on("click", (event) => {
  // console.log('clicked')
  const val = $input.val();
  // console.log(val)
  const $todo = $("<li>").addClass("todo").text(val);
  $todos.append($todo);
  const $trash = $("<span>").addClass("trash");
  $todo.append($trash);
  const $edit = $("<span>").addClass("edit");
  $todo.append($edit);
  $input.val("");
});

// event to remove todos
$(".todos").on("click", ".trash", function () {
  $(this).parent(".todo").fadeOut(300);
});

// event to add checked
$('.todos').on('click', '.todo', function(){
    // console.log('clicked');
    $(this).toggleClass('checked');
});
