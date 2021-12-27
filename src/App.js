import React from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import NewMemeForm from "./NewMemeForm";
import Meme from "./Meme";


function App() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();

  function addMeme(newMeme) {
    dispatch({type: "ADD_MEME", meme: newMeme})
  }
  
  function deleteMeme(id) {
    dispatch({type: "DELETE_MEME", id})
  }
  return (
    <div className="App">


    </div>
  );
}

export default App;
