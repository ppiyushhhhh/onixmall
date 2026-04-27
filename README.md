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

Grafana is secured with authentication and HTTPS.

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

The frontend is built using React and served via Nginx.

---

## Features  

- Full-stack mall directory system  
- API-based data handling  
- Secure backend integration  
- Automated deployment  
- Monitoring dashboards  
- CI/CD pipelines  

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

Prometheus collects metrics, Node Exporter exposes system data, and Grafana visualizes it.

### Metrics Monitored

| Metric | Description |
|-------|------------|
| CPU | Server processing usage |
| Memory | RAM utilization |
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

The backend connects using environment variables and Mongoose.

---

## API Example  

Endpoint: `/api/malls`  

Returns mall data such as name and city from MongoDB.

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

Clone the repository, install dependencies, and run the frontend and backend.

Frontend runs using npm, and backend runs using Node.js.

---

## CI/CD Pipeline  

| Pipeline | Description |
|---------|------------|
| Main Pipeline | Auto deploy on push using Ansible |
| Backup Pipeline | Manual deployment to EC2 |

---

## Deployment Flow  

1. Code pushed to GitHub  
2. GitHub Actions triggered  
3. Ansible connects to EC2  
4. Application is built and deployed  
5. Backend restarted via PM2  
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
