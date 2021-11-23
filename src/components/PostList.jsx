import React, {useEffect, useMemo, useState} from 'react'

const PostList = (props) => {
  const [filter, setFilter] = useState(props.children)

  useEffect(()=>{
    setFilter(props.children)
  },[props.children])

const getSearch = () => {
  if(filter) {
    return filter
  }
  return props.chidren
}

const postSearch = getSearch();

    const onChange = (e) => {
      setFilter(props.children.filter((post) => post.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    return (
        <>
      {props.search &&<div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <textarea id="icon_prefix2" className="materialize-textarea" onChange={onChange}></textarea>

        </div>
      </div>}

<table>      
        <tbody> 
        {props.children && filter.map((post)=>
        <div class="col s12" key={post.id}>
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                <span class="card-title">{post.title}</span>
                <p>{post.name}{post.body}
                </p>
                </div>
                <div class="card-action">
                <a>{post.email}</a>
                <i className="material-icons"
                onClick={()=>props.deletePost(post.id)}>delete</i>
                </div>
            </div>
        </div> 
        )}

        
        </tbody>

      </table>
        </>
    )
}

export default PostList;
