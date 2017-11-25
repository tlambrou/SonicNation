import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class Search extends Component {

  constructor() {
    super();

    this.state = {
      search: "",
    };
  }

  render() {
    return (
      <div className="search-component">
        <TextField value={this.state.search}
          hintText="Type something"
          floatingLabelText="Search"
          onChange={(e) => this.changeSearch(e)}
          />
        <p><span>Here is your search... {this.state.search}</span></p>
      </div>
    );
  }

  changeSearch(event) {
    var text = event.target.value;

    this.setState({
      search: text
    });
  }
}
