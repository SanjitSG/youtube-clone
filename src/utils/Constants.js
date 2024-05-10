export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_API_KEY;

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const SEARCH_API =
//   "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&key=" +
//   process.env.REACT_APP_API_KEY +
//   "&q=";
