import _ from 'lodash';
import React,  { Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
      this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
            {post.title}
        </li>);
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}
function mapStatetoProps (state) {
  return { posts: state.posts };
}
export default connect(mapStatetoProps, { fetchPosts }) (PostsIndex);
