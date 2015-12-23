var React = require('react'),
    THREE = require('three'),
    ReactTHREE = require('react-three');

var assetpath = function(filename) { return '../assets/' + filename; };

var MeshFactory = React.createFactory(ReactTHREE.Mesh);

var sphereGeometry = new THREE.SphereGeometry( 50, 100, 100);

var cupcaketexture = THREE.ImageUtils.loadTexture(window.movinglogo);
cupcaketexture.minFilter = THREE.LinearFilter;
var cupcakematerial = new THREE.MeshBasicMaterial( { map: cupcaketexture, side: THREE.DoubleSide} );

var DeathStar = React.createClass({
  displayName: 'DeathStar',
  propTypes: {
   position: React.PropTypes.instanceOf(THREE.Vector3),
   quaternion: React.PropTypes.instanceOf(THREE.Quaternion).isRequired
  },
  render: function() {
   return React.createElement(
     ReactTHREE.Object3D,
     {quaternion:this.props.quaternion, position:this.props.position || new THREE.Vector3(0,0,0)},
     MeshFactory({position:new THREE.Vector3(0,30,0), geometry:sphereGeometry, material:cupcakematerial})
   );
  }
})

var OrbitCamera = React.createClass({
  displayName:'OrbitCamera',
  propTypes: {
    distance: React.PropTypes.number.isRequired,
    azimuth: React.PropTypes.number.isRequired,
    aspectratio: React.PropTypes.number.isRequired
  },
  render: function() {
    // could use sin/cos here but a quat allows for more generic rotation
    var orbitquaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), this.props.azimuth);
    var cameraposition = new THREE.Vector3(this.props.distance,0,-100); // camera position at azimuth 0
    cameraposition.applyQuaternion(orbitquaternion);

    return React.createElement(ReactTHREE.PerspectiveCamera,
      {
        name:'maincamera',
        fov:75,
        aspect:this.props.aspectratio,
        position: cameraposition,
        lookat: new THREE.Vector3(0,0,0),
        near:1,
        far:5000
      });
  }
});




var Logo = React.createClass({
  displayName: 'ExampleScene',

  getInitialState: function() {
    // base initial size on window size minus border size
    var width = 50;
    var height = 50;

    return {width:width, height:height, cameraazimuth:0};
  },

  componentDidMount: function() {
    var componentinstance = this;
    var animationcallback = function(/*t*/) {
      var newazimuth = componentinstance.state.cameraazimuth + 0.01;

      var newstate = {
        cameraazimuth:newazimuth,
        spincameracallback:requestAnimationFrame(animationcallback)
      };
      componentinstance.setState(newstate);
    };
    // add an interval timer function to rotate the camera
    componentinstance.setState({spincameracallback:requestAnimationFrame(animationcallback)});
  },
  render: function() {

    return React.createElement(
      ReactTHREE.Scene,
      {width:this.props.width, height:this.props.height, camera:'maincamera', orbitControls:THREE.OrbitControls},
      React.createElement(OrbitCamera, {key:'camera', distance:100, azimuth:this.state.cameraazimuth, aspectratio:100 / 100}),
      React.createElement(DeathStar, this.props.cupcakedata)
    );
  }
});



var cupcakestart = function() { // eslint-disable-line no-unused-vars
  var renderelement = document.getElementById("logo");

  var w = 70;
  var h = 70;

  var sceneprops = {width:w, height:h, cupcakedata:{position:new THREE.Vector3(0,0,0), quaternion:new THREE.Quaternion()}};

  function animate(time) {

    requestAnimationFrame(animate)
  };

  ReactTHREE.render(React.createElement(Logo,sceneprops), renderelement);
}

module.exports = cupcakestart;
