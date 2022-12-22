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
    const shareLink = "https://common-coredev-eks-wlpc.cloud.synchronoss.net/web/app/share/invite/bBUkTKUnmP"
    const shareUrl = "https://sai-rohit17.github.io/cloud-preview/"
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
      url={shareUrl}
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
