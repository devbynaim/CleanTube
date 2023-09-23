const formatYoutubeData = (data) => {
  let instialLists;
  const items = data.map((item) => {
    const {
      contentDetails: { videoId },
      snippet,
    } = item;
    const {title,description,position,thumbnails} = snippet
    if (!instialLists) {
      const { channelId, channelTitle, playlistId } = snippet;
      instialLists = { channelId, channelTitle, playlistId, running: 1 };
    }
    return {
        title,
        description,
        position,
        videoId,
        thumbnail:thumbnails.medium
        
    }
  });
  instialLists.items = items
  return instialLists
};

export default formatYoutubeData;
