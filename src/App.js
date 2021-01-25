import mapa from "./mymaps-desktop-16x9.png";
import "./App.css";
import {useEffect} from 'react';
import $ from 'jquery';

function App() {
  useEffect(() => {
    var multiplier = 1;
    $('#image').removeClass().addClass('zoom1');
    var imageWidth =  $('#image').width();
    var imageHeight =  $('#image').height();
    function createPoints(height, witdh) {
        var map = $('#map');
        var points =[
            {
                x: 0.5, y: 0.5, label: 'point 1',
            },
            {
                x: 0.2, y: 0.8, label: 'point 2',
            }
        ];
        $('.point').remove();
        points.forEach(function(point){
            map.append(`<div style="left:${point.x * witdh}px;top:${point.y * height}px" class="point" title="${point.label}">
                <img class="pin" src="./pin.png" />
            </div>`);
        });
    }
    $('#zoom1').on('click', function(){
        multiplier = 1;
        $('#image').removeClass().addClass('zoom1');
        imageWidth =  $('#image').width();
        imageHeight =  $('#image').height();
        createPoints(imageHeight, imageWidth);
    });
    $('#zoom2').on('click', function(){
        multiplier = 1.5;
        $('#image').removeClass().addClass('zoom2');
        imageWidth =  $('#image').width();
        imageHeight =  $('#image').height();
        createPoints(imageHeight, imageWidth);
    });
    $('#zoom3').on('click', function(){
        multiplier = 2;
        $('#image').removeClass().addClass('zoom3');
        imageWidth =  $('#image').width();
        imageHeight =  $('#image').height();
        createPoints(imageHeight, imageWidth);
    });
    createPoints(imageHeight, imageWidth);
  }, []);
  return (
    <>
      <div className="zoom-comtroler">
        <div id="zoom1" className="zoomOption">
          Zoom 1
        </div>
        <div id="zoom2" className="zoomOption">
          Zoom 2
        </div>
        <div id="zoom3" className="zoomOption">
          Zoom 3
        </div>
      </div>
      <div id="map" className="map">
        <img id="image" src={mapa} alt="mapa"/>
      </div>
    </>
  );
}

export default App;

