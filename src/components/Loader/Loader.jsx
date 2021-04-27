import { Component } from 'react';

import Loader from 'react-loader-spinner';

import styles from './Loader.module.scss';

export default class App extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
        className={styles.Loader}
      />
    );
  }
}
