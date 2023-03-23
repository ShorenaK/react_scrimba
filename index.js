
// renders something on the screene
// what should I place it on the screen and where should I put it. 
// ReactDOM.render(<h1>Hello, everyone!</h1>, 
// document.getElementById("root"))

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


const nav = (
    <nav>
  <h1> www.shorenak.com</h1>
     <ul>
        <li>price</li>
        <li>about</li>
        <li>contact</li>
     </ul>
    </nav>
)

ReactDOM.render(
    nav, document.getElementById("root")
)

// {type: "div", key: null, ref: null, 
// props: {children: [{type: "h1", key: null, ref: null, 
// props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}},
// {type: "p", key: null, ref: null, 
// props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}