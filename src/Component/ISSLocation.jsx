import React, { Component } from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { connect } from 'react-redux';
import { fetchISSLocation } from '../action'
import './ISSLocation.css';

class ISSLocation extends Component {

  componentDidMount() {
    const { getCurrentLocation } = this.props;

    getCurrentLocation();
  }

  render() {
    const { latitude, longitude } = this.props;
    
    const dummyCoord = 0;
    return (
      <div className="map">
        <Map
          center={ [dummyCoord, dummyCoord] }
          defaultWidth={ 1000 }
          height={ 600 }
          minZoom={ 1 }
          maxZoom={ 8 }
          zoom={ 2 }
        >
          <Marker anchor={ [latitude, longitude ]} />
        </Map>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  latitude: state.issLocation.latitude,
  longitude: state.issLocation.longitude,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentLocation: () => dispatch(fetchISSLocation()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation)