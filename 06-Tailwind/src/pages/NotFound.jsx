import React from 'react';

const NotFoundPage = () => {
  const handleBackClick = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  // Inline styles for font-face
  const fontFaceStyle = `
    @font-face {
      font-family: Shabnam;
      src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot");
      src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.eot?#iefix") format("embedded-opentype"), 
           url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff") format("woff"), 
           url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.woff2") format("woff2"), 
           url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam-Bold.ttf") format("truetype");
      font-weight: bold;
    }
    @font-face {
      font-family: Shabnam;
      src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot");
      src: url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.eot?#iefix") format("embedded-opentype"), 
           url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff") format("woff"), 
           url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.woff2") format("woff2"), 
           url("https://cdn.rawgit.com/ahmedhosna95/upload/ba6564f8/fonts/Shabnam/Shabnam.ttf") format("truetype");
      font-weight: normal;
    }
  `;

  return (
    <>
      <style>{fontFaceStyle}</style>
      
      <div 
        id="oopss" 
        className="fixed left-0 top-0 w-full h-full z-50"
        style={{ background: 'linear-gradient(-45deg, #fff300, #efe400)' }}
      >
        <div 
          id="error-text" 
          className="flex flex-col items-center font-sans text-black text-center px-4"
          style={{ 
            fontFamily: "'Shabnam', Tahoma, sans-serif", 
            direction: 'rtl', 
            lineHeight: '1.5em',
            height: '100%',
            justifyContent: 'center'
          }}
        >
          <img 
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" 
            alt="404 Error" 
            className="mb-5 h-64 md:h-80"
          />
          
          <span className="relative text-4xl md:text-5xl font-black mb-8 md:mb-12">
            404 PAGE
          </span>
          
          <p className="text-lg md:text-xl my-5 md:my-7">
            The page you were looking for could not be found
          </p>
          
          <p className="text-sm md:text-base mb-4">
            ... Back to previous page
          </p>
          
          <button
            onClick={handleBackClick}
            className="bg-white text-black text-xl md:text-2xl font-black 
                      no-underline mx-auto mt-6 py-3 px-8 md:px-12 rounded-full 
                      cursor-pointer hover:-translate-y-3 transition-all duration-300"
            style={{
              boxShadow: '0 20px 70px 4px rgba(0, 0, 0, 0.1), inset 7px 33px 0 0px #fff300'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 35px 90px 4px rgba(0, 0, 0, 0.3), inset 0px 0 0 3px #000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 70px 4px rgba(0, 0, 0, 0.1), inset 7px 33px 0 0px #fff300';
            }}
          >
            ... Back to previous page
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;