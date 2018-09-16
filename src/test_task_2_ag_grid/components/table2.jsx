import * as React from 'react';
import {AgGridReact} from 'ag-grid-react';

export class Table2 extends React.Component {
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
            ],
            rowData: [
                {
                    "OID": "1.3.6.1.4.1.25623.1.0.12200",
                    "nvtVersion": "Revision: 9348",
                    "nvtName": "Incomplete basic authentication DoS",
                    "nvtFamily": "Denial of Service",
                    "bugTrackingId": "NOBID",
                    "nvtCategory": "denial",
                    "requiredTcpPorts": [
                        "80"
                    ],
                    "requiredUdpPorts": [],
                    "requiredServices": [
                        "www"
                    ],
                    "xref": "N/A",
                    "cvssBaseVector": "AV:N/AC:L/Au:N/C:P/I:P/A:P",
                    "cvssBaseNumber": 7.5,
                    "solutionType": "N/A",
                    "solution": "upgrade your software or protect it with a filtering reverse proxy",
                    "vulnerabilityInsight": [],
                    "detectionMethod": "N/A",
                    "qodNumber": 99,
                    "qodDescription": "Remote active checks (code execution, traversal attack, sql injection etc.) where the response clearly shows the presence of the vulnerability.",
                    "qodType": "remote_vul",
                    "deprecated": false,
                    "creationTime": 1131023284000,
                    "modificationTime": 1522998079000,
                    "NvtScanPreferences": [],
                    "nvtTagInfo": {},
                    "nvtSummary": "It was possible to kill the web server bysending an invalid request with an incomplete Basic authentication.A cracker may exploit this vulnerability to make your web servercrash continually or even execute arbirtray code on your system.",
                    "nvtCVES": [],
                    "nvtImpact": "N/A",
                    "nvtImpactLevel": "N/A",
                    "affectedSoftwareOrOS": "N/A",
                    "nvtScriptReference": "www_incomplete_auth_DoS.nasl"
                },
                {
                    "OID": "1.3.6.1.4.1.25623.1.0.12637",
                    "nvtVersion": "Revision: 9045",
                    "nvtName": "Open WebMail vacation.pl Arbitrary Command Execution",
                    "nvtFamily": "Gain a shell remotely",
                    "bugTrackingId": "10637",
                    "nvtCategory": "mixed_attack",
                    "requiredTcpPorts": [
                        "80"
                    ],
                    "requiredUdpPorts": [],
                    "requiredServices": [
                        "www"
                    ],
                    "xref": "OSVDB:7474, URL:http://www.openwebmail.org/openwebmail/download/cert/advisories/SA-04:04.txt",
                    "cvssBaseVector": "AV:N/AC:L/Au:N/C:C/I:C/A:C",
                    "cvssBaseNumber": 10,
                    "solutionType": "VendorFix",
                    "solution": "Upgrade to Open WebMail version 2.32 20040629 or later.",
                    "vulnerabilityInsight": [
                        {
                            "insight": "If safe_checks are disabled, OpenVAS attempts to create the file   /tmp/openvas_openwebmail_vacation_input_validation on the target.",
                            "cveReference": "N/A"
                        }
                    ],
                    "detectionMethod": "N/A",
                    "qodNumber": 80,
                    "qodDescription": "Remote banner check of applications that offer patch level in version. Many proprietary products do so.",
                    "qodType": "remote_banner",
                    "deprecated": false,
                    "creationTime": 1131023284000,
                    "modificationTime": 1520430745000,
                    "NvtScanPreferences": [],
                    "nvtTagInfo": {},
                    "nvtSummary": "The target is running at least one instance of Open WebMail in which  the vacation.pl component fails to sufficiently validate user input.",
                    "nvtCVES": [
                        "CVE-2004-2284"
                    ],
                    "nvtImpact": "This failure enables remote attackers to execute arbitrary programs on  a target using the privileges under which the web server operates.",
                    "nvtImpactLevel": "N/A",
                    "affectedSoftwareOrOS": "N/A",
                    "nvtScriptReference": "openwebmail_vacation_input_validation.nasl"
                },
                {
                    "OID": "1.3.6.1.4.1.25623.1.0.51662",
                    "nvtVersion": "Revision: 10411",
                    "nvtName": "Traceroute",
                    "nvtFamily": "General",
                    "bugTrackingId": "NOBID",
                    "nvtCategory": "gather_info",
                    "requiredTcpPorts": [],
                    "requiredUdpPorts": [],
                    "requiredServices": [],
                    "xref": "N/A",
                    "cvssBaseVector": "AV:N/AC:L/Au:N/C:N/I:N/A:N",
                    "cvssBaseNumber": 0,
                    "solutionType": "N/A",
                    "solution": "Block unwanted packets from escaping your network.",
                    "vulnerabilityInsight": [],
                    "detectionMethod": "N/A",
                    "qodNumber": 80,
                    "qodDescription": "Remote banner check of applications that offer patch level in version. Many proprietary products do so.",
                    "qodType": "remote_banner",
                    "deprecated": false,
                    "creationTime": 1278610065000,
                    "modificationTime": 1530742510000,
                    "NvtScanPreferences": [],
                    "nvtTagInfo": {},
                    "nvtSummary": "A traceroute from the scanning server to the target system was  conducted. This traceroute is provided primarily for informational value only. In the vast  majority of cases, it does not represent a vulnerability. However, if the displayed traceroute  contains any private addresses that should not have been publicly visible, then you have an  issue you need to correct.",
                    "nvtCVES": [],
                    "nvtImpact": "N/A",
                    "nvtImpactLevel": "N/A",
                    "affectedSoftwareOrOS": "N/A",
                    "nvtScriptReference": "secspace_traceroute.nasl"
                },
                {
                    "OID": "1.3.6.1.4.1.25623.1.0.02602",
                    "nvtVersion": "Revision: 7029",
                    "nvtName": "CubeCart Multiple XSS and SQL Injection Vulnerability",
                    "nvtFamily": "Web application abuses",
                    "bugTrackingId": "48265",
                    "nvtCategory": "attack",
                    "requiredTcpPorts": [
                        "80"
                    ],
                    "requiredUdpPorts": [],
                    "requiredServices": [
                        "www"
                    ],
                    "xref": "URL:http://xforce.iss.net/xforce/xfdb/68023, URL:http://xforce.iss.net/xforce/xfdb/68022, URL:http://packetstormsecurity.org/files/view/102236/cubecart207-sqlxss.txt",
                    "cvssBaseVector": "AV:N/AC:L/Au:N/C:P/I:P/A:P",
                    "cvssBaseNumber": 7.5,
                    "solutionType": "WillNotFix",
                    "solution": "No solution or patch was made available for at least one year  since disclosure of this vulnerability. Likely none will be provided anymore.  General solution options are to upgrade to a newer release, disable respective  features, remove the product or replace the product by another one.",
                    "vulnerabilityInsight": [
                        {
                            "insight": "Multiple flaws are due to   - An improper validation of user-supplied input to the 'cat_id' parameter in   index.php, 'product' parameter in view_product.php and the 'add' parameter   in view_cart.php, which allows attacker to manipulate SQL queries.   - An improper validation of user-supplied input in search.php, which allows   attackers to execute arbitrary HTML and script code on the web server.",
                            "cveReference": "N/A"
                        }
                    ],
                    "detectionMethod": "N/A",
                    "qodNumber": 98,
                    "qodDescription": "Remote active checks (code execution, traversal attack, sql injection etc.) where the response clearly shows the presence of the vulnerable application.",
                    "qodType": "remote_app",
                    "deprecated": false,
                    "creationTime": 1309529385000,
                    "modificationTime": 1504180300000,
                    "NvtScanPreferences": [],
                    "nvtTagInfo": {},
                    "nvtSummary": "The host is running CubeCart and is prone to XSS and SQL  injection vulnerability.",
                    "nvtCVES": [
                        "CVE-2014-2284"
                    ],
                    "nvtImpact": "Successful exploitation will allow attacker to gain sensitive  information, execute arbitrary scripts and execute SQL query.  Impact Level: Application",
                    "nvtImpactLevel": "Application",
                    "affectedSoftwareOrOS": "CubeCart version 2.0.7",
                    "nvtScriptReference": "secpod_cubecart_mult_xss_and_sql_inj_vuln.nasl"
                },
                {
                    "OID": "1.3.6.1.4.1.25623.1.0.804517",
                    "nvtVersion": "Revision: 6724",
                    "nvtName": "Adobe Shockwave Player Memory Corruption Vulnerability Mar14 (Windows)",
                    "nvtFamily": "General",
                    "bugTrackingId": "66182",
                    "nvtCategory": "gather_info",
                    "requiredTcpPorts": [],
                    "requiredUdpPorts": [],
                    "requiredServices": [],
                    "xref": "URL:http://secunia.com/advisories/57277, URL:https://www.hkcert.org/my_url/en/alert/14031701, URL:http://helpx.adobe.com/security/products/shockwave/apsb14-10.html",
                    "cvssBaseVector": "AV:N/AC:L/Au:N/C:C/I:C/A:C",
                    "cvssBaseNumber": 10,
                    "solutionType": "VendorFix",
                    "solution": "Upgrade to version 12.1.0.150 or later,For updates refer to http://get.adobe.com/shockwave",
                    "vulnerabilityInsight": [
                        {
                            "insight": "Flaw is due to an unspecified error.",
                            "cveReference": "N/A"
                        }
                    ],
                    "detectionMethod": "Get the installed version with the help of detect NVT and check the version\nis vulnerable or not.",
                    "qodNumber": 97,
                    "qodDescription": "Authenticated registry-based checks for Windows systems.",
                    "qodType": "registry",
                    "deprecated": false,
                    "creationTime": 1395390897000,
                    "modificationTime": 1500026237000,
                    "NvtScanPreferences": [],
                    "nvtTagInfo": {},
                    "nvtSummary": "This host is installed with Adobe Shockwave Player and is prone to memorycorruption vulnerability.",
                    "nvtCVES": [
                        "CVE-2014-0505"
                    ],
                    "nvtImpact": "Successful exploitation will allow attackers to execute arbitrary code, causememory corruption and compromise a user's system.Impact Level: System/Application",
                    "nvtImpactLevel": "System/Application",
                    "affectedSoftwareOrOS": "Adobe Shockwave Player version before 12.1.0.150 on Windows.",
                    "nvtScriptReference": "gb_adobe_shockwave_mem_cor_vuln01_mar14_win.nasl"
                }
            ]
        }
    }

    // componentDidMount() {
    //     fetch('http://5b9bd9638d1635001482cd72.mockapi.io/nvts')
    //         .then(result => result.json())
    //         .then(rowData => this.setState({rowData}))
    // }

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
