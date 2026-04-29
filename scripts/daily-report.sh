#!/bin/bash

export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

HTML="/tmp/onixmall-report.html"
PDF="/tmp/onixmall-daily-devops-report.pdf"

FROM="piyush.runtime@gmail.com"
TO="piyush.runtime@gmail.com,piyushprasad8122@gmail.com"
MAIL_TO_DISPLAY="piyush.runtime@gmail.com, piyushprasad8122@gmail.com"
SUBJECT="Onix Mall India | DevOps Report | $(date '+%d-%m-%Y %I:%M %p')"

APP_SERVER_ID="i-0b10756dbcbbc795c"
APP_SERVER_IP="65.0.158.227"
APP_SERVER_AZ="ap-south-1a"

ANSIBLE_SERVER_ID="i-05a68dac6f2725b20"
ANSIBLE_SERVER_IP="35.154.168.44"
ANSIBLE_SERVER_AZ="ap-south-1c"

FRONTEND_URL="https://onixmall.run.place"
API_URL="https://onixmall.run.place/api/malls"
GRAFANA_URL="https://grafana.onixmall.run.place"

DATE=$(date)
HOSTNAME=$(hostname)
UPTIME=$(uptime -p)
PRIVATE_IP=$(hostname -I | awk '{print $1}')

CPU=$(top -bn1 | grep "Cpu(s)")
MEMORY=$(free -h | awk '/Mem:/ {print $3 " used / " $2 " total"}')
DISK=$(df -h / | awk 'NR==2 {print $3 " used / " $2 " total (" $5 ")"}')

NGINX=$(systemctl is-active nginx)
MONGO=$(systemctl is-active mongod)
APP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$FRONTEND_URL")
API_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL")
SSL_EXPIRY=$(echo | openssl s_client -servername onixmall.run.place -connect onixmall.run.place:443 2>/dev/null | openssl x509 -noout -enddate | cut -d= -f2)

PM2_STATUS=$(pm2 jlist 2>/dev/null | jq -r '.[] | "<tr><td>\(.name)</td><td>\(.pm2_env.status)</td><td>\(.pid)</td><td>\(.pm2_env.restart_time)</td><td>\(.monit.cpu)%</td><td>\((.monit.memory/1024/1024)|floor) MB</td></tr>"')
FAILED_LOGIN=$(grep "Failed password" /var/log/auth.log 2>/dev/null | tail -5)

cat > "$HTML" <<EOF
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #ffffff;
  color: #1f2937;
  margin: 40px;
}

.header {
  border-bottom: 4px solid #0f172a;
  padding-bottom: 18px;
  margin-bottom: 28px;
}

.company {
  font-size: 28px;
  font-weight: bold;
  color: #0f172a;
}

.subtitle {
  font-size: 15px;
  color: #475569;
  margin-top: 6px;
}

.report-meta {
  margin-top: 14px;
  font-size: 13px;
  color: #64748b;
}

.section {
  margin-top: 28px;
}

.section-title {
  background: #0f172a;
  color: #ffffff;
  padding: 10px 14px;
  font-size: 16px;
  font-weight: bold;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: #f1f5f9;
  color: #0f172a;
  text-align: left;
  padding: 10px;
  border: 1px solid #cbd5e1;
  font-size: 13px;
}

td {
  padding: 10px;
  border: 1px solid #cbd5e1;
  font-size: 13px;
  word-break: break-word;
}

.status-ok {
  color: #166534;
  font-weight: bold;
}

.status-bad {
  color: #991b1b;
  font-weight: bold;
}

pre {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  padding: 12px;
  font-size: 12px;
  white-space: pre-wrap;
}

.footer {
  margin-top: 40px;
  border-top: 1px solid #cbd5e1;
  padding-top: 12px;
  font-size: 12px;
  color: #64748b;
  text-align: center;
}
</style>
</head>

<body>

<div class="header">
  <div class="company">Onix Mall India</div>
  <div class="subtitle">Daily DevOps Infrastructure Health Report</div>
  <div class="report-meta">
    Generated On: $DATE<br>
    Environment: Production<br>
    Report Type: Automated EC2 Infrastructure Report
  </div>
