import React, { useState } from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
const [tweetMessage , setTweetMessage] =  useState("");
const [tweetImage , setTweetImage] =  useState("");

function setChange(event) {
 const newText = event.target.value; 
 setTweetMessage(newText);
}

function handleImage(event) {
    const newText = event.target.value; 
    setTweetImage(newText);
   }

   function handleButton(event) {
    event.preventDefault(); 
   
    db.collection('posts').add({
        displayName: "jay" , 
    username: "jay.taylor",
    verified: true,
    text: tweetMessage,
    image:  tweetImage, 
    avatar: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
    });
    setTweetImage("");
    setTweetMessage("");
   }


    return (
        <div className="tweetBox">
         <form> 
         <div className="tweetBox_input"  >
         <Avatar src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" /> 
         <input onChange={setChange} value={tweetMessage} placeholder="What's happening?" type="text" /> 
         </div>
         <input onChange={handleImage} className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL "
           type="text" value={tweetImage} /> 
           
         <Button type="submit" onClick={handleButton} className="tweetBox_tweetButton">Tweet</Button>
         </form>

        </div>
    )
}

export default TweetBox;