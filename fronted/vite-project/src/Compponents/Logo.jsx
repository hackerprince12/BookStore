import React from "react";

const Logo = () => {
  return (
    <>
      <div>
        <div className="h-[40px] cursor-pointer hover:border-green-500 hover:border-2 rounded-[50%]  w-[40px] avatar online">
          <div className="w-24 rounded-full">
            <img src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0" />
          </div>
        </div>
        {/* <div className="avatar offline">
          <div className="w-24 rounded-full">
            <img src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"  />
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Logo;
