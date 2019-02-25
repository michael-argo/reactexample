import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();//stop the event

        const post = {
            title: this.state.title,
            body: this.state.body
        };
        //call action below

        this.props.createPost(post);
    }

  render() {
    return (
      <div>
        <h1>
            Add Post
        </h1>
        <form id="newPostForm" onSubmit={this.onSubmit}>
            <div>
                <label id="newFormTitle">
                    Title:
                </label><br/>
                <input type="text" 
                name="title" onChange={this.onChange} value={this.state.title}/>
            </div>
            <div>
                <label id="newFormBody">
                    Body:
                </label><br/>
                <textarea name="body" onChange={this.onChange} value={this.state.body}/>
            </div>
            <br/>
            <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform);
