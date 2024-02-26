const heading1 = React.createElement("h1", {
    id: "title"
}, "heading1 ");
const heading2 = React.createElement("h1", {
    id: "title"
}, "heading2 ");

const container = React.createElement("div", { id: "container" }, [heading1, heading2]);
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(container);
