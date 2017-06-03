'use strict'
var fs = require('fs')
var args = process.argv.slice(2)
var command = args[0]
    //create todo file if not exsting yet
fs.open('toDoList.txt', 'r', (err, fd) => {
    if (err) {
        if (err.code === 'ENOENT') { // 'ENOENT' => the file not exsting
            fs.writeFileSync('toDoList.txt', '')
            return
        }
        throw err
    }
});
// check the todo's in case add or remove
function check() {
    if (!args[1]) {
        console.log('you still need to write what you want to add or which task number to remove')
    }
}
// show help file function
function showHelp() {
    fs.readFile('help.txt', 'utf-8', function(error, data) {
        if (error) {
            return console.log('the help file could not be displayed')
        } else console.log('done ' + '\n', data)
    });
}
//console help in case no arg after the command
var help = () => { process.stdout.write(`
	commands:\n
	<help>: to get help\n
	<add> <action>: to be added to todo list\n
	<list> : to show todo list\n
	<remove> <action>: to remove from todo list \n
	<reset>: to reset todo list  \n\n\n\n
	`) }


// show to do list
function listTodos() {
    fs.readFile('toDoList.txt', 'utf-8', function(error, data) {
        if (error) {
            console.error(error)
        } else if (data === "" || null) {

            console.log('You have no tasks to do!!')
        } else {
            let items = data.split(/\n/);

            for (var j = 0; j < items.length - 1; j++) {

                console.log((j + 1) + `-${items[j]}`)
            }
        }
    })

}

function addItem() {
    var toDosItem = args.slice(1).join(' ').trim()
    fs.appendFile('toDoList.txt', toDosItem + '\n', function(error) {
        if (error) {
            console.log(error)
            return;
        }
        console.log(`task: ${toDosItem} added successfully `)
    });
}
// reset the list by rewrite ''
function resetToDo() {
    fs.writeFile('toDoList.txt', '', function(err) {
        if (err) throw err;
        console.log('reset done')
    })
}

function removeItem() {

    fs.readFile('toDoList.txt', 'utf-8', function(error, data) {
        if (error) {

            console.log(error)
        }
        var i = parseInt(args[1]) // user data
        var x = parseInt(i) // to check if valid number or not
        var toDosArray = data.split('\n')
        toDosArray.splice(i - 1, 1)
        var numberOfTasks = toDosArray.length // to check the number if exsting or not
        if (typeof x === "number" && !isNaN(x) && i <= (numberOfTasks + 1) && numberOfTasks != 0) {
            var numberOfTasks = toDosArray.length // to check the number if exsting or not
            var updatedList = toDosArray.join('\n')
            fs.writeFile('toDoList.txt', updatedList)
            console.log(`the Item ${toDosArray.splice(i - 1, 1)}  is removed successfully`)
            console.log(`you still have  ${numberOfTasks} tasks/task to do`)
        } else {
            console.log("you must enter a valid and exsting number ", i, toDosArray.length, toDosArray) // in case not valid data
        }
    })
}


// 
switch (command) {
    case 'help':
        showHelp()
        break

    case 'add':
        check()
        addItem()
        break

    case 'list':
        listTodos()
        break

    case 'remove':
        check()
        removeItem()
        break

    case 'reset':
        resetToDo()
        break

    default:
        console.log('command not found')
        help()
}
