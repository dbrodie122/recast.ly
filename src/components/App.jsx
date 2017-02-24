class App extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  getYouTubeVideos(query) {
    const options = {
      key: this.props.API_KEY,
      query: query
    }
    this.props.searchYouTube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  onTitleClick (video) {
    console.log("OMG")
    this.setState({currentVideo: video});
  }
  //We need to grab the exampleVideoData that is associated with the element that was clicked.
	
  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
        {/*originally videos={exampleVideoData}*/}
          <VideoList  
          videos={this.state.videos} 
          onTitleClick={this.onTitleClick.bind(this)}
          />
        }
        </div>
      </div>
    );
  }   
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



