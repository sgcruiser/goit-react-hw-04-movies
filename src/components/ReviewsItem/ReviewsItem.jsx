import { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './ReviewsItem.module.scss';

const ReviewsItem = ({ author, text, date }) => {
  const dateReviews = new Date(`${date}`).toString();

  return (
    <Fragment>
      <h3 className={styles.review__author}>{author}</h3>
      <p className={styles.review__text}>{text}</p>
      <div className={styles.review__date}>{dateReviews}</div>
    </Fragment>
  );
};

ReviewsItem.defaultProps = {
  author: '',
  text: '',
  date: 'XXXX-XX-XX',
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default ReviewsItem;
