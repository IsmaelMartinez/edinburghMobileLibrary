new Vue({
    el: '#app',

    data: {
      map: null,
      tileLayer: null,
      layers: [],
      dayOfTheWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      regexDayOfTheWeek: [/mo[a-z]*/i, /tu[a-z]*/i, /we[a-z]*/i, /th[a-z]*/i, /fr[a-z]*/i]
    },
      mounted() {
        this.loadMap();
        this.setCurrentLocation();
      },
      methods: {
        loadMap() {
          this.defineMap();
          this.loadTileLayer();
          this.getLayersFromCSV();
        },
        addControlLayers() {
          this.controlLayers = L.control.layers(null, null, {collapsed: false});
          this.markers = L.markerClusterGroup();
          this.markers.addTo(this.map);
          _.keys(this.mobileLibraries).forEach((key) => {
            let group = L.featureGroup.subGroup(this.markers, this.mobileLibraries[key]);
            this.controlLayers.addOverlay( group, key);
            group.addTo(this.map)
          })
          this.controlLayers.addTo(this.map);
        },
        loadTileLayer() {
          this.tileLayer = L.tileLayer(
            'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
            {
              maxZoom: 18,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
            }
          );
          this.tileLayer.addTo(this.map);
        },
        defineMap() {
          this.map = L.map('map',{
            fullscreenControl: true,
            center: [55.953251, -3.188267],
            zoom: 12  
          });
        },
        getLayersFromCSV (){
          var self = this;
          Papa.parse("data/mobile-libraries/directoryexport16.csv", {
            download: true,
            header: true,
            complete: function(results) {
              self.processCSVDataToSplitDateAndTime(results.data);
              // self.layers = results.data;
              self.setMarkersForMobileLibraries();
              self.addControlLayers();
            }
          });
        },
        processCSVDataToSplitDateAndTime (data) {
          let processedData = [];
          data.forEach((library => {
              let processed = {};
              processed = JSON.parse(JSON.stringify(library));
              dayAndTime = library["Day and time"];
              if (dayAndTime){
                this.regexDayOfTheWeek.forEach((expression, index) => {
                  if (expression.test(dayAndTime)) {
                    processed.Day = this.dayOfTheWeek[index];
                  }
                });
                console.log(dayAndTime);
                console.log(processed.Day);
                processedData.push(processed);
              }
          }));

          this.layers = processedData;
        },
        setMarkersForMobileLibraries () {
          this.mobileLibraries = this.getMarkersFromObjectGroupOrderedByWeekDay(_.groupBy(this.layers, "Day"));
        },
        getMarkersFromObjectGroupOrderedByWeekDay(layers) {
          let markers = {};

          _.keys(layers).forEach(key => {
            let values = [];
            layers[key].forEach(
              el => {
              if (el['Location']){
                values.push(this.generateMarker(el));
              }
            });
            markers[key] =  values;
          });
          
          return this.orderObjectByWeekDay(markers);
        },
        generateMarker(el) {
          let popup = el['Name'];
          if (el['Address']) popup = popup + "<br> " + el['Address'];
          popup = popup + "<br> "+el['Day and time'];
          return L.marker(el['Location'].split(','))
                  .bindPopup(popup);
        },
        orderObjectByWeekDay(objectToOrder) {
          let orderedObject = {};

          this.dayOfTheWeek.forEach((dayOfWeek) => {
            orderedObject[dayOfWeek] = objectToOrder[dayOfWeek];
          });

          return orderedObject;
        },
        setCurrentLocation() {
          var pulsingIcon = L.icon.pulse({iconSize:[8,8],color:'red'});
          navigator.geolocation.getCurrentPosition((position) => {
            L.marker([position.coords.latitude,position.coords.longitude], {icon: pulsingIcon})
              .addTo(this.map);
          });
        }
      } 
  });