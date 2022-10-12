export function Post (props){
  return (
    <>
      <h1>{props.author}</h1>
      <div>
      {props.content}
      </div>
    </>
  )
}