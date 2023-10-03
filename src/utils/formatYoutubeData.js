const formatYoutubeData = (instialLists,data) => {
  const items = data.map((item) => {
    const {
      contentDetails: { videoId },
      snippet,
    } = item;
    const {title,description,position,thumbnails} = snippet
    if (!instialLists.channelId) {
      const { channelId, channelTitle, playlistId } = snippet;
      instialLists = {...instialLists, channelId, channelTitle, playlistId, running: 0,isFavorite:false };
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
