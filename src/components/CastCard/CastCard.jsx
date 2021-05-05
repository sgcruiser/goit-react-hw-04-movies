import { Fragment } from 'react';
import PropTypes from 'prop-types';

import defaultImage from './avatar.png';

import styles from './CastCard.module.scss';

const CastCard = ({ image, name, character }) => {
  const imageUrl = image
    ? `https://image.tmdb.org/t/p/w500/${image}`
    : defaultImage;
  return (
    <Fragment>
      <img src={imageUrl} alt={name} className={styles.cast__img} />
      <h2 className={styles.cast__name}>{name}</h2>
      <p className={styles.cast__info}>{character}</p>
    </Fragment>
  );
};

CastCard.defaultProps = {
  image: defaultImage,
  name: 'Actor/Actresse',
  character: '',
};

CastCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

export default CastCard;
