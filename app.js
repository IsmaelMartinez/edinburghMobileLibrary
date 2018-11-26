new Vue({
    el: '#app',

    data: {
        map: null,
        tileLayer: null,
        layers: [
            {
              "Name": "Alnwickhill Park",
              "Address": "1-4 Alnwickhill Park",
              "Postcode": "EH16 6UH",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "4.00 - 4.30pm",
              "Changes to service": "",
              "Location": "55.906029,-3.168302"
            },
            {
              "Name": "Baberton Mains Drive",
              "Address": "280 Baberton Mains Drive",
              "Postcode": "EH14 3EG",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "3.10 - 3.20pm",
              "Changes to service": "",
              "Location": "55.908267,-3.284587"
            },
            {
              "Name": "Barntongate Avenue (22)",
              "Address": "22 Barntongate Avenue",
              "Postcode": "EH4 8BB",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "1.30 - 2.00pm",
              "Changes to service": "",
              "Location": "55.959333935902144,-3.3036600349805667"
            },
            {
              "Name": "Bellenden Gardens",
              "Address": "8 Bellenden Gardens",
              "Postcode": "EH16 5TA",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "1.45pm - 2.15pm",
              "Changes to service": "",
              "Location": "55.922101208527366,-3.1524013154830755"
            },
            {
              "Name": "Bingham Avenue",
              "Address": "28 Bingham Avenue",
              "Postcode": "EH15 3HZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "11.00am - 11.15am",
              "Changes to service": "",
              "Location": "55.939332,-3.123501"
            },
            {
              "Name": "Bonnington Village",
              "Address": "4 Bonnington Village",
              "Postcode": "EH27",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "4.15 - 4.30pm",
              "Changes to service": "",
              "Location": "55.90953524185544,-3.4090457673339642"
            },
            {
              "Name": "Braidwood House, Dumbiedykes",
              "Address": "",
              "Postcode": "EH8 9UT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "11.40am - 12.00pm",
              "Changes to service": "",
              "Location": "55.948529,-3.177829"
            },
            {
              "Name": "Buckstone Circle",
              "Address": "30 - 32 Buckstone Circle",
              "Postcode": "EH10 6XQ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "2.50 - 3.30pm",
              "Changes to service": "",
              "Location": "55.903322,-3.197507"
            },
            {
              "Name": "Calder Park",
              "Address": "1 Calder Park",
              "Postcode": "EH11 4NF",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "3.30 - 3.50pm",
              "Changes to service": "",
              "Location": "55.919989363505714,-3.2944880859832892"
            },
            {
              "Name": "Cameron Toll Shopping Centre",
              "Address": "Cameron Toll Shopping Centre",
              "Postcode": "EH16 5PB",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "1.30 - 2.30pm",
              "Changes to service": "",
              "Location": "55.9256507726428,-3.1646572349927737"
            },
            {
              "Name": "Cammo Gardens",
              "Address": "8-10 Cammo Gardens",
              "Postcode": "EH4 8EH",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "3.20 - 3.45pm",
              "Changes to service": "",
              "Location": "55.959785369028154,-3.3079025742335944"
            },
            {
              "Name": "Cammo Grove",
              "Address": "22-30 or 8 Cammo Grove",
              "Postcode": "EH4 8EX",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "2.45 - 3.15pm",
              "Changes to service": "",
              "Location": "55.95840449220196,-3.316039083328178"
            },
            {
              "Name": "Camus Avenue",
              "Address": "22 Camus Avenue",
              "Postcode": "EH10 6QT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "2.00 - 2.30pm",
              "Changes to service": "",
              "Location": "55.90656,-3.210052"
            },
            {
              "Name": "Carnbee Park",
              "Address": "1 Carnbee Park",
              "Postcode": "EH16 6GE",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "4.35pm - 5.00pm",
              "Changes to service": "",
              "Location": "55.907300824268724,-3.149231558197016"
            },
            {
              "Name": "Carrickvale Community Centre",
              "Address": "",
              "Postcode": "EH11 3HH",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "10.00am - 10.15am",
              "Changes to service": "",
              "Location": "55.931338,-3.26411"
            },
            {
              "Name": "Claremont Road",
              "Address": "41 Claremont Road",
              "Postcode": "EH6 7NN",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "1.45 - 2.15pm",
              "Changes to service": "",
              "Location": "55.968076,-3.155672"
            },
            {
              "Name": "Clark Road",
              "Address": "9 Clark Road",
              "Postcode": "EH5 3BD",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "1.30 - 2.00pm",
              "Changes to service": "",
              "Location": "55.97474875593187,-3.2069710490031866"
            },
            {
              "Name": "Coillesdene Avenue",
              "Address": "68 Coillesdene Avenue",
              "Postcode": "EH15 2LH",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "11.15 - 11.35am",
              "Changes to service": "",
              "Location": "55.946969,-3.088575"
            },
            {
              "Name": "Craighall Road, Victoria Park",
              "Address": "Craighall Road, Victoria Park",
              "Postcode": "",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "3.00 - 3.30pm",
              "Changes to service": "",
              "Location": "55.97492905856165,-3.1957279442212894"
            },
            {
              "Name": "Craiglockhart Drive North",
              "Address": "16 Craiglockhart Drive North",
              "Postcode": "EH14 1HT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "3.30 - 4.00pm",
              "Changes to service": "",
              "Location": "55.923035,-3.241211"
            },
            {
              "Name": "Cramond Fair a Far",
              "Address": "81 Whitehouse Road",
              "Postcode": "EH4 6PQ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "10.40 - 10.50am",
              "Changes to service": "",
              "Location": "55.97261465989916,-3.3049084206237467"
            },
            {
              "Name": "Cramond Glebe Gardens",
              "Address": "2 Cramond Glebe Gardens",
              "Postcode": "EH4 6NZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "10.00 - 10.20am",
              "Changes to service": "",
              "Location": "55.97661217930887,-3.299612189163213"
            },
            {
              "Name": "Dalmeny School",
              "Address": "Carlowrie Avenue",
              "Postcode": "EH30 9TZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "11.25am - 11.55am",
              "Changes to service": "",
              "Location": "55.980758,-3.37406"
            },
            {
              "Name": "Dalmeny Square",
              "Address": "Dalmeny Square",
              "Postcode": "EH30 9TY",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "12.00 - 12.10pm",
              "Changes to service": "",
              "Location": "55.98198717812569,-3.3742565328522005"
            },
            {
              "Name": "Edinburgh Business Park",
              "Address": "Library parks in layby near Careshare Nursery / HSBC",
              "Postcode": "EH12 9DH",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "12.30 - 1.00pm",
              "Changes to service": "",
              "Location": "55.9327062734595,-3.3134111164690694"
            },
            {
              "Name": "Findlay Avenue",
              "Address": "50 Findlay Avenue",
              "Postcode": "EH7 6EY",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "1.15 - 1.30pm",
              "Changes to service": "",
              "Location": "55.964506,-3.151096"
            },
            {
              "Name": "Forrester Park Avenue",
              "Address": "16-18 Forrester Park Avenue",
              "Postcode": "EH12 9AS",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "1.45 - 2.05pm",
              "Changes to service": "",
              "Location": "55.93250219999999,-3.2818514000000505"
            },
            {
              "Name": "Forrester Park Drive",
              "Address": "19 Forrester Park Drive",
              "Postcode": "EH12 9AN",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "1.20 - 1.40pm",
              "Changes to service": "",
              "Location": "55.93161,-3.2821100999999544"
            },
            {
              "Name": "Forrester Park Gardens",
              "Address": "6 Forrester Pak Gardens",
              "Postcode": "EH12 9AQ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "2.10 - 2.30pm",
              "Changes to service": "",
              "Location": "55.93239355552212,-3.2862532138824463"
            },
            {
              "Name": "Gilmerton Road",
              "Address": "271 Gilmerton Road",
              "Postcode": "EH16 5TT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "5.30 - 6.15pm",
              "Changes to service": "",
              "Location": "55.918904,-3.155008"
            },
            {
              "Name": "Glendevon Park",
              "Address": "3 Glendevon Park",
              "Postcode": "EH12 5XD",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "1.50 - 2.15pm",
              "Changes to service": "",
              "Location": "55.940157748766964,-3.253948788360617"
            },
            {
              "Name": "Glenvarloch Crescent",
              "Address": "117 Glenvarloch Crescent",
              "Postcode": "EH16 6BB",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "2.30pm - 3.10pm",
              "Changes to service": "",
              "Location": "55.917471889387805,-3.159309555541995"
            },
            {
              "Name": "Gogar Bank",
              "Address": "55 Gogar Bank",
              "Postcode": "EH12 9BY",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "1.15 - 1.35pm",
              "Changes to service": "",
              "Location": "55.922842520251294,-3.330531120300293"
            },
            {
              "Name": "Gylemuir Road",
              "Address": "132-4 Gylemuir Road",
              "Postcode": "EH12 7DL",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "10.25am - 10.40am",
              "Changes to service": "",
              "Location": "55.94009,-3.297808"
            },
            {
              "Name": "Hailes Terrace",
              "Address": "5 Hailes Terrace",
              "Postcode": "EH13 0NB",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "2.45 - 3.00pm",
              "Changes to service": "",
              "Location": "55.911771567536235,-3.2619141679840595"
            },
            {
              "Name": "Hermiston village",
              "Address": "30 Hermiston village",
              "Postcode": "EH14 4AW",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "1.45 - 2.10pm",
              "Changes to service": "",
              "Location": "55.918026276366604,-3.317477021301329"
            },
            {
              "Name": "Hillwood Rise, Ratho Station, No. 4",
              "Address": "Hillwood Rise, Ratho Station, No. 4",
              "Postcode": "",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "6.00 - 7.00pm",
              "Changes to service": "",
              "Location": "55.93671168577195,-3.388830184630933"
            },
            {
              "Name": "Howdenhall Court",
              "Address": "Flat 29, Howdenhall Court",
              "Postcode": "EH16 6UZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "3.30 - 3.50pm",
              "Changes to service": "",
              "Location": "55.903872532382586,-3.1754215495986955"
            },
            {
              "Name": "Howdenhall Drive",
              "Address": "68 Howdenhall Drive",
              "Postcode": "EH16 6UP",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "3.10 - 3.25pm",
              "Changes to service": "",
              "Location": "55.9033015078135,-3.1702476256560885"
            },
            {
              "Name": "Ingliston Nursery",
              "Address": "4a Ingliston Road",
              "Postcode": "EH28 8AU",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "11.15 - 11.30am",
              "Changes to service": "",
              "Location": "55.938889723438166,-3.3657481428222127"
            },
            {
              "Name": "Lennie Cottages",
              "Address": "Craig's Road",
              "Postcode": "",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "4.20 - 4.45pm",
              "Changes to service": "",
              "Location": "55.949579286982434,-3.331812500800879"
            },
            {
              "Name": "Lennymuir",
              "Address": "Lennymuir",
              "Postcode": "EH12 0AP",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "3.50 - 4.15pm",
              "Changes to service": "",
              "Location": "55.954254498202445,-3.347887515410548"
            },
            {
              "Name": "Liberton Drive",
              "Address": "26 Liberton Drive",
              "Postcode": "EH16 6NN",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "6.30 - 7.15pm",
              "Changes to service": "",
              "Location": "55.911981,-3.165969"
            },
            {
              "Name": "Lochend Crescent",
              "Address": "7 Lochend Crescent",
              "Postcode": "EH7 6EQ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "2.30 - 3.00pm",
              "Changes to service": "",
              "Location": "55.960382,-3.151998"
            },
            {
              "Name": "Longstone Grove",
              "Address": "7 Longstone Grove",
              "Postcode": "EH14 2BT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "3.00 - 3.20pm",
              "Changes to service": "",
              "Location": "55.92328127839665,-3.261909914016769"
            },
            {
              "Name": "Magdalene Court Sheltered Housing",
              "Address": "",
              "Postcode": "EH15 3EF",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "10.30am - 10.50am",
              "Changes to service": "",
              "Location": "55.940748152660404,-3.1135972850952385"
            },
            {
              "Name": "Magdalene Drive (layby at shops)",
              "Address": "Magdalene Drive",
              "Postcode": "EH15 3DZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "11.45am - 12.15pm",
              "Changes to service": "",
              "Location": "55.942416,-3.109389"
            },
            {
              "Name": "Malbet Park",
              "Address": "3 Malbet Park",
              "Postcode": "EH16 6SY",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "5.10pm - 5.30pm",
              "Changes to service": "",
              "Location": "55.910634496861064,-3.1554843214264565"
            },
            {
              "Name": "Moat House, Moat Drive",
              "Address": "Moat Drive",
              "Postcode": "EH14 1NS",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "5.40pm - 6.10pm",
              "Changes to service": "",
              "Location": "55.93315474159305,-3.2401235740661605"
            },
            {
              "Name": "Mortonhall Park Drive",
              "Address": "6 - 10 Mortonhall Park Drive",
              "Postcode": "EH17 8SS",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Date": "Tuesday",
              "Time": "2.40 - 3.00pm",
              "Changes to service": "",
              "Location": "55.901093,-3.167642"
            },
            {
              "Name": "Mortonhall Park Gardens",
              "Address": "7 Mortonhall Park Gardens",
              "Postcode": "EH17 8SL",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday", 
              "Time": "6.30pm - 7.30pm",
              "Changes to service": "",
              "Location": "55.900168,-3.17134"
            },
            {
              "Name": "Muir Wood Road / Corner of Bryce Road",
              "Address": "18 Muir Wood Road, Currie",
              "Postcode": "EH14 5JT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday", 
              "Time": "2.35 - 3.35pm",
              "Changes to service": "",
              "Location": "55.89985479965902,-3.3064419608519984"
            },
            {
              "Name": "Murray Cottages, Ladywell Road",
              "Address": "Murray Cottages, Ladywell Road",
              "Postcode": "EH12 7TB",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday", 
              "Time": "3.00 - 3.30pm",
              "Changes to service": "",
              "Location": "55.93955148177502,-3.2914089560836146"
            },
            {
              "Name": "New Lairdship Place",
              "Address": "New Lairdship Place",
              "Postcode": "EH11 3UZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday", 
              "Time": "1.15 - 1.35pm",
              "Changes to service": "",
              "Location": "55.92600381612329,-3.282585002516157"
            },
            {
              "Name": "Newcraighall Drive",
              "Address": "12 Newcraighall",
              "Postcode": "EH21 8SG",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday", 
              "Time": "10.30 - 11.00am",
              "Changes to service": "",
              "Location": "55.93429636383868,-3.091608104507486"
            },
            {
              "Name": "North Bughtlin Place",
              "Address": "16 North Bughtlin Place",
              "Postcode": "EH12 8UP",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "11.00 - 11.30am",
              "Changes to service": "",
              "Location": "55.951830989682605,-3.3035552784347146"
            },
            {
              "Name": "North Gyle Terrace",
              "Address": "29 North Gyle Terrace",
              "Postcode": "EH12 8JT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "10.50 - 11.00am",
              "Changes to service": "",
              "Location": "55.941929,-3.304946"
            },
            {
              "Name": "Old Farm Court",
              "Address": "311 Colinton Road",
              "Postcode": "EH13 0NS",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday", 
              "Time": "10.15 - 11.15am",
              "Changes to service": "",
              "Location": "55.9088699,-3.2504048000000694"
            },
            {
              "Name": "Parkgrove Street",
              "Address": "87 Parkgrove Street",
              "Postcode": "EH7 7NT",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday", 
              "Time": "2.30 - 3.30pm",
              "Changes to service": "",
              "Location": "55.95934594750127,-3.289197563972266"
            },
            {
              "Name": "Parkside, Newbridge",
              "Address": "1 Parkside",
              "Postcode": "EH28 8ST",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday", 
              "Time": "5.30 - 5.45pm",
              "Changes to service": "",
              "Location": "55.93799609356377,-3.4093847632293546"
            },
            {
              "Name": "Prestonfield Avenue",
              "Address": "28 Prestonfield Avenue",
              "Postcode": "EH16 5EH",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "12.15pm - 12.45pm",
              "Changes to service": "",
              "Location": "55.933386,-3.161042"
            },
            {
              "Name": "Ratho Station, Station Road",
              "Address": "Station Road",
              "Postcode": "EH28 8PZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday", 
              "Time": "11.45 am - 12.15pm",
              "Changes to service": "",
              "Location": "55.9357620028559,-3.390634059906006"
            },
            {
              "Name": "Redhall Drive",
              "Address": "67 - 69 Redhall Drive",
              "Postcode": "EH14 2HG",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday", 
              "Time": "4.00pm - 4.40pm",
              "Changes to service": "",
              "Location": "55.921514777041835,-3.2580619365234043"
            },
            {
              "Name": "Rosebery Avenue Dental Surgery, South Queensferry",
              "Address": "Rosebery Avenue",
              "Postcode": "EH30 9JG",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "1.45 - 2.30pm",
              "Changes to service": "",
              "Location": "55.98594607269449,-3.3956561786040993"
            },
            {
              "Name": "Roseburn Crescent",
              "Address": "2 Roseburn Crescent",
              "Postcode": "EH12 5NZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "6.30pm - 7.15pm",
              "Changes to service": "",
              "Location": "55.94396,-3.237829"
            },
            {
              "Name": "Saughton Crescent (Bright Sparks Nursery)",
              "Address": "58 Saughton Crescent",
              "Postcode": "EH12 5SP",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "2.20 - 2.45pm",
              "Changes to service": "",
              "Location": "55.9435035,-3.255395599999929"
            },
            {
              "Name": "Saughton Mains Terrace",
              "Address": "4 Saughton Mains Terrace",
              "Postcode": "EH11 3NU",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Friday",
              "Time": "10.15 - 10.30am",
              "Changes to service": "",
              "Location": "55.932462975927216,-3.267180445368922"
            },
            {
              "Name": "South Gyle Gardens",
              "Address": "110 South Gyle Gardens",
              "Postcode": "EH12 7RZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "10.00am - 10.15am",
              "Changes to service": "",
              "Location": "55.93722525538364,-3.299822477523776"
            },
            {
              "Name": "Southhouse Avenue SH",
              "Address": "47 - 49 Southhouse Avenue",
              "Postcode": "EH17 8BZ",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "3.25 - 3.45pm",
              "Changes to service": "",
              "Location": "55.901551,-3.155276"
            },
            {
              "Name": "Southhouse Road",
              "Address": "35 Southhouse Road",
              "Postcode": "EH17 8EW",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday", 
              "Time": "4.15 - 4.25pm",
              "Changes to service": "",
              "Location": "55.898418352755385,-3.157274804893518"
            },
            {
              "Name": "Southhouse Square",
              "Address": "1 Southhouse Square",
              "Postcode": "EH17 8DN",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday",
              "Time": "3.50 - 4.10pm",
              "Changes to service": "",
              "Location": "55.899091,-3.154147"
            },
            {
              "Name": "Stuart Square",
              "Address": "Stuart Square",
              "Postcode": "EH12 8UU",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "6.15 - 7.00pm",
              "Changes to service": "",
              "Location": "55.9497644850963,-3.3033439927291965"
            },
            {
              "Name": "The Queens Retreat, South Queensferry",
              "Address": "6 Scotstoun Grove",
              "Postcode": "EH30 9PH",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "1.10 - 1.40pm",
              "Changes to service": "",
              "Location": "55.98336688852154,-3.3920030085982944"
            },
            {
              "Name": "Turnhouse Road",
              "Address": "85 Turnhouse Road",
              "Postcode": "EH12",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Tuesday",
              "Time": "4.50 - 5.15pm",
              "Changes to service": "",
              "Location": "55.94157171054124,-3.3161852356715826"
            },
            {
              "Name": "Waverley Court",
              "Address": "4 East Market St",
              "Postcode": "EH8 8BG",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "12.00 - 1.15pm",
              "Changes to service": "",
              "Location": "55.95152569835076,-3.1843457001389197"
            },
            {
              "Name": "Whitehouse Road, Barnton",
              "Address": "186 Whitehouse Road",
              "Postcode": "EH4 6DB",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Thursday",
              "Time": "10.55 - 11.10am",
              "Changes to service": "",
              "Location": "55.96276193453944,-3.306785423278825"
            },
            {
              "Name": "Woodhall Terrace (corner of Baberton Crescent)",
              "Address": "",
              "Postcode": "EH14 5DN",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Monday", 
              "Time": "2.25 - 2.50pm",
              "Changes to service": "Moved from Baberton Avenue due to building work",
              "Location": "55.90624733501022,-3.2825732231140137"
            },
            {
              "Name": "Zetland Place",
              "Address": "5 Zetland Place",
              "Postcode": "EH5 3HU",
              "Telephone": "0131 529 5683",
              "Email": "access.services@edinburgh.gov.uk",
              "Day": "Wednesday",
              "Time": "2.10 - 2.50pm",
              "Changes to service": "",
              "Location": "55.975814,-3.208848"
            }
          ]
      },
      mounted() {
        this.loadMap();
        this.addMarkers();
        this.addCurrentLocation();
      },
      methods: {
        loadMap() {
                this.map = L.map('map',{
                  fullscreenControl: true
                }).setView([55.953251, -3.188267], 11);
                this.tileLayer = L.tileLayer(
                'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
                {
                    maxZoom: 18,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
                }
                );
                this.tileLayer.addTo(this.map);
            },
            addMarkers () {
                this.layers.forEach(el => {
                    if (el['Location']){
                        let popup = el['Name'];
                        if (el['Address']) popup = popup + "<br> " + el['Address'];
                        popup = popup + "<br> "+el['Day'] + " "+el['Time'];
                        L.marker(el['Location'].split(',')).addTo(this.map)
                            .bindPopup(popup);
                    }
                });
            },
            addCurrentLocation() {
                var pulsingIcon = L.icon.pulse({iconSize:[8,8],color:'red'});
                navigator.geolocation.getCurrentPosition((position) => {
                    L.marker([position.coords.latitude,position.coords.longitude], {icon: pulsingIcon})
                        .addTo(this.map);
                });
            }
        } 
  });