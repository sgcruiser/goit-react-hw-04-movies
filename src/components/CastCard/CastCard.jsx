import { Fragment } from 'react';
import PropTypes from 'prop-types';

import defaultImage from './avatar.png';

import styles from './CastCard.module.scss';

const CastCard = ({ img, name, character }) => {
  const imageUrl = img
    ? `https://image.tmdb.org/t/p/w500/${img}`
    : defaultImage;
  return (
    <Fragment>
      <img src={imageUrl} alt={name} className={styles.img} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.info}>{character}</p>
    </Fragment>
  );
};

CastCard.defaultProps = {
  img: defaultImage,
  name: 'Actor/Actresse',
  character: '',
};

CastCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
export default CastCard;
