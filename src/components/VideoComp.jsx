import React from 'react';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    description: 'This is the first video.',
    url: 'https://drive.google.com/file/d/1yf987wZoKeChAwPkoUFLzghk12oyf-Sn/view?usp=sharing',
  },
//   {
//     id: 2,
//     title: 'Video 2',
//     description: 'This is the second video.',
//     url: 'https://drive.google.com/file/d/1yf987wZoKeChAwPkoUFLzghk12oyf-Sn/view?usp=sharing',
//   },
  // Add more videos here
];

const VideoComp = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white h-[500px] w-[700px] shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {/* <div className="aspect-w-16 aspect-h-9"> */}
              <iframe
                src="https://drive.google.com/file/d/1peNWA3Ld6Nld3QrF4rkWnIi4UWFFVf62/preview"
                title={video.title}
                className="w-full h-full"
                allow="autoplay;"
                allowFullScreen
              ></iframe>
              {/* <iframe
               src="https://drive.google.com/file/d/1yf987wZoKeChAwPkoUFLzghk12oyf-Sn/preview"
                width="640" height="480" allow="autoplay"></iframe> */}
            {/* </div> */}
            {/* <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{video.title}</h2>
              <p className="text-gray-600 mt-2">{video.description}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComp;
