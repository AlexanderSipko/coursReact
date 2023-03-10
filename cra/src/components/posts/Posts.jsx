import { Post } from './Post'

export function Posts(props) {
    return <div>
        <h2>This node created with nested components</h2>
        { props.posts.map( post => (
            <Post key={post.id } id={ post.id } name={ post.name } cbHandler={ props.cbHandler }/>
        ))}
    </div>
}