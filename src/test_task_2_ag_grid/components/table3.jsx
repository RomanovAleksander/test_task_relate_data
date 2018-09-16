import * as React from 'react';
// import {AgGridReact} from 'ag-grid-react';

export class Table3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {headerName: "CVE ID", field: "cveID"},
                {headerName: "CVSS", field: "cvss"},
                {headerName: "CVE Description", field: "cveDescription"},
                {headerName: "CVE Vector", field: "cveVector"},
            ],
            rowData: [
                {
                    "cveID": "CVE-2004-2284",
                    "authentication": "NONE",
                    "confidentialityImpact": "COMPLETE",
                    "integrityImpact": "COMPLETE",
                    "availabilityImpact": "COMPLETE",
                    "cvss": "10.0",
                    "creationTime": 1104469200000,
                    "modificationTime": 1499736706047,
                    "cveDescription": "The read_list_from_file function in vacation.pl for OpenWebmail before 2.32 20040629 allows remote attackers to execute arbitrary commands via shell metacharacters in a filename argument.",
                    "cveVector": "NETWORK",
                    "cveComplexity": "LOW"
                },
                {
                    "cveID": "CVE-2014-2284",
                    "authentication": "NONE",
                    "confidentialityImpact": "NONE",
                    "integrityImpact": "NONE",
                    "availabilityImpact": "PARTIAL",
                    "cvss": "5.0",
                    "cpeInfo": [
                        {
                            "creationDate": 1387213635000,
                            "modificationDate": 1387213635000,
                            "cpeName": "cpe:/a:net-snmp:net-snmp:5.5",
                            "cpeTitle": "Net-SNMP Net-SNMP 5.5",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1387213635000,
                            "modificationDate": 1387213635000,
                            "cpeName": "cpe:/a:net-snmp:net-snmp:5.6",
                            "cpeTitle": "Net-SNMP Net-SNMP 5.6",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1387213635000,
                            "modificationDate": 1387213635000,
                            "cpeName": "cpe:/a:net-snmp:net-snmp:5.7",
                            "cpeTitle": "Net-SNMP Net-SNMP 5.7",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1387213637000,
                            "modificationDate": 1387213637000,
                            "cpeName": "cpe:/a:net-snmp:net-snmp:5.7.1",
                            "cpeTitle": "Net-SNMP Net-SNMP 5.7.1",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1387213635000,
                            "modificationDate": 1387213635000,
                            "cpeName": "cpe:/a:net-snmp:net-snmp:5.7.2",
                            "cpeTitle": "Net-SNMP Net-SNMP 5.7.2",
                            "cpeStatus": "FINAL"
                        }
                    ],
                    "creationTime": 1395636182177,
                    "modificationTime": 1410585927697,
                    "cveDescription": "The Linux implementation of the ICMP-MIB in Net-SNMP 5.5 before 5.5.2.1, 5.6.x before 5.6.2.1, and 5.7.x before 5.7.2.1 does not properly validate input, which allows remote attackers to cause a denial of service via unspecified vectors.",
                    "cveVector": "NETWORK",
                    "cveComplexity": "LOW"
                },
                {
                    "cveID": "CVE-2014-0505",
                    "authentication": "NONE",
                    "confidentialityImpact": "COMPLETE",
                    "integrityImpact": "COMPLETE",
                    "availabilityImpact": "COMPLETE",
                    "cvss": "10.0",
                    "cpeInfo": [
                        {
                            "creationDate": 1360854261000,
                            "modificationDate": 1360854261000,
                            "cpeName": "cpe:/a:adobe:shockwave_player:12.0.0.112",
                            "cpeTitle": "Adobe Shockwave Player 12.0.0.112",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1373653692000,
                            "modificationDate": 1373653692000,
                            "cpeName": "cpe:/a:adobe:shockwave_player:12.0.2.122",
                            "cpeTitle": "Adobe Shockwave Player 12.0.2.122",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1373653692000,
                            "modificationDate": 1373653692000,
                            "cpeName": "cpe:/a:adobe:shockwave_player:12.0.3.133",
                            "cpeTitle": "Adobe Shockwave Player 12.0.3.133",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1378997379000,
                            "modificationDate": 1378997379000,
                            "cpeName": "cpe:/a:adobe:shockwave_player:12.0.4.144",
                            "cpeTitle": "Adobe Shockwave Player 12.0.4.144",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1386873786000,
                            "modificationDate": 1386873786000,
                            "cpeName": "cpe:/a:adobe:shockwave_player:12.0.6.147",
                            "cpeTitle": "Adobe Shockwave Player 12.0.6.147",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1386873786000,
                            "modificationDate": 1386873786000,
                            "cpeName": "cpe:/a:adobe:shockwave_player:12.0.7.148",
                            "cpeTitle": "Adobe Shockwave Player 12.0.7.148",
                            "cpeStatus": "FINAL"
                        },
                        {
                            "creationDate": 1394821334000,
                            "modificationDate": 1394821334000,
                            "cpeName": "cpe:/a:adobe:shockwave_player:12.0.9.149",
                            "cpeTitle": "Adobe Shockwave Player 12.0.9.149",
                            "cpeStatus": "FINAL"
                        }
                    ],
                    "creationTime": 1394794505600,
                    "modificationTime": 1394816862850,
                    "cveDescription": "Adobe Shockwave Player before 12.1.0.150 allows remote attackers to execute arbitrary code or cause a denial of service (memory corruption) via unspecified vectors.",
                    "cveVector": "NETWORK",
                    "cveComplexity": "LOW"
                }
            ]
        }
    }

    // componentDidMount() {
    //     fetch('http://5b9bd9638d1635001482cd72.mockapi.io/cves')
    //         .then(result => result.json())
    //         .then(rowData => this.setState({rowData}))
    // }

    render() {
        return (
            <div>
                <div className="table_name_3">CVE Information</div>
                <table style={{marginBottom: '18px'}}>
                    <tbody>
                    <tr>
                        <td>CVE ID:</td>
                        {this.state.rowData.map((index) => {
                            return <td key={index.cveID}>{index.cveID}</td>
                        })}
                    </tr>
                    <tr>
                        <td>CVSS:</td>
                        {this.state.rowData.map((index) => {
                            return <td key={index.cveID}>{index.cvss}</td>
                        })}
                    </tr>
                    <tr>
                        <td>CVE Description:</td>
                        {this.state.rowData.map((index) => {
                            return <td key={index.cveID}><div className="table_tr">{index.cveDescription}</div></td>
                        })}
                    </tr>
                    <tr>
                        <td>CVE Vector:</td>
                        {this.state.rowData.map((index) => {
                            return <td key={index.cveID}>{index.cveVector}</td>
                        })}
                    </tr>
                    </tbody>
                </table>
                {/*<div*/}
                {/*className="ag-theme-balham"*/}
                {/*style={{*/}
                {/*height: '118px',*/}
                {/*width: '100%',*/}
                {/*marginBottom: '40px'*/}
                {/*}}*/}
                {/*>*/}
                {/*/!*<button onClick={this.onButtonClick}>Get selected rows</button>*!/*/}
                {/*<div className="table_name">CVE Information</div>*/}
                {/*<AgGridReact*/}
                {/*// onGridReady={ params => this.gridApi = params.api }*/}
                {/*// rowSelection="multiple"*/}
                {/*enableSorting={true}*/}
                {/*enableFilter={true}*/}
                {/*columnDefs={this.state.columnDefs}*/}
                {/*rowData={this.state.rowData}>*/}
                {/*</AgGridReact>*/}
                {/*</div>*/}
            </div>
        );
    }
}
