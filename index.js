
// renders something on the screene
// what should I place it on the screen and where should I put it. 
ReactDOM.render(<h1>Hello, everyone!</h1>, 
document.getElementById("root"))

const h1 = document.createElement("h1")
h1.textContent = "hello world"
h1.className = "header"
document.getElementById("div").append(h1)

const page =(
    <div> 
<h1 className='header'>This is JSX </h1>
<p> This is a paragraph</p>
    </div>
)
console.log(page)
// what, where 
ReactDOM.render(page, 
document.getElementById("root"))

// {type: "div", key: null, ref: null, 
// props: {children: [{type: "h1", key: null, ref: null, 
// props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}},
// {type: "p", key: null, ref: null, 
// props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}