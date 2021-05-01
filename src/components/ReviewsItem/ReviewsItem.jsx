import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ReviewsItem = ({ author, text, date, img }) => {
  const imageUrl = img ? `https://image.tmdb.org/t/p/w500/${img}` : null;

  return (
    <Fragment>
      <img src={imageUrl} alt={author} width="100" />
      <h3>{author}</h3>
      <p>{text}</p>
      <div>{date}</div>
    </Fragment>
  );
};

ReviewsItem.defaultProps = {
  img: '',
  author: '',
  text: '',
  date: 'XXXX-XX-XX',
};

ReviewsItem.propTypes = {
  img: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default ReviewsItem;
