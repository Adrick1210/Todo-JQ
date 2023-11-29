// define the variables used
$input = $('input');
// console.log($input);
$todos = $('.todos');
// console.log($todos);

// store the button in a variable
$button = $('button');
// console.log($button);

// Event listener for the button
$button.on('click', (event) => {
    // console.log('clicked')
    const val = $input.val();
    // console.log(val)
    const $todo = $('<li>');
    $todo.addClass('todo').text(val);
    $todos.append($todo);
    $input.val('');
})