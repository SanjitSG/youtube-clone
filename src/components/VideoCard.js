import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="w-72 p-3 m-2 border rounded-sm shadow-md">
      <img
        src={thumbnails.medium.url}
        alt={title}
      />
      <ul>
        <li className="py-2 font-semibold text-sm">{title}</li>
        <li className="text-xs text-gray-400">{channelTitle}</li>
        <li className="text-xs text-gray-400">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
