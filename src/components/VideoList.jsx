//DB:tests indicate this is being set up properly.  But, since nothing is rendering, it seems that it is not being passed the correct data.  deleting the exampleVideoData from app.jsx does nothing to the tests or to what is being rendered on the page.
var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map(video => 
      <VideoListEntry  video={video} onTitleClick={props.onTitleClick} />
      )}
  </div>
);



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
