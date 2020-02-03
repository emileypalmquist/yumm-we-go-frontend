import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: 'calc(100% - 50px)'
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
   
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


 

  render() {
    const {lat, lng} = this.props.position
    const {restaurants, restaurant} = this.props
    return (
      <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
       lat: lat,
       lng: lng
      }}>

        <Marker position={{ lat: lat, lng: lng}} onClick={this.onMarkerClick} name="current location" icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}/>

        {window.location.href === 'http://localhost:3001/find-restaurant/results' && restaurants.map(rest => 
        <Marker position={{ lat: rest.coordinates.latitude, lng: rest.coordinates.longitude}} onClick={this.onMarkerClick} name={rest.name} key={rest.id}/> 
        )}
        {window.location.href === 'http://localhost:3001/find-restaurant/result' && <Marker position={{ lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} onClick={this.onMarkerClick} name={restaurant.name}/>}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);