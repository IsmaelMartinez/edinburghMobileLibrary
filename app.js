new Vue({
    el: '#app',
    data: {
        map: null,
        tileLayer: null,
        layers: [],
      },
      mounted() {
        this.initMap();
        this.initLayers();
      },
      methods: {
        initMap() {
            this.map = L.map('map').setView([55.953251, -3.188267], 12);
            this.tileLayer = L.tileLayer(
            'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
            {
                maxZoom: 18,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
            }
            );
            this.tileLayer.addTo(this.map);
        },
        initLayers() {            
            //load sources from https://data.edinburghopendata.info/dataset/03899d22-9d7a-4f84-a2a4-18c576074e8f/resource/5ad304e3-992c-4b9c-8ac9-5f612fcf3c73/download/directoryexport16.csv
            //parse the data in the layers
        },
      },
  });