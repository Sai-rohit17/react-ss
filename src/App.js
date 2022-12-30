import React from 'react';
//import Helmet from "react-helmet";
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
        {/* <Helmet>
        <meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@DuvvuriRohit" />
<meta name="twitter:creator" content="@DuvvuriRohit" />
<meta property="og:url" content="https://sportshub.cbsistatic.com/i/2022/05/09/7e187fc9-2f31-4eb3-92ba-bf60e4fa35a1/avatar-2-teaser-trailer-images-jake-sulai-sam-worthington.jpg" />
<meta property="og:title" content="A Twitter for My Sister" />
<meta property="og:description" content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling." />
<meta property="og:image" content="https://sportshub.cbsistatic.com/i/2022/05/09/7e187fc9-2f31-4eb3-92ba-bf60e4fa35a1/avatar-2-teaser-trailer-images-jake-sulai-sam-worthington.jpg" />
          </Helmet> */}
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