</div>

<div class="section">
  <div class="section-title">Report Communication Details</div>
  <table>
    <tr><th>Field</th><th>Details</th></tr>
    <tr><td>From</td><td>$FROM</td></tr>
    <tr><td>To</td><td>$MAIL_TO_DISPLAY</td></tr>
    <tr><td>Subject</td><td>$SUBJECT</td></tr>
    <tr><td>Report Name</td><td>Onix Mall India Daily DevOps Infrastructure Report</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-title">1. Executive Summary</div>
  <table>
    <tr><th>Item</th><th>Status</th><th>Details</th></tr>
    <tr><td>Frontend Application</td><td class="status-ok">$APP_STATUS</td><td>$FRONTEND_URL</td></tr>
    <tr><td>Backend API</td><td class="status-ok">$API_STATUS</td><td>$API_URL</td></tr>
    <tr><td>Nginx</td><td class="status-ok">$NGINX</td><td>Reverse proxy and frontend serving</td></tr>
    <tr><td>MongoDB</td><td class="status-ok">$MONGO</td><td>Local database service</td></tr>
    <tr><td>Monitoring</td><td class="status-ok">Active</td><td>$GRAFANA_URL</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-title">2. Infrastructure Overview</div>
  <table>
    <tr>
      <th>Server</th>
      <th>Instance ID</th>
      <th>Public IP</th>
      <th>Availability Zone</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td>Application Server</td>
      <td>$APP_SERVER_ID</td>
      <td>$APP_SERVER_IP</td>
      <td>$APP_SERVER_AZ</td>
      <td>Nginx, React, Node.js, PM2, MongoDB</td>
    </tr>
    <tr>
      <td>Ansible Server</td>
      <td>$ANSIBLE_SERVER_ID</td>
      <td>$ANSIBLE_SERVER_IP</td>
      <td>$ANSIBLE_SERVER_AZ</td>
      <td>CI/CD automation control node</td>
    </tr>
  </table>
</div>

<div class="section">
  <div class="section-title">3. Current Server Health</div>
  <table>
    <tr><th>Metric</th><th>Value</th></tr>
    <tr><td>Hostname</td><td>$HOSTNAME</td></tr>
    <tr><td>Private IP</td><td>$PRIVATE_IP</td></tr>
    <tr><td>Uptime</td><td>$UPTIME</td></tr>
    <tr><td>CPU Usage</td><td>$CPU</td></tr>
    <tr><td>Memory Usage</td><td>$MEMORY</td></tr>
    <tr><td>Disk Usage</td><td>$DISK</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-title">4. Application URLs</div>
  <table>
    <tr><th>Service</th><th>URL</th><th>HTTP Status</th></tr>
    <tr><td>Frontend</td><td>$FRONTEND_URL</td><td>$APP_STATUS</td></tr>
    <tr><td>Backend API</td><td>$API_URL</td><td>$API_STATUS</td></tr>
    <tr><td>Grafana Dashboard</td><td>$GRAFANA_URL</td><td>Monitoring Dashboard</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-title">5. SSL Certificate</div>
  <table>
    <tr><th>Domain</th><th>Certificate Expiry</th></tr>
    <tr><td>onixmall.run.place</td><td>$SSL_EXPIRY</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-title">6. PM2 Backend Process Status</div>
  <table>
    <tr>
      <th>Process Name</th>
      <th>Status</th>
      <th>PID</th>
      <th>Restarts</th>
      <th>CPU</th>
      <th>Memory</th>
    </tr>
    ${PM2_STATUS:-<tr><td colspan="6">PM2 data not available</td></tr>}
  </table>
</div>

<div class="section">
  <div class="section-title">7. Security Snapshot</div>
  <pre>${FAILED_LOGIN:-No failed SSH login attempts found}</pre>
</div>

<div class="footer">
  This report was generated automatically by the Onix Mall India daily cron job.
</div>

</body>
</html>
EOF

wkhtmltopdf "$HTML" "$PDF"

echo "Please find attached the Onix Mall India Daily DevOps Infrastructure Report." | mutt -s "$SUBJECT" -a "$PDF" -- "$TO"
