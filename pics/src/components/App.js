import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID onpVLSGJfgJ5jirDg6ofRZsB3aRmxLlMq8RVzy8HAc8'
            }
        }
        );
        // console.log(term);
    }
    render () {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
