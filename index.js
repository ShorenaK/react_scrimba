
// renders something on the screene
// what should I place it on the screen and where should I put it. 
// ReactDOM.render(<h1>Hello, everyone!</h1>, 
// document.getElementById("root"))


const nav = (
    <nav>
  <h1> www.shorenak.com</h1>
     <ul>
        <li>price</li>
        <li>about</li>
        <li>contact</li>
     </ul>
     <p>anotherweb</p>
    </nav>
)

ReactDOM.render(
    nav, document.getElementById("root")
)


