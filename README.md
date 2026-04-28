# Onix Mall India – Full Stack DevOps Project

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

Clone the repository and install dependencies.

Frontend:
- npm install  
- npm run dev  

Backend:
- cd backend  
- npm install  
- node server.js  

Production build:
- npm run build  

---

## CI/CD Pipeline

| Pipeline | Description |
|---------|------------|
| Main Pipeline | Auto deploy on push using Ansible |
| Backup Pipeline | Manual deployment to EC2 |

---

## Branching Strategy

This project follows a simple branching strategy for safe deployments.

| Branch | Purpose |
|-------|--------|
| main | Production-ready code with auto deployment |
| testing | Used for testing new features before production |

### Workflow

- Changes are first pushed to the testing branch  
- Features are tested without affecting the live system  
- After verification, code is merged into main  
- Main branch triggers CI/CD and deploys to production  

---

## Deployment Flow

1. Code is pushed to GitHub  
2. GitHub Actions triggers workflow  
3. Ansible connects to EC2  
4. Application is built and deployed  
5. Backend restarts using PM2  
6. Nginx serves updated application  

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
- Debugging real-world issues  
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
