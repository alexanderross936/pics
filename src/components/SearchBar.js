import React from 'react';

class SearchBar extends React.Component {

    onInputChange(event){
        console.log(event.target.value)
    }


    render(){
        return (<div className="ui segment">
            <form>
                <label>Image Search</label>
                <input type="text" onChange={this.onInputChange}/>
            </form>
        </div>)
    }
}

export default SearchBar;