import * as React from 'react';
import {render} from 'react-dom';

import {AgGridReact} from 'ag-grid-react';
import "./test_task_2_ag_grid.scss";

import {Button, Icon, Modal} from 'semantic-ui-react';

import {Table2} from "./components/table2.jsx";
import {Table3} from "./components/table3.jsx";
import {Table4} from "./components/table4.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            columnDefs: [
                {headerName: "Host Name", field: "hostname",},
                {headerName: "Task Id", field: "taskId"},
                {headerName: "Scan Id", field: "scanId"},
                {headerName: "Nvt OID", field: "nvtOid"},
                {headerName: "Scan Time", field: "scanTime"}
            ],
            rowData: [
                {
                    "taskId": "FirstScan",
                    "scanId": "bGHyBuDu",
                    "hostname": "remote43",
                    "nvtOid": "1.3.6.1.4.1.25623.1.0.12200",
                    "scanTime": 1536122487333
                },
                {
                    "taskId": "FirstScan",
                    "scanId": "bGHyBuDu",
                    "hostname": "mail0106.mydomain.local",
                    "nvtOid": "1.3.6.1.4.1.25623.1.0.12637",
                    "scanTime": 1536134499988
                },
                {
                    "taskId": "AutomatedScan",
                    "scanId": "XBEAtf66",
                    "hostname": "ad_sa84.mydomain.local",
                    "nvtOid": "1.3.6.1.4.1.25623.1.0.51662",
                    "scanTime": 1536134624333
                },
                {
                    "taskId": "AutomatedScan",
                    "scanId": "XBEAtf66",
                    "hostname": "192.168.22.112",
                    "nvtOid": "1.3.6.1.4.1.25623.1.0.02602",
                    "scanTime": 1536135222001
                },
                {
                    "taskId": "AutomatedScan",
                    "scanId": "zxSDujYZ",
                    "hostname": "cm-f3.mydomain.local",
                    "nvtOid": "1.3.6.1.4.1.25623.1.0.803517",
                    "scanTime": 1536144400033
                }
            ]
        }
    }

    // componentDidMount() {
    //     fetch('http://5b9bd9638d1635001482cd72.mockapi.io/results')
    //         .then(result => result.json())
    //         .then(rowData => this.setState({rowData}))
    // }

    handleOpen() {
        this.setState({modalOpen: true})
    }

    handleClose() {
        this.setState({modalOpen: false})
    }

    render() {
        return (
            <div>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '200px',
                        width: '1002px',
                        margin: '50px auto'
                    }}
                >
                    {/*<button onClick={this.onButtonClick}>Get selected rows</button>*/}
                    <div className="table_name">Network Vulnerability Scans</div>
                    <AgGridReact
                        // onGridReady={ params => this.gridApi = params.api }
                        // rowSelection="multiple"
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
                <Modal
                    trigger={<Button onClick={this.handleOpen.bind(this)} className="btnOn">Show me</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose.bind(this)}
                    basic
                    size='small'
                    className="modal_window"
                >
                    <Modal.Content>
                        <div
                            className="ag-theme-balham"
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        >
                            {/*<button onClick={this.onButtonClick}>Get selected rows</button>*/}
                            <Table2/>
                            <Table3/>
                            <Table4/>
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleClose.bind(this)} inverted className="btnOff">
                            <Icon name='checkmark'/> Back
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

render(<App />, document.querySelector('#app'));