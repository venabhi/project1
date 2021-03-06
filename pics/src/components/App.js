import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageLists'

class App extends React.Component {
    state = {images: [] }



    onSearchSubmit = async (term)  => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID onpVLSGJfgJ5jirDg6ofRZsB3aRmxLlMq8RVzy8HAc8'
            }
        }
        );
        // console.log(response.data.results);
        this.setState({images: response.data.results })
    }
    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList  images= {this.state.images}/>
            </div>
        );
    }
}

export default App;
