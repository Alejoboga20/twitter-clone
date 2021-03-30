import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase';
import '../styles/TweetBox.css';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Alejo Boga',
      username: 'aboga',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://miro.medium.com/max/554/1*Ld1KM2WSfJ9YQ4oeRf7q4Q.jpeg'
    });
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://miro.medium.com/max/554/1*Ld1KM2WSfJ9YQ4oeRf7q4Q.jpeg' />
          <input
            type='text'
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className='tweetBox__imageInput'
          type='text'
          placeholder='Optional: Image Url'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweeButton'
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
