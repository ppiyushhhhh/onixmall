#!/bin/bash

export PATH=/usr/local/bin:/usr/bin:/bin
set -e

PROJECT_DIR="/home/ubuntu/onixmall"
HTML_REPORT="/home/ubuntu/trivy-report.html"
PDF_REPORT="/home/ubuntu/trivy-report.pdf"
JSON_REPORT="/home/ubuntu/trivy-report.json"
DATE=$(date "+%Y-%m-%d %H:%M:%S")
EMAIL="piyushprasad8122@gmail.com"

cd "$PROJECT_DIR" || exit

trivy fs -f json -o "$JSON_REPORT" .

LOW=$(jq '[.Results[].Vulnerabilities[]? | select(.Severity=="LOW")] | length' "$JSON_REPORT")
MEDIUM=$(jq '[.Results[].Vulnerabilities[]? | select(.Severity=="MEDIUM")] | length' "$JSON_REPORT")
HIGH=$(jq '[.Results[].Vulnerabilities[]? | select(.Severity=="HIGH")] | length' "$JSON_REPORT")
CRITICAL=$(jq '[.Results[].Vulnerabilities[]? | select(.Severity=="CRITICAL")] | length' "$JSON_REPORT")
TOTAL=$((LOW+MEDIUM+HIGH+CRITICAL))

if [ "$CRITICAL" -gt 0 ]; then
  STATUS="Critical Risk Detected"
  STATUS_CLASS="danger"
elif [ "$HIGH" -gt 0 ]; then
  STATUS="High Risk Detected"
  STATUS_CLASS="danger"
elif [ "$MEDIUM" -gt 0 ]; then
  STATUS="Medium Risk Present"
  STATUS_CLASS="warning"
elif [ "$LOW" -gt 0 ]; then
  STATUS="Low Risk Present"
  STATUS_CLASS="warning"
else
  STATUS="System Secure - No vulnerabilities detected"
  STATUS_CLASS="clean"
fi

cat <<EOF > "$HTML_REPORT"
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body {
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  padding: 30px;
  color: #1f2937;
}
.container {
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}
.header {
  border-bottom: 3px solid #2c3e50;
  padding-bottom: 15px;
  margin-bottom: 25px;
}
h1 {
  color: #2c3e50;
  margin: 0;
  font-size: 30px;
}
.meta {
  margin-top: 10px;
  font-size: 14px;
  color: #4b5563;
}
h2 {
  color: #34495e;
  margin-top: 25px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  font-size: 14px;
}
th {
  background: #2c3e50;
  color: white;
  padding: 12px;
  text-align: center;
}
td {
  padding: 12px;
  border: 1px solid #e5e7eb;
  text-align: center;
}
.clean {
  color: #15803d;
  font-weight: bold;
}
.warning {
  color: #b45309;
  font-weight: bold;
}
.danger {
  color: #b91c1c;
  font-weight: bold;
}
.status-box {
  margin-top: 15px;
  padding: 14px;
  border-radius: 8px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  font-size: 16px;
}
.footer {
  margin-top: 30px;
  font-size: 12px;
  color: #6b7280;
}
</style>
</head>

<body>
<div class="container">

  <div class="header">
    <h1>OnixMall Security Report</h1>
    <div class="meta">
      <b>Project:</b> Onix Mall<br>
      <b>Generated On:</b> $DATE<br>
      <b>Tool:</b> Trivy Filesystem Scan
    </div>
  </div>

  <h2>Vulnerability Summary</h2>

  <table>
    <tr>
      <th>Severity</th>
      <th>Count</th>
    </tr>
    <tr>
      <td>LOW</td>
      <td>$LOW</td>
    </tr>
    <tr>
      <td>MEDIUM</td>
      <td>$MEDIUM</td>
    </tr>
    <tr>
      <td>HIGH</td>
      <td>$HIGH</td>
    </tr>
    <tr>
      <td>CRITICAL</td>
      <td>$CRITICAL</td>
    </tr>
    <tr>
      <td><b>Total Vulnerabilities</b></td>
      <td><b>$TOTAL</b></td>
    </tr>
  </table>

  <h2>Overall Status</h2>
  <div class="status-box">
    <span class="$STATUS_CLASS">$STATUS</span>
  </div>

  <h2>Scan Scope</h2>
  <table>
    <tr>
      <th>Target</th>
      <th>Scan Type</th>
      <th>Status</th>
    </tr>
    <tr>
      <td>OnixMall Project Directory</td>
      <td>Filesystem + NPM Dependency Scan</td>
      <td class="$STATUS_CLASS">$STATUS</td>
    </tr>
  </table>

  <div class="footer">
    This report was generated automatically by the OnixMall EC2 cron security scan.
  </div>

</div>
</body>
</html>
EOF

wkhtmltopdf "$HTML_REPORT" "$PDF_REPORT"

echo "Daily OnixMall Trivy Security Report is attached.

Summary:
LOW: $LOW
MEDIUM: $MEDIUM
HIGH: $HIGH
CRITICAL: $CRITICAL
TOTAL: $TOTAL" | mail -s "Daily OnixMall Trivy Security Report" -A "$PDF_REPORT" "$EMAIL"

if [ "$TOTAL" -gt 0 ]; then

  if [ "$CRITICAL" -gt 0 ]; then
    SUBJECT="CRITICAL ALERT: OnixMall Security Risk"
  elif [ "$HIGH" -gt 0 ]; then
    SUBJECT="HIGH ALERT: OnixMall Vulnerability"
  elif [ "$MEDIUM" -gt 0 ]; then
    SUBJECT="MEDIUM ALERT: OnixMall Security Issue"
  else
    SUBJECT="LOW ALERT: OnixMall Minor Vulnerability"
  fi

  echo "Security vulnerabilities detected in OnixMall.

Summary:
LOW: $LOW
MEDIUM: $MEDIUM
HIGH: $HIGH
CRITICAL: $CRITICAL
TOTAL: $TOTAL

Please check the attached PDF report." | mail -s "$SUBJECT" -A "$PDF_REPORT" "$EMAIL"

fi
