// console.log('HEY');
import videosArray from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';


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
  <div className="video-list">
    {props.exampleVideoData.map((video) =>
      <VideoListEntry video={video} />)}
  </div>
);

export default VideoList;
