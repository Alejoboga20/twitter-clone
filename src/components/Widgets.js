import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widget__searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={'858551177860055040'} />
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='cleverqazi'
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={'https://facebook.com/cleverprogrammer'}
          options={{ text: 'React is awsome', via: 'cleverqazi' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
