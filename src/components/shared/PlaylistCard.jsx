const PlaylistCard = ({title,thumbnail}) => {
  return (
    <div>
      <img src={thumbnail.url} alt=""/>
      <h1>{title}</h1>
    </div>
  )
}

export default PlaylistCard