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

### Frontend
- React (Vite)  
- TypeScript  
- Tailwind CSS  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB installed on EC2  
- Connected using Mongoose  
- Restricted to localhost for security  

### Infrastructure
- AWS EC2 (Ubuntu)  
- Nginx (Reverse Proxy with HTTPS)  
- PM2 (Process Manager)  

### CI/CD
- GitHub Actions  
- Ansible (Automated Deployment)  
- Backup Direct Deployment Pipeline  

### Monitoring
- Prometheus  
- Node Exporter  
- Grafana  

---

## Architecture

GitHub  
→ GitHub Actions  
→ Ansible Server  
→ EC2 (Ubuntu)  
→ Nginx (HTTPS)  
→ Backend API  
→ MongoDB  

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

- HTTPS enabled using Certbot  
- Nginx reverse proxy configuration  
- UFW firewall (only ports 22, 80, 443 allowed)  
- MongoDB restricted to localhost  
- SSH key-based authentication  
- API rate limiting implemented  

GitHub security features enabled:
- Dependabot alerts  
- Secret scanning  
- CodeQL analysis  

---

## Monitoring and Observability

Prometheus collects system metrics, Node Exporter exposes them, and Grafana visualizes the data.

### Metrics Monitored
- CPU usage  
- Memory usage  
- Disk usage  
- Network traffic  
- Server uptime  

---

## Database Connection

MongoDB runs locally on the EC2 server and is accessed only by the backend.

### Configuration

MongoDB is bound to localhost:

```yaml
bindIp: 127.0.0.1
Environment Variables
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/onixmall
Mongoose Connection
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error(error));
API Example

GET /api/malls

[
  {
    "_id": "69eb4d26d90bf9c0373632df",
    "name": "Onix Mall Mumbai",
    "city": "Mumbai"
  }
]
DNS Configuration
Type	Name	Value	Proxy	Purpose
A	@	EC2_PUBLIC_IP	Yes	Main domain
A	www	EC2_PUBLIC_IP	Yes	Website
A	grafana	EC2_PUBLIC_IP	Yes	Monitoring
CNAME	api	onixmall.run.place	Yes	API (optional)

SSL Mode: Full (Strict)

Setup Guide
Clone Repository
git clone https://github.com/your-username/onixmall.git
cd onixmall
Frontend Setup
npm install
npm run dev
Backend Setup
cd backend
npm install
node server.js
Production Build
npm run build
CI/CD Pipeline

Primary Pipeline:

Triggered on push to main branch
Deploys using Ansible

Backup Pipeline:

Manual trigger
Direct EC2 deployment
Deployment Flow
Push code to GitHub
GitHub Actions triggers workflow
Ansible connects to EC2 via SSH
Application is built and deployed
Backend restarts using PM2
Nginx serves updated application
Project Structure
onixmall/
├── src/
├── backend/
│   ├── server.js
│   └── package.json
├── dist/
├── .github/workflows/
Key Learnings
AWS EC2 deployment
Nginx reverse proxy setup
CI/CD automation using GitHub Actions and Ansible
Monitoring with Prometheus and Grafana
Debugging real-world production issues
Implementing security best practices
Future Improvements
JWT authentication
Admin panel
Payment integration
Docker containerization
Kubernetes deployment
Alerting system
Conclusion

This project demonstrates a complete DevOps workflow including deployment, automation, monitoring, and security in a real-world production environment.
