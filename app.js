

new Vue({
    el: '#app',

    data: {
        map: null,
        tileLayer: null,
        layers: []
      },
      mounted() {
        self = this;
        Papa.parse("https://data.edinburghopendata.info/dataset/03899d22-9d7a-4f84-a2a4-18c576074e8f/resource/5ad304e3-992c-4b9c-8ac9-5f612fcf3c73/download/directoryexport16.csv", {
            download: true,
            header: true,
            complete: function(results) {
                self.map = L.map('map').setView([55.953251, -3.188267], 11);
                self.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 18,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
                );
                self.tileLayer.addTo(self.map);
                results.data.forEach((el) => {
                    if (el['Location']){
                        let popup = el['Name'];
                        if (el['Address']) popup = popup + "<br> " + el['Address'];
                        popup = popup + "<br> "+el['Day and time'];
                        L.marker(el['Location'].split(',')).addTo(self.map)
                            .bindPopup(popup);
                    }
                });
                //self.csv = results.data;
                // //L.map(results['Location']
                // self.data.csv = results;
                console.log(results.data);
            }
        });
        
      },
      methods: {
        // initMap() {
        //     this.map = L.map('map').setView([55.953251, -3.188267], 12);
        //     this.tileLayer = L.tileLayer(
        //     'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        //     {
        //         maxZoom: 18,
        //         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        //     }
        //     );
        //     this.tileLayer.addTo(this.map);
        // },
        // initLayers() {   
        //     var self = this;
        //     Papa.parse("https://data.edinburghopendata.info/dataset/03899d22-9d7a-4f84-a2a4-18c576074e8f/resource/5ad304e3-992c-4b9c-8ac9-5f612fcf3c73/download/directoryexport16.csv", {
        //         download: true,
        //         header: true,
        //         complete: function(results) {
        //             results.data.forEach(element => {
        //                 // L.marker("["+ element['Location']+ "]").addTo(self.map)
        //                 //     .bindPopup(element['Name'])
        //                 //     .openPopup();
        //             });
        //             L.marker([55.953251, -3.188267]).addTo(self.map)
        //                 .bindPopup('TEst')
        //                 .openPopup();
        //             //self.csv = results.data;
        //             // //L.map(results['Location']
        //             // self.data.csv = results;
        //             // console.log(results);
        //         }
        //     });
            
        //     //parse the data in  POIs
        // }
        // convertCSVtoJSON(csv) {
        //     let lines = csv.split('\n');
        //     let result =[];
        //     let headers= linnes[0].split(',');

        //     for (let i=1; i<lines.length;i++) {
        //         let obj = {};
        //         let currentline=lines[i].split(",");

        //         for(let j=0;j<headers.length;j++){
        //             obj[headers[j]] = currentline[j];
        //         }

        //         result.push(obj);
        //     }

        //     return JSON.stringify(result);
        // }
      },
  });