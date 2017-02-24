class App extends React.Component {
	constructor(props) {
		super(props);
    this.state = {
      playing: exampleVideoData[0]
    };
  }

  onTitleClick () {
    console.log("OMG")
    this.setState({playing: });
  }
  //We need to grab the exampleVideoData that is associated with the element that was clicked.
	
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={}/>
        </div>
        <div className="col-md-5">
          <VideoList  videos={exampleVideoData} onTitleClick={this.onTitleClick}/>
        </div>
      </div>
    );
  }   
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



