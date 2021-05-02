import React, { Component } from 'react';

import { fetchMovieReviews } from '../../services/moviesApi';

import ReviewsItem from '../ReviewsItem';

import styles from './Reviews.module.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.fetchReviews(movieId);
  }

  async fetchReviews(id) {
    await fetchMovieReviews(id)
      .then(data => {
        this.setState({ reviews: data.results });
        console.log(data);
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className={styles.reviews}>
        {reviews && (
          <ul className={styles.reviews__list}>
            {reviews.map(
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
                    img={avatar_path}
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
