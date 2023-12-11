// define the variables used
$input = $("input");
// console.log($input);
$todos = $(".todos");
// console.log($todos);
const $modal = $('<div>').addClass('modal');

// store the button in a variable
$button = $("button");
// console.log($button);

// Event listener for the button
$button.on("click", (event) => {
  const val = $input.val();
  const $todo = $("<li>").addClass("todo").text(val);
  const $trash = $("<span>").addClass("trash");
  const $edit = $("<span>").addClass("edit");
  $todo.append($trash, $edit);
  $todos.append($todo);
  $input.val("");
});

// event to remove todos
$(".todos").on("click", ".trash", function () {
  $(this).parent(".todo").fadeOut(300);
});

// event to add checked
$(".todos").on("click", ".todo", function () {
  // console.log('clicked');
  $(this).toggleClass("checked");
});



