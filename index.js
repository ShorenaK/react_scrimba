
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

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
                <ul className="nav-items"> 
                <li>Price</li> 
                <li>About</li>
                <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(Page , document.getElementById("root"))

