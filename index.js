
// renders something on the screene
// what should I place it on the screen and where should I put it. 
// ReactDOM.render(<h1>Hello, everyone!</h1>, 
// document.getElementById("root"))


// const nav = (
//     <nav>
//   <h1> www.shorenak.com</h1>
//      <ul>
//         <li>price</li>
//         <li>about</li>
//         <li>contact</li>
//      </ul>
//      <p>anotherweb</p>
//     </nav>
// )

// ReactDOM.render(
//     nav, document.getElementById("root")
// )



function Page() {
    return (
        <div> 
        <header>
            <nav>
                <img src="./react-logo.png" width="20px"/ > 
            </nav>
        </header>
        <h1> Reasons
  I'm excited to learn React </h1>
        <ol>
            <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
            if I know React</li>
        </ol>
        <footer> <small>© 20xx last name development. All rights reserved.</small>  </footer>
        </div>
    )
}


ReactDOM.render( Page, document.getElementById("root"))