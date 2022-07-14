// console.log('HEY');
//import videosArray from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
//console.log(videosArray);


// var VideoList = (props) => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );

// var VideoArray = () => (
//   <div>
//     <VideoArray videos={videosArray}/>
//   </div>
// );


var VideoList = (props) => (
  <div className="video-list" onClick= {props.clickFun}>
    {props.videos.map((video, index) =>
      <VideoListEntry key={index} video={video} />)}
  </div>
);

export default VideoList;
