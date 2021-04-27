import React, { Component } from 'react';

import { fetchMovieReviews } from '../../services/moviesApi';

import ReviewsItem from '../ReviewsItem';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount(prevProps, prevState) {
    const { movieId } = this.props.match.params;
    this.fetchReviews(movieId);
  }

  fetchReviews = id => {
    fetchMovieReviews(id)
      .then(data => {
        this.setState({ reviews: data });
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    const { reviews } = this.state;

    return (
      <ul>
        {reviews && (
          <ul>
            {reviews.map(
              ({
                id,
                content,
                created_at,
                author_details: { username, avatar_path },
              }) => (
                <li key={id}>
                  <ReviewsItem
                    author={username}
                    text={content}
                    date={created_at}
                    img={avatar_path}
                  />
                </li>
              ),
            )}
          </ul>
        )}
      </ul>
    );
  }
}

export default Reviews;
