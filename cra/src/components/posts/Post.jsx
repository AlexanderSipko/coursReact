export function Post(props) {
    return <h2 onClick={ () => props.cbHandler(props.id) } key={ props.id }>{ props.name }</h2>
}