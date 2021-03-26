import React from 'react';
import { Avatar } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './Post.css';

const Post = ({ avatar, displayName, username, verified, text, image }) => {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Header 3
              <span className='post__headerSpecial'>
                <VerifiedUserIcon className='post__badge' /> @alejoboga
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>Twitter clone with react</p>
          </div>
        </div>
        <img
          src='https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif'
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small' />
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  );
};

export default Post;
