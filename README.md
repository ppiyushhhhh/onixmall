k# Onix Mall India – Full Stack DevOps Project

## Author
Piyush Prasad  
Aspiring Cloud & DevOps Engineer  

---

## Project Overview

Onix Mall India is a production-style full-stack web application that simulates a real-world mall ecosystem.

This project demonstrates real-world DevOps practices including:
- CI/CD automation  
- Infrastructure deployment  
- Monitoring and observability  
- Security implementation  

---

## Live Links

| Service | URL |
|--------|-----|
| Website | https://onixmall.run.place |
| API Endpoint | https://onixmall.run.place/api/malls |
| Grafana Dashboard | https://grafana.onixmall.run.place |

Grafana is protected with authentication and HTTPS.

---

## Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | React (Vite), TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (EC2 - Localhost) |
| Infrastructure | AWS EC2 (Ubuntu), Nginx |
| Process Manager | PM2 |
| CI/CD | GitHub Actions, Ansible |
| Monitoring | Prometheus, Node Exporter, Grafana |

---

## Architecture

GitHub → GitHub Actions → Ansible Server → EC2 → Nginx → Backend API → MongoDB  

The frontend is built using React and served through Nginx.

---

## Infrastructure (AWS EC2 Instances)

This project uses a multi-server setup for production-style deployment.

| Instance Name | Purpose | Instance ID | Type | Availability Zone | Public IP | Public DNS | OS |
|--------------|--------|------------|------|------------------|----------|------------|----|
| Ansible Server | CI/CD control node | i-05a68dac6f2725b20 | m7i-flex.large | ap-south-1c | 35.154.168.44 | ec2-35-154-168-44.ap-south-1.compute.amazonaws.com | Ubuntu Pro |
| Application Server | Hosts frontend, backend, MongoDB | i-0b10756dbcbbc795c | m7i-flex.large | ap-south-1a | 65.0.158.227 | ec2-65-0-158-227.ap-south-1.compute.amazonaws.com | Linux/UNIX |

### Architecture Usage

- Ansible Server handles deployment automation  
- Application Server runs:
  - React frontend (via Nginx)  
  - Node.js backend (PM2)  
  - MongoDB (localhost)  

---

## Features

- Full-stack mall directory system  
- API-based dynamic data fetching  
- Secure backend integration  
- Production-ready deployment  
- Real-time monitoring dashboards  
- Automated CI/CD pipelines  

---

## Security Implementation

| Area | Implementation |
|------|--------------|
| HTTPS | Certbot SSL |
| Reverse Proxy | Nginx |
| Firewall | UFW (22, 80, 443 only) |
| Database Security | MongoDB restricted to localhost |
| Authentication | SSH key-based |
| API Protection | Rate limiting |
| GitHub Security | Dependabot, Secret scanning, CodeQL |

---

## Monitoring and Observability

Prometheus collects system metrics, Node Exporter exposes them, and Grafana visualizes the data.

### Metrics Monitored

| Metric | Description |
|-------|------------|
| CPU | Server usage |
| Memory | RAM usage |
| Disk | Storage usage |
| Network | Traffic flow |
| Uptime | Server availability |

---

## Database Connection

MongoDB runs locally on the EC2 server and is accessed only by the backend.

| Component | Configuration |
|----------|-------------|
| Host | 127.0.0.1 |
| Port | 27017 |
| Database Name | onixmall |
| Access | Backend only |

---

## API Example

Endpoint: /api/malls  

Returns mall data such as name and city.

---

## DNS Configuration

| Type | Name | Value | Proxy | Purpose |
|------|------|------|------|--------|
| A | @ | EC2_PUBLIC_IP | Yes | Main domain |
| A | www | EC2_PUBLIC_IP | Yes | Website |
| A | grafana | EC2_PUBLIC_IP | Yes | Monitoring |
| CNAME | api | onixmall.run.place | Yes | API (optional) |

SSL Mode: Full (Strict)

---

## Setup Guide

Frontend:
- npm install  
- npm run dev  

Backend:
- cd backend  
- npm install  
- node server.js  

Production:
- npm run build  

---

## CI/CD Pipeline

| Pipeline | Description |
|---------|------------|
| Main Pipeline | Auto deploy on push using Ansible |
| Backup Pipeline | Manual deployment to EC2 |

---

## Branching Strategy

| Branch | Purpose |
|-------|--------|
| main | Production-ready code with auto deployment |
| testing | Used for testing before production |

### Workflow

- Changes are pushed to testing branch  
- Features are validated safely  
- Code is merged into main  
- Main triggers deployment  

---

## Deployment Flow

1. Code pushed to GitHub  
2. GitHub Actions triggered  
3. Ansible connects to EC2  
4. Application deployed  
5. Backend restarted using PM2  
6. Nginx serves updated version  

---

## Project Structure

| Folder | Description |
|-------|------------|
| src | Frontend source code |
| backend | API server |
| dist | Production build |
| .github/workflows | CI/CD pipelines |

---

## Key Learnings

- AWS EC2 deployment  
- Reverse proxy using Nginx  
- CI/CD automation  
- Monitoring setup  
- Debugging production issues  
- Security best practices  

---

## Future Improvements

- Authentication system  
- Admin panel  
- Payment integration  
- Docker  
- Kubernetes  
- Alerting system  

---

## Conclusion

This project demonstrates a complete DevOps workflow including deployment, automation, monitoring, and security in a real-world environment.

---

## Support

If you find this project useful, consider giving it a star.
