import React,{useRef,useEffect,useState} from 'react';
import {loadModules} from 'esri-loader';

function Map(){
    const mapEl =useRef(null);
    
    // useEffect(() => {
    //     if(arr1.length>1){
    //         const sketch = new Sketch({
    //             layer: graphicsLayer,
    //             view: view,
    //             // graphic will be selected as soon as it is created
    //             creationMode: "update",
    //             availableCreateTools:["polygon","point"],
    //             creationMode: "update",
    //         });
    //     }
        
    // }, [arr1])
    // const [arr1, setarr1] = useState([])
    useEffect(
        ()=>{
        console.log("djbbd")
        const arr1=[]
            let poly="polygon"
            let view;
            loadModules(["esri/Map", "esri/views/MapView", "esri/widgets/Search","esri/widgets/Sketch","esri/layers/GraphicsLayer","esri/geometry/support/webMercatorUtils","esri/widgets/Editor","esri/layers/FeatureLayer","esri/widgets/Editor/CreateWorkflow","esri/widgets/Editor/UpdateWorkflowData","esri/widgets/Editor/CreateWorkflowData"],{
                css:true
            }).then(([Map, MapView,Search,Sketch,GraphicsLayer,webMercatorUtils,Editor,FeatureLayer,CreateWorkflow,UpdateWorkflowData,CreateWorkflowData])=>{
                const graphicsLayer = new GraphicsLayer();
            
                let pointLayer, lineLayer, polygonLayer;
            const wfirehydrantSymbol = {
                
                type: "simple",
                symbol: {
                    type: "picture-marker",
                    url: "https://img.icons8.com/doodle/48/000000/fire-hydrant--v1.png",
                    width: "20px",
                    height: "20px"
                }
                };
                const wfirehydrantPopup = {
                title: "wfirehydrant",
                // content: "<br>FID:</br> {FID} <br>z:</br> {z}"
                };
                const wdistributionpipeSymbol = {
                type: "simple",
                symbol: {
                    type: "simple-line",
                    cap: "round",
                    color: [0, 172, 230],
                    width: "5px",
                    style: "solid"
                }
            };
                const wdistributionpipeLabel = {
                    symbol: {
                    type: "text",
                    color: "black",
                    haloColor: "white",
                    haloSize: "1.5px",
                    font: {
                        size: "13px",
                        family: "Noto sans",
                        style: "italic",
                        weight: "normal"
                    }
                    },
                    labelPlacement: "above-center",
                    labelExpressionInfo: {
                    expression: "$feature.Shape__Length"
                    }
                };
                let wdistributionpipePopup = {
                    title: "wdistributionpipe",
                    content: "<br>Materal:</br> {MATERIAL_E} <br>CITYENAME:</br> {CITYENAME}"
                };
                let wtransmissionPipeSymbol = {
                    type: "simple",
                    symbol: {
                    type: "simple-line",
                    cap: "round",
                    color: [0, 0, 230],
                    width: "5px",
                    style: "solid"
                    }
                };
                let wtransmissionPipeLabel = {
                    symbol: {
                    type: "text",
                    color: "black",
                    haloColor: "white",
                    haloSize: "1.5px",
                    font: {
                        size: "13px",
                        family: "Noto sans",
                        style: "italic",
                        weight: "normal"
                    }
                    },
                    labelPlacement: "above-center",
                    labelExpressionInfo: {
                    expression: "$feature.Shape__Length"
                    }
                };
                let wtransmissionPipePopup = {
                    title: "WTransmissionPipe",
                    content: "<br>Materal:</br> {MATERIAL_E} <br>CITYENAME:</br> {CITYENAME}"
                };
                const wtransmissionPipe = new FeatureLayer({
                    url: "https://services3.arcgis.com/0G16ZDbXMbWFq4Wr/arcgis/rest/services/wtransmissionpipe/FeatureServer/0",
                    popupEnabled: true,
                    id: "WTransmissionPipe",
                    renderer: wtransmissionPipeSymbol,
                    labelingInfo: [wtransmissionPipeLabel],
                    popupTemplate: wtransmissionPipePopup
                });
                const wdistributionpipe = new FeatureLayer({
                    url: "https://services3.arcgis.com/0G16ZDbXMbWFq4Wr/arcgis/rest/services/wdistributionpipe/FeatureServer/0",
                    popupEnabled: true,
                    id: "wdistributionpipe",
                    renderer: wdistributionpipeSymbol,
                    labelingInfo: [wdistributionpipeLabel],
                    popupTemplate: wdistributionpipePopup
                });
                const wfirehydrant = new FeatureLayer({
                    url: "https://services3.arcgis.com/0G16ZDbXMbWFq4Wr/arcgis/rest/services/wfirehydrant/FeatureServer/0",
                    popupEnabled: true,
                    id: "wfirehydrant",
                    renderer: wfirehydrantSymbol,
                    popupTemplate: wfirehydrantPopup
                });
                const wfirehydrant1 = new FeatureLayer({
                    url: "https://services3.arcgis.com/0G16ZDbXMbWFq4Wr/arcgis/rest/services/wfirehydrant/FeatureServer/0",
                    popupEnabled: true,
                    id: "wfirehydrant1",
                    renderer: wfirehydrantSymbol,
                    // popupTemplate: wfirehydrantPopup
                });
                const map = new Map({
                    basemap: "topo-vector",
                    layers: [graphicsLayer,wtransmissionPipe, wdistributionpipe, wfirehydrant,wfirehydrant1]

                });
                view = new MapView({
                    // container: "viewDiv",
                    container: mapEl.current,
                    map: map,
                    zoom: 4,
                    center: [15, 65] // longitude, latitude

                });
                
                
                view.when(()=>{
                    const Createwfdata= new CreateWorkflowData()
                    const createwf=new CreateWorkflow({
                        data:Createwfdata,
                    
                })
                    const editor = new Editor({
                        view: view,
                        // activeWorkflow:
                        // snappingOptions: {
                        //     enabled: true,
                        //     selfEnabled: true,
                        //     featureEnabled: true,
                        //     featureSources: [{
                        //         layer: wfirehydrant
                        //     },
                        //     {
                        //         layer: wdistributionpipe
                        //     },
                        //     {
                        //         layer: wtransmissionPipe
                        //     }
                        //     ]
                        // }
                        });
                        createwf.on("commit",(event)=>{

                    console.log("Editor",event)
                })
            view.ui.add(editor, "top-left");
        
        })
                const searchWidget = new Search({
                    view: view
                });
                 // Add the search widget to the top right corner of the view
                view.ui.add(searchWidget, {
                    position: "top-left"
                });
            
                // view.on(() => {
                
                //     editor.on("commit",function(event) {
                //         console.log(event)
                //     })
                // })
                // function res(e){
                //     console.log(e)
                // }
                // createwf.watch('editor',res)
            
                    // editor.on(function(){
                    //     console.log(createwf.createinfo);
                    // })
                
                view.when(() => {
                    const sketch = new Sketch({
                        layer: graphicsLayer,
                        view: view,
                        // graphic will be selected as soon as it is created
                        creationMode: "update",
                        availableCreateTools:[arr1.length>1?"":"polygon","point"],
                        creationMode: "update",
                    });
                    // console.log(sketch.toJSON());
                    view.ui.add(sketch, "top-right");
                
                // });

var lon;
var lat;
var crmLatitude;
var crmLongitude;
var latlon;
var zoomLevel;
// let arr1=[];
let ar2=[];    
let b=0;
let gra
                sketch.on('create', function (event) {
                    if(event.state === "complete" && event.tool=="polygon" && arr1.length>1){
                        graphicsLayer.remove(event.graphic);
                        console.log("removed",event.graphic);
                        // let g=event.graphic.clone();
                        // map.graphic.remove(g)
                        // console.log("removed",g)
                    }
                    // if (view.zoom <= 11) {
                    if (event.state === "complete" && event.tool=="polygon") {
                        
                            gra = event.graphic.clone();                
                            //event.graphic.layer.removeAll();                
                            // gra.layer.add(event);           
                            console.log(gra);                
                            // console.log("X = ", gra.geometry.centroid.x);                
                            // console.log("Y = ", gra.geometry.centroid.y);                
                            console.log("Lat = ", event.graphic.geometry.centroid.latitude);                
                            console.log("Long = ", event.graphic.geometry.centroid.longitude);               
                            lat = event.graphic.geometry.centroid.latitude;               
                            lon = event.graphic.geometry.centroid.longitude;                
                            zoomLevel = view.zoom;                
                            for (var i = 0; i < gra.geometry.rings.length; i++) {                  
                                for (var p = 0; p < gra.geometry.rings[i].length; p++) {                    
                                    ar2.length=0  
                                    var pnt = gra.geometry.getPoint(i, p);                    
                                    crmLatitude = String(pnt.latitude);                    
                                    crmLongitude = String(pnt.longitude);                    
                                    var LatLon = String(pnt);                    
                                    console.log(LatLon);                    
                                    console.log(crmLatitude);                    
                                    console.log(crmLongitude); 
                                    ar2.push(crmLatitude);
                                    ar2.push(crmLongitude)
                                    latlon = LatLon;
                                    // setarr1([...arr1,ar2])
                                    arr1.push(ar2)
                                }                
                                }
                                console.log(arr1)
                                b=b+1
                                
                            }
                                
                    if(event.state === "complete"  ){
                            console.log(event.tool)
                            console.log("marker",event.graphic)
                    }
                            // } else {
                            //     alert("please zoom in");                
                            //     // event.graphic.layer.remove(event.graphic); 
                            //     } 
                    });
                    
                        
                    
                    sketch.on("update", (event) => {
                        // if (view.zoom >= 11) {
                        if (event.state === "complete" && event.tool==="transform" ) {
                                console.log(event.tool)
                                // let gra = event.graphics.geometry;
                                let gra1 = event.graphics[0]; 
                                console.log( gra1)
                                arr1.length=0
                                console.log(latlon) 
                            for (var i = 0; i < gra1.geometry.rings.length; i++) { 
                                for (var p = 0; p < gra1.geometry.rings[i].length; p++) {  
                                    ar2.length=0  
                                    var pnt = gra1.geometry.getPoint(i, p);                    
                                    crmLatitude = String(pnt.latitude);                    
                                    crmLongitude = String(pnt.longitude);                    
                                    var LatLon = String(pnt);                    
                                    console.log(LatLon);                    
                                    console.log(crmLatitude);                    
                                    console.log(crmLongitude); 
                                    ar2.push(crmLatitude);
                                    ar2.push(crmLongitude)
                                    latlon = LatLon;
                                    arr1.push(ar2)
                            }
                        
                        }     
                        console.log(arr1)  
                        }
                        // if(event.state === "complete" ){
                        //     console.log(event)}
                        
                        
                        // }
                    // else {
                    //     alert("please zoom in");                
                    //     // event.graphic.layer.remove(event.graphic); 
                    //     }

                        
                    })
                    sketch.on("delete", function(event) {
                        event.graphics.forEach(function(graphic){
                        console.log("deleted", graphic)
                        });
                    })
            })

        


        });
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