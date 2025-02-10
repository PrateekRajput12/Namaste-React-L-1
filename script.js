// let root = document.getElementById("root")

// let h1 = document.createElement("h1")
// h1.innerText = "Namaste"

// root.appendChild(h1)

const h1 = React.createElement("h1", {}, "Namaste React")
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(h1)

