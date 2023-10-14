function something(greet, name) {
    function sayHi() {
        if (name) {
            return name.split(' ')[1]
        }
    }
    var message = greet + ' ' + sayHi()
    console.log(message)
}

something("Good Morning", "Tawheed Shimul")


// var a = 'hello dear'
// console.log(a.split()[0])