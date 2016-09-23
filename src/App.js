import React, { PropTypes } from 'react';
import Echart from './Echart';
import ReactBs from './ReactBs';
class App extends React.Component {
  render () {
    return(
      <div>
        <ReactBs />
        <Echart />
      </div>
    )
  }
}

export default App;
