import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share';


function App() {
    const shareLink = "https://sportshub.cbsistatic.com/i/2022/05/09/7e187fc9-2f31-4eb3-92ba-bf60e4fa35a1/avatar-2-teaser-trailer-images-jake-sulai-sam-worthington.jpg"
    
    return (
    <div>
      <h1>share ur image</h1>
      <FacebookShareButton
      url={shareLink}
      quote={'India is my country'}
      hashtag={'#India'}
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton
      url={shareLink}
      quote={'India is my country'}
      hashtag={'#India'}
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <TwitterShareButton
      url={shareLink}
      quote={'India is my country'}
      hashtag={'India'}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <TelegramShareButton
      url={shareLink}
      quote={'India is my country'}
      >
        <TelegramIcon size={40} round={true} />
      </TelegramShareButton>
    </div>
  );
}

export default App;
