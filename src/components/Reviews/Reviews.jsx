import React, { Component } from 'react';

import { fetchMovieReviews } from '../../services/moviesApi';

import ReviewsItem from '../ReviewsItem';

import styles from './Reviews.module.scss';

class Reviews extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.fetchReviews(movieId);
  }

  async fetchReviews(id) {
    await fetchMovieReviews(id)
      .then(data => {
        this.setState({ ...data });
        console.log(data);
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { results } = this.state;

    return (
      <div className={styles.reviews}>
        {results && (
          <ul className={styles.reviews__list}>
            {results.map(
              ({
                id,
                content,
                created_at,
                author_details: { username, avatar_path },
              }) => (
                <li key={id} className={styles.reviews__item}>
                  <ReviewsItem
                    author={username}
                    text={content}
                    date={created_at}
                    image={avatar_path}
                  />
                </li>
              ),
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default Reviews;
