function Element(props) {
    return ( <p>{props.content}</p> )
}

ReactDOM.render(
    <Element content="A Webpack Component 11" />,
    document.getElementById("app")
)
