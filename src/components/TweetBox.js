import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import './TweetBox.css';

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
          <input type='text' placeholder="What's happening?" />
        </div>
        <input
          className='tweetBox__imageInput'
          type='text'
          placeholder='Image Url'
        />
        <Button className='tweetBox__tweeButton'>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
