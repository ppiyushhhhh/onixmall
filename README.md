Onix Mall India – Full Stack DevOps Project

Author
Piyush Prasad
Aspiring Cloud & DevOps Engineer

Overview
Onix Mall India is a production-style full-stack web application deployed on AWS EC2.
The project demonstrates how modern DevOps practices are applied in a real-world environment, covering deployment, automation, monitoring, security, and reporting.
Key focus areas:


CI/CD automation


Infrastructure deployment on AWS


Monitoring and observability


Security best practices


Automated reporting system



Live Services
ServiceURLWebsitehttps://onixmall.run.placeAPI Endpointhttps://onixmall.run.place/api/mallsGrafana Dashboardhttps://grafana.onixmall.run.place

Technology Stack
LayerTechnologyFrontendReact (Vite), TypeScript, Tailwind CSSBackendNode.js, Express.jsDatabaseMongoDB (Localhost on EC2)InfrastructureAWS EC2 (Ubuntu), NginxProcess ManagerPM2CI/CDGitHub Actions, AnsibleMonitoringPrometheus, Node Exporter, GrafanaReportingBash, Cron, wkhtmltopdf, Mutt, jq

Architecture
The system follows a CI/CD-driven deployment pipeline:
GitHub → GitHub Actions → Ansible Server → EC2 → Nginx → Backend API → MongoDB


Frontend is served via Nginx


Backend runs using PM2


MongoDB is restricted to localhost for security



Infrastructure Setup
The project uses a multi-server architecture to simulate a production environment.
ServerPurposeAvailability ZonePublic IPAnsible ServerCI/CD control nodeap-south-1c35.154.168.44Application ServerHosts frontend, backend, databaseap-south-1a65.0.158.227

Key Features


Full-stack application deployed on AWS


Automated CI/CD pipeline


Secure backend and database configuration


Real-time monitoring dashboards


Automated PDF reporting system



Security Implementation
Security is implemented at multiple layers:


HTTPS enabled using Certbot


Nginx reverse proxy configuration


UFW firewall with restricted ports


MongoDB bound to localhost


SSH key-based authentication


API rate limiting


GitHub security features (Dependabot, CodeQL)



Monitoring and Observability
Monitoring is implemented using industry-standard tools:


Prometheus – collects metrics


Node Exporter – exposes system data


Grafana – visualizes data through dashboards


Metrics Monitored


CPU usage


Memory usage


Disk usage


Network traffic


Server uptime



CI/CD Pipeline
PipelineDescriptionMain PipelineAuto deploy on push to main branchBackup PipelineManual deployment fallback
Deployment Flow


Code is pushed to GitHub


GitHub Actions workflow is triggered


Ansible connects to the EC2 instance


Application is deployed


Backend restarts using PM2


Nginx serves the updated version



Branching Strategy
BranchPurposemainProduction deploymenttestingSafe testing before production
Workflow:
testing → validate → merge → main → deploy

Project Structure
FolderDescriptionsrcFrontend source codebackendAPI serverdistProduction buildscriptsDevOps automation scripts.github/workflowsCI/CD pipelines

Automated Reporting System
The project includes a corporate-style automated reporting system that generates PDF reports and sends them via email.
Functionality


Collects real-time server metrics


Checks application and API health


Monitors services (Nginx, MongoDB, PM2)


Generates structured PDF reports


Sends reports to multiple recipients



Schedule
TimeReport08:00 AMMorning infrastructure report07:00 PMEvening infrastructure report

Report Includes


Server health (CPU, Memory, Disk)


Application status


Service health


SSL certificate expiry


Infrastructure overview


Security logs (failed SSH attempts)


PM2 process monitoring



Manual Execution
bash scripts/daily-report.sh

Cron Configuration
0 8,19 * * * /bin/bash /home/ubuntu/daily-report.sh >> /home/ubuntu/report.log 2>&1

Database Configuration
ComponentValueHost127.0.0.1Port27017Databaseonixmall

API Example
GET /api/malls
Returns mall data such as name and city.

DNS Configuration
TypeNamePurposeA@Main domainAwwwWebsiteAgrafanaMonitoringCNAMEapiAPI routing
SSL Mode: Full (Strict)

Key Learnings


AWS EC2 deployment


Nginx reverse proxy configuration


CI/CD automation using GitHub Actions and Ansible


Monitoring with Prometheus and Grafana


Security best practices


Automation using cron jobs


Real-world debugging and issue handling



Future Improvements


Authentication system


Admin dashboard


Payment integration


Docker and Kubernetes


Alerting system



Conclusion
This project demonstrates a complete DevOps workflow including:
Deployment → Automation → Monitoring → Security → Reporting

Support
If you find this project useful, consider giving it a star ⭐

After adding README
git add README.mdgit commit -m "Added professional README"git push origin testing

If you want next level upgrade (recommended for recruiters):


Add architecture diagram image


Add Grafana + PDF screenshots


Add badges (CI/CD, uptime)


Just tell me 👍
