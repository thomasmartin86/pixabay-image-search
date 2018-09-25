import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../image-results/ImageResults';

class Search extends Component {
  state = {
    searchText: '',
    amount: 10,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '8761127-15c354fd40a23de8d36bfe25d',
    images: []
  };

  /* set state then make axios request */
  onTextChange = e => {
    const val = e.target.value;
    const { apiUrl, apiKey, searchText, amount } = this.state;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => {
    this.setState({ amount: value }, () => {});
  };

  render() {
    const { searchText, amount } = this.state;
    return (
      <div>
        <TextField
          name="searchText"
          value={searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for images"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          value={amount}
          floatingLabelText="# of images"
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={25} primaryText="25" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
