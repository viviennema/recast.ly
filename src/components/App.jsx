
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';



class App extends React.Component {
  constructor (props) {
    super (props),
    this.state = {
      videosArray: [],
      videoPlaying: {},
      query: 'Hack Reactor',
    };
  }

  componentDidMount() {
    searchYouTube( this.state.query, (data) => {
      this.setState({
        videoPlaying: data[0],
        videosArray: data
      });
    });
  }

  search(string) {
    searchYouTube(string, (data) => {
      this.setState({
        videoPlaying: data[0],
        videosArray: data
      });
    });
  }

  onTitleClick(event) {
    for (var i = 0; i < this.state.videosArray.length; i++) {
      if ((event.target.innerText) === this.state.videosArray[i].snippet.title) {
        this.setState({
          videoPlaying: this.state.videosArray[i]
        });
      }
    }
  }

  // onQueryChange(event) {
  //   console.log(event.target.innerText);
  //   if (event.target.innerText !== '' && event.target.innerText !== this.state.query) {
  //     this.setState({
  //       query: event.target.innerText
  //     });
  //     searchYouTube(event.target.innerText, (data) => {
  //       this.setState({
  //         videoPlaying: data[0],
  //         videoArray: data
  //       });
  //     });
  //   }
  // }

  // onButtonClick(event) {
  //   console.log(event);

  // }


  render () {
    var loading = <div></div>;
    var final = (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.search.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying}/>
          </div>
          <div className="col-md-5" onClick={this.onTitleClick.bind(this)}>
            <VideoList videos={this.state.videosArray} clickFun={this.onTitleClick.bind(this)} />
          </div>
        </div>
      </div>
    );

    if (this.state.videosArray.length < 1) {
      return loading;
    }
    return final;
  }

}


// console.log(exampleVideoData);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//ReactDOM.render(<App />, document.getElementById('app'));
export default App;