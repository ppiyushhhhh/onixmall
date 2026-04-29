Onix Mall India – Full Stack DevOps Project
Author

Piyush Prasad
Aspiring Cloud & DevOps Engineer

Project Overview

Onix Mall India is a production-style full-stack web application that simulates a real-world mall ecosystem.

This project is designed to demonstrate how modern DevOps practices are applied in a real environment, covering deployment, automation, monitoring, security, and reporting.

Key focus areas include:

CI/CD automation
Infrastructure deployment on AWS
Monitoring and observability
Security best practices
Automated reporting system
Live Links
Service	URL
Website	https://onixmall.run.place

API Endpoint	https://onixmall.run.place/api/malls

Grafana Dashboard	https://grafana.onixmall.run.place
Tech Stack

The application is built using a modern full-stack and DevOps toolchain:

Layer	Technology
Frontend	React (Vite), TypeScript, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB (running locally on EC2)
Infrastructure	AWS EC2 (Ubuntu), Nginx
CI/CD	GitHub Actions, Ansible
Monitoring	Prometheus, Node Exporter, Grafana
Reporting	Bash, Cron, wkhtmltopdf, Mutt
Architecture

The system follows a CI/CD-driven deployment pipeline:

GitHub → GitHub Actions → Ansible Server → EC2 → Nginx → Backend API → MongoDB

The frontend is served via Nginx
Backend runs using PM2
MongoDB is restricted to localhost for security
Infrastructure Setup

The project uses a multi-server architecture to simulate production environments.

Server	Purpose	Availability Zone	Public IP
Ansible Server	CI/CD control node	ap-south-1c	35.154.168.44
Application Server	Hosts frontend, backend, database	ap-south-1a	65.0.158.227
The Ansible server handles deployments
The application server runs the full stack
Features

This project includes:

Full-stack application deployment on AWS
Automated CI/CD pipeline
Secure backend and database setup
Real-time monitoring dashboards
Automated infrastructure reporting
Security Implementation

Security is implemented at multiple layers:

HTTPS enabled using Certbot
Nginx reverse proxy configuration
UFW firewall (only required ports open)
MongoDB restricted to localhost
SSH key-based authentication
API rate limiting
GitHub security features (Dependabot, CodeQL)
Monitoring and Observability

Monitoring is implemented using a standard DevOps stack:

Prometheus collects metrics
Node Exporter exposes system-level data
Grafana provides visualization dashboards
Metrics Monitored
CPU usage
Memory usage
Disk usage
Network traffic
Server uptime
CI/CD Pipeline

The deployment process is fully automated.

Pipeline	Description
Main Pipeline	Auto deployment on push to main
Backup Pipeline	Manual deployment if needed
Deployment Flow
Code is pushed to GitHub
GitHub Actions pipeline is triggered
Ansible connects to EC2
Application is deployed
Backend restarts using PM2
Nginx serves updated application
Branching Strategy
Branch	Purpose
main	Production deployment
testing	Safe testing before production

Workflow followed:

testing → validate → merge → main → deploy

Project Structure
Folder	Description
src	Frontend source code
backend	API server
dist	Production build
scripts	DevOps automation scripts
.github/workflows	CI/CD pipelines
Automated Reporting System

A key feature of this project is the automated reporting system.

It generates corporate-style PDF reports and sends them via email without manual intervention.

What it does
Collects real-time server data
Checks application and API status
Tracks service health (Nginx, MongoDB, PM2)
Generates structured PDF reports
Sends reports to multiple recipients
Schedule
Time	Report
08:00 AM	Morning report
07:00 PM	Evening report
Report Includes
Server health (CPU, Memory, Disk)
Application status
Service status
SSL certificate expiry
Infrastructure overview
Security logs (failed SSH attempts)
PM2 process monitoring
Manual Execution
bash scripts/daily-report.sh
Cron Configuration
0 8,19 * * * /bin/bash /home/ubuntu/daily-report.sh >> /home/ubuntu/report.log 2>&1
Database Configuration

MongoDB runs locally on the application server and is only accessible by the backend.

Component	Value
Host	127.0.0.1
Port	27017
Database	onixmall
API Example

Endpoint: /api/malls

Returns mall data such as name and city.

DNS Configuration
Type	Name	Purpose
A	@	Main domain
A	www	Website
A	grafana	Monitoring
CNAME	api	API routing

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
