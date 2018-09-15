// import {Grid} from "ag-grid/main";
import './app.jsx'
// import "./test_task_2_ag_grid.scss";
// import "ag-grid/dist/styles/ag-grid.css";
// import "ag-grid/dist/styles/ag-theme-balham.css";
//
// (function() {
//
//     document.addEventListener('DOMContentLoaded', function() {
//
//         var gridDiv = document.querySelector('#myGrid');
//
//         var gridOptions = {
//             columnDefs: [
//                 {headerName: 'Country', field: 'country'},
//                 {headerName: 'City', field: 'city'},
//                 {headerName: 'Jan', field: 'jan_act'},
//                 {headerName: 'Feb', field: 'feb_act'},
//                 {headerName: 'Mar', field: 'mar_act'},
//                 {headerName: 'Apr', field: 'apr_act'},
//                 {headerName: 'May', field: 'may_act'}
//             ]
//         };
//
//         new agGrid.Grid(gridDiv, gridOptions);
//
//         jsonLoad( function(data) {
//             gridOptions.api.setRowData(data);
//         });
//     });
//
// })();


function jsonLoad(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../sample-data/monthlySales.json'); // by default async
    xhr.responseType = 'json'; // in which format you expect the response to be

    xhr.onload = function() {
        if(this.status == 200) {// onload called even on 404 etc so check the status
            callback(this.response);
        }
    };

    xhr.onerror = function() {
        console.log('loading data error');
    };

    xhr.send();
}