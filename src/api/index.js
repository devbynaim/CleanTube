import axios from "axios";
import formatYoutubeData from "../utils/formatYoutubeData";

const fatchPlaylists = async (playlistId, pageToken = "", data = []) => {
  const baseUrl = ` https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${
    import.meta.env.VITE_APIKEY
  }&pageToken=${pageToken}`;
  const {
    data: { nextPageToken, items },
  } = await axios(baseUrl);
  data = [ ...data, ...items ];
  if (nextPageToken) {
    data = fatchPlaylists(playlistId, nextPageToken, data);
  }
  console.log(data);
  return data
};
const getPlaylists = async (playlistId)=>{
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${import.meta.env.VITE_APIKEY}&part=snippet&id=${playlistId}`;
  const {data:{items}} = await axios(apiUrl)
  const {title,thumbnails:{medium,high},description} = items[0].snippet
  return (formatYoutubeData({title,description,thumbnail:{medium,high}}, await fatchPlaylists(playlistId)))
}
export default getPlaylists;
