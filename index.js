// 1

let str = "aaa@bbb@ccc"
console.log(
    str.replace('@', '!')
        .replace('@', '!')
)



// 2
let store = "HELLOWORLD"

store = store.slice(0, 1).toLocaleUpperCase() +
    store.slice(1, 5).toLowerCase() + " " + store.slice(5, 11).toLocaleLowerCase()


console.log(
    store
)




// 3
let text = 'HELLO, it is HTML'
console.log(
    text.replace('HTML', 'not JS')
)



// 4
let a = "alex"
console.log(
    a[0].toUpperCase() + a.slice(1)
)



// 5
console.log(
    Math.floor(0)
)

// 6

let srt = "Lex Luter has a big suit"

console.log(
    srt[srt.search('a')].toUpperCase() +
    srt[srt.search('L')].toLowerCase() +
    srt[srt.search('e')] +
    srt[srt.search('x')]
);