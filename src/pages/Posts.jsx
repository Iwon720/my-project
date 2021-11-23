import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList";
import MyModal from "../components/MyModal/MyModal";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Posts = () => {
  const trigger = useRef(null);
  const observer = useRef(null);
  const [loadData, setLoadData] = useState(false);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  const [page, setPage] = useState(1);
  const pageCount = 100 / limit;
  const pageChange = (page) => {
    setPage(page.selected + 1);
  };
  const fetchPosts = async () => {
    setLoadData(true);
    const postsFetched = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    setPosts([...posts, ...postsFetched.data]);
    setLoadData(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    if (loadData) return;
    if (observer.current) observer.current.disconnect();
    const callback = function (entries) {
      if (entries[0].isIntersecting) {
        console.log(entries);
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(trigger.current);
  }, [loadData]);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
  });

  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const onChange = (e) => {
    if (e.target.id == "name") {
      setPost({ ...post, title: e.target.value });
    } else if (e.target.id == "phone") {
      setPost({ ...post, body: e.target.value });
    } else {
      setPost({ ...post, email: e.target.value });
    }
  };

  const addPost = () => {
    setPosts([...posts, post]);
    setPost({
      userId: "",
      id: "",
      title: "",
      body: "",
    });
  };

  const addUser = () => {
    const id = Math.random() * 1;
    setUser({ ...user, id: id });
    setUsers([...users, user]);
    setUser({
      name: "",
      phone: "",
      email: "",
    });
  };

  const removePost = (id) => {
    const confirm = window.confirm(
      "Прям удалить? Ты прям уверен в своей жизни настолько, чтобы удалить это?"
    );
    if (confirm == true) setPosts(posts.filter((post) => post.id !== id)); //для проверки на удаление
  };

  const clear = () => {
    setPost({ title: "", body: "", email: "" });
  };

  const [showModal, setshowModal] = useState(false);
  return (
    <div className="container">
      <h3>Posts</h3>

      <MyModal visible={showModal} setVisible={setshowModal}>
        {
          <>
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input
                id="name"
                type="text"
                className="validate"
                value={post.title}
                placeholder="Enter Title"
                onChange={onChange}
              />
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">body</i>
              <input
                id="phone"
                type="tel"
                value={post.body}
                className="validate"
                placeholder="Enter Body"
                onChange={onChange}
              />
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix">email</i>
              <input
                id="email"
                type="email"
                value={post.email}
                className="validate"
                placeholder="Enter E-mail"
                onChange={onChange}
              />
            </div>
            <a
              className="waves-effect waves-light btn m-1 deep-orange lighten-1"
              onClick={() => addPost()}
            >
              Add
            </a>
            <a
              className="waves-effect waves-light right btn m-1 deep-orange lighten-1"
              onClick={() => clear()}
            >
              Clear
            </a>
          </>
        }
      </MyModal>
      <div className="row m-1">
        <div className="col s4">
          <a
            className="waves-effect waves-light btn deep-orange lighten-1"
            onClick={() => setshowModal(true)}
          >
            Add post
          </a>
        </div>
        <div className="col s8"></div>
      </div>
      {loading ? (
        <loader
          className="center"
          type="Puff"
          color="#ee6e73"
          heigth={100}
          width={100}
        />
      ) : (
        <PostList search see deletePost={removePost}>
          {posts}
        </PostList>
      )}
      <div className="" ref={trigger}>
        I'm trigger
      </div>
      {/* <ReactPaginate
        className={"pagination"}
        activeClassName={"active"}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={pageChange}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </div>
  );
};

export default Posts;
