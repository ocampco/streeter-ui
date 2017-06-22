import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import url from './api/url';
import Search from './routes/Search/Search';
import Launch from './routes/Launch/Launch';
import { heartbeat } from './api/config';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  componentWillMount() {
    const request = url(heartbeat);

    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        console.log('err', err); // eslint-disable-line no-console
      });
  }

  render() {
    const { loading } = this.state;
    const component = loading ? <Launch /> : <Search />;

    return (
      <div>
        { component }
      </div>
    );
  }
}

export default Root;
