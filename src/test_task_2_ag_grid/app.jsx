import * as React from 'react';
import {render} from 'react-dom';

import {AgGridReact} from 'ag-grid-react';
import "./test_task_2_ag_grid.scss";

import {Button, Icon, Modal} from 'semantic-ui-react'

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
            ]
        }
    }

    componentDidMount() {
        fetch('http://5b9bd9638d1635001482cd72.mockapi.io/results')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

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
                    <div className="table_name">Network Vulnerability	Scans</div>
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

class Table2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "NVT Name", field: "nvtName",},
                {headerName: "NVT Version", field: "nvtVersion"},
                {headerName: "Nvt Family", field: "nvtFamily"},
                {headerName: "Bug Tracking Id", field: "bugTrackingId"},
                {headerName: "NVT Category", field: "nvtCategory"},
                {headerName: "xRef", field: "xref"},
                {headerName: "Cvss Base Vector", field: "cvssBaseVector"},
                {headerName: "Cvss Base Number", field: "cvssBaseNumber"},
                {headerName: "Solution Type", field: "solutionType"},
                {headerName: "Solution", field: "solution"},
                {headerName: "Insight", field: "vulnerabilityInsight"},
                {headerName: "Detection Method", field: "detectionMethod"},
                {headerName: "QOD Number", field: "qodNumber"},
                {headerName: "QOD Type", field: "qodType"},
                {headerName: "NVT Summary", field: "nvtSummary"},
                {headerName: "NVT Impact", field: "nvtImpact"},
                {headerName: "NVT Impact Level", field: "nvtImpactLevel"},
                {headerName: "Affected Software or OS", field: "affectedSoftwareOrOS"},
            ]
        }
    }

    componentDidMount() {
        fetch('http://5b9bd9638d1635001482cd72.mockapi.io/nvts')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

    render() {
        return (
            <div>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '212px',
                        width: '100%',
                        marginBottom: '40px'
                    }}
                >
                    {/*<button onClick={this.onButtonClick}>Get selected rows</button>*/}
                    <div className="table_name">NVT Information</div>
                    <AgGridReact
                        // onGridReady={ params => this.gridApi = params.api }
                        // rowSelection="multiple"
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

class Table3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "CVE ID", field: "cveID",},
                {headerName: "CVSS", field: "cvss"},
                {headerName: "CVE Description", field: "cveDescription"},
                {headerName: "CVE Vector", field: "cveVector"},
            ]
        }
    }

    componentDidMount() {
        fetch('http://5b9bd9638d1635001482cd72.mockapi.io/cves')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

    render() {
        return (
            <div>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '118px',
                        width: '100%',
                        marginBottom: '40px'
                    }}
                >
                    {/*<button onClick={this.onButtonClick}>Get selected rows</button>*/}
                    <div className="table_name">CVE Information</div>
                    <AgGridReact
                        // onGridReady={ params => this.gridApi = params.api }
                        // rowSelection="multiple"
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

class Table4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "CPE Name", field: "cpeName",},
                {headerName: "CPE Title", field: "cpeTitle",}
            ]
        }
    }

    componentDidMount() {
        fetch('http://5b9bd9638d1635001482cd72.mockapi.io/cves')
            .then(result => result.json())
            .then(rowData => this.setState({rowData}))
    }

    render() {
        return (
            <div>
                <div
                    className="ag-theme-balham"
                    style={{
                        height: '118px',
                        width: '51%'
                    }}
                >
                    {/*<button onClick={this.onButtonClick}>Get selected rows</button>*/}
                    <div className="table_name">CPE Name</div>
                    <AgGridReact
                        // onGridReady={ params => this.gridApi = params.api }
                        // rowSelection="multiple"
                        enableSorting={true}
                        enableFilter={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}

function Page() {
    return (
        <div className="page">
            <App/>
        </div>
    )
}

render(<Page/>, document.querySelector('#app'));