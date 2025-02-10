// let root = document.getElementById("root")

// let h1 = document.createElement("h1")
// h1.innerText = "Namaste"

// root.appendChild(h1)

const content = React.createElement("div", {}, [
    React.createElement("h1", {}, "hlo"),
    React.createElement("h2", {}, "hlo2")

])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(content)

