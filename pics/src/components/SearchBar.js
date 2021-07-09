import React from 'react';

class SearchBar extends React.Component {
    // controlled component
    state = {term:''};
    // onInputChange (event) {
    //     console.log(event.target.value);
    // }
//  prevent default refresh whole browser when submit the form
    // onFormSubmit (event) {
    //     event.preventDefault();
    // }
    //  we can bind on submit using arrow function
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };


    render () {
        return (
            <div className="ui segment">
                <form  onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value= {this.state.term} onChange= {e => this.setState ({term: e.target.value})}  />
                    </div>
                
                </form>
            </div>
        )
    }
}

export default SearchBar;
