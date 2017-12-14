import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyDAomQiSziT9dv91C6fMcx2oUXEfaNPH18";
//create react component. this component should produce html

class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('halo');
    }
    videoSearch(term){
                YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo : videos[0]
             })
        });
    }
    render(){
        const videoSearch = _.debounce((term)=> { this.videoSearch(term)}, 300);
    return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
            onVideoSelect={selectedVideo =>this.setState({selectedVideo}) }
            videos={this.state.videos}/>
            
            
        </div>
    );
    }
}



// take the component generated html and put it on page
ReactDOM.render(<App />, document.querySelector('.container'));
=======
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
>>>>>>> parent of b3b54a4... first commit
