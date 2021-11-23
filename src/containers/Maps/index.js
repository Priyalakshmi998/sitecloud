import React,{useRef,useEffect} from 'react';
import {loadModules} from 'esri-loader';

function Map(){
    const mapEl =useRef(null);
    useEffect(
        ()=>{
            let view;
            loadModules(["esri/Map", "esri/views/MapView", "esri/widgets/Search","esri/widgets/Sketch","esri/layers/GraphicsLayer"],{
                css:true
            }).then(([Map, MapView,Search,Sketch,GraphicsLayer,])=>{
                const graphicsLayer = new GraphicsLayer();
                const map = new Map({
                    basemap: "topo-vector",
                    layers: [graphicsLayer]

                });
                view = new MapView({
                    // container: "viewDiv",
                    container: mapEl.current,
                    map: map,
                    zoom: 4,
                    center: [15, 65] // longitude, latitude

                });
                const searchWidget = new Search({
                    view: view
                });
                 // Add the search widget to the top right corner of the view
                view.ui.add(searchWidget, {
                    position: "top-left"
                });
                view.when(() => {
                const sketch = new Sketch({
                    layer: graphicsLayer,
                    view: view,
                    // graphic will be selected as soon as it is created
                    creationMode: "update",
                    availableCreateTools:["polygon"]
                });
        
                view.ui.add(sketch, "top-right");
                });
            })
        return () => {
            // clean up the map view
            if (!!view) {
                view.destroy();
                view = null;
            }
            }

        });
    return(
        <div id="viewDiv" style={{ height: 700 }} ref={mapEl} />
        
    )
}

export default Map;