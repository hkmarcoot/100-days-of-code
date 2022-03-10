import React, { useState, useEffect } from "react";
import "./Content.css";
import { API_URL } from "../Config";

//import Header from "../Header";
import Sidebar from "../Sidebar";
import useLocalStorage from "use-local-storage";
import DarkLightSwitch from "../DarkLightSwitch";
import SubHeading from "../SubHeading";
import AddPostsButton from "../AddPostsButton";
// import Posts from '../Posts';
import AddAnItemForm from "../AddAnItemForm";
import AddAnEditForm from "../AddAnEditForm";
import Posts from "../Posts";

function Content() {
  const [weeks, setWeeks] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [posts, setPosts] = useState([]);
  const [weekId, setWeekId] = useState(0);
  const [weekTopic, setWeekTopic] = useState("");

  const [showAAIFModal, setShowAAIFModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  useEffect(() => {
    async function getWeeks() {
      await fetch(`${API_URL}/weeks`)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for for that resourse");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setWeeks(data.payload);
          setError(null);
        })
        .catch((err) => {
          //auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }
    getWeeks();
  }, []);

  useEffect(() => {
    async function getPosts() {
      await fetch(`${API_URL}/weeks/${weekId}/resources`)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for for that resourse");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setPosts(data.payload);
          setError(null);
        })
        .catch((err) => {
          //auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }
    getPosts();
  }, [weekId]);

  // getWeeks();
  // console.log(weekOne);

  // useEffect

  //================================ There are some Sidebar values =====================================
  function handleWeekId(id, topic) {
    setWeekId(id);
    setWeekTopic(topic);
  }
  const [aaif, setAaif] = useState();
  // const [button, setButton] = useState(true);

  // function handleFormPage() {
  // 	if (button) {
  // 		setAaif(<AddAnItemForm onSubmit={onSubmit} button={button} />);
  // 		setButton(!button);
  // 	} else {
  // 		setAaif();
  // 		setButton(!button);
  // 	}
  // }

  //===================================== Delete Handler ===========================================

  async function handleDelete(id, week) {
    await fetch(`${API_URL}/weeks/${week}/resources/${id}`, {
      method: "DELETE",
    });
    setStatus("Delete successful!");
    console.log(status);
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  }
  // console.log(status);

  // [START] TEMPORARY FIX TO RENEDER WEEK 1 ON MOUNT
  useEffect(() => {
    handleWeekId(1, "Foundations");
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/weeks/1/resources`)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for for that resourse");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setPosts(data.payload);
        setError(null);
      })
      .catch((err) => {
        //auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });
  }, []);
  // [END] TEMPORARY FIX TO RENEDER WEEK 1 ON MOUNT

  function onSubmit(language, link, summary, setLanguage, setLink, setSummary) {
    const templatePost = {
      tags: language,
      summary: summary,
      link: link,
      isComplete: false,
    };
    //===========================================
    // setTrigger(!trigger);
    //===========================================
    setAaif();

    fetch(`${API_URL}/weeks/${weekId}/resources`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(templatePost),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for for that resourse");
        }
        return res.json();
      })
      .catch((err) => {
        //auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });

    setLanguage("");
    setLink("");
    setSummary("");

    setTimeout(() => {
      fetch(`${API_URL}/weeks/${weekId}/resources`)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for for that resourse");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setPosts(data.payload);
          setError(null);
        })
        .catch((err) => {
          //auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 500);
  }

  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=- EDIT SUBMIT =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function onEditSubmit(postId, language, link, summary) {
    const templateEditedPost = {
      id: postId,
      tags: language,
      summary: summary,
      link: link,
    };

    fetch(`${API_URL}/weeks/${weekId}/resources/${postId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(templateEditedPost),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for for that resourse");
        }
        return res.json();
      })
      .catch((err) => {
        //auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });

    setTimeout(() => {
      fetch(`${API_URL}/weeks/${weekId}/resources`)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for for that resourse");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setPosts(data.payload);
          setError(null);
        })
        .catch((err) => {
          //auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 500);
  }

  const [editPost, setEditPost] = useState(null);

  function handleEditMode(id) {
    const post = posts.filter((item) => item.id === id);
    setEditPost(post);
    setShowEditModal(true);
  }
  // console.log(id);

  // console.log(editPost);

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
  //=-=-=-=-=--=-=-=-=-=-=-=-=-=-= THEME TOGGLE CONTROLLER -=-=-=-=--=-=-=-=-=-=-=-=-=-=
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* {newData && <Post data={newData}/>} */}

      {/* /--------------------Header is relocated to a separate page------------------/ */}

      {/* <Header /> */}

      {/* /---------------------------------Header End---------------------------------/ */}
      <Sidebar
        id="sidebar"
        weeks={weeks}
        handleWeekId={handleWeekId}
        theme={theme}
      />

      <div className="main">
        <div className="mid">
          <DarkLightSwitch onClick={switchTheme} />
          {/* //Title top left  */}
          <SubHeading weekId={weekId} weekTopic={weekTopic} />
          {aaif}
          <AddPostsButton
            handleFormPage={() => setShowAAIFModal(true)}
            // button={button}
            weekId={weekId}
          />
        </div>

        {posts ? (
          <Posts
            posts={posts}
            handleDelete={handleDelete}
            handleEditMode={handleEditMode}
          />
        ) : (
          <div>Loading...</div>
        )}

        <AddAnItemForm
          onSubmit={onSubmit}
          showModal={showAAIFModal}
          setShowModal={setShowAAIFModal}
        />
        <AddAnEditForm
          editPost={editPost}
          onEditSubmit={onEditSubmit}
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
        />
      </div>
    </div>
  );
}

export default Content;
