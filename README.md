# 🏬 Onix Mall India — Full Stack DevOps Project

> A production-style full-stack web application deployed on AWS EC2, demonstrating end-to-end DevOps practices including CI/CD automation, infrastructure deployment, monitoring, security hardening, and automated reporting.

[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue?logo=githubactions)](https://github.com)
[![Cloud](https://img.shields.io/badge/Cloud-AWS%20EC2-orange?logo=amazonaws)](https://aws.amazon.com)
[![Monitoring](https://img.shields.io/badge/Monitoring-Grafana-yellow?logo=grafana)](https://grafana.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📌 Table of Contents

- [Live Services](#-live-services)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Infrastructure Setup](#-infrastructure-setup)
- [Key Features](#-key-features)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Security Implementation](#-security-implementation)
- [Monitoring & Observability](#-monitoring--observability)
- [Automated Reporting System](#-automated-reporting-system)
- [Database Configuration](#-database-configuration)
- [DNS Configuration](#-dns-configuration)
- [Project Structure](#-project-structure)
- [Key Learnings](#-key-learnings)
- [Future Improvements](#-future-improvements)

---

## 🌐 Live Services

| Service | URL |
|---|---|
| 🌍 Website | [https://onixmall.run.place](https://onixmall.run.place) |
| 🔌 API Endpoint | [https://onixmall.run.place/api/malls](https://onixmall.run.place/api/malls) |
| 📊 Grafana Dashboard | [https://grafana.onixmall.run.place](https://grafana.onixmall.run.place) |

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React (Vite), TypeScript, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Localhost on EC2) |
| **Infrastructure** | AWS EC2 (Ubuntu), Nginx |
| **CI/CD** | GitHub Actions, Ansible |
| **Monitoring** | Prometheus, Node Exporter, Grafana |
| **Reporting** | Bash, Cron, wkhtmltopdf, Mutt, jq |

---

## 🏗️ Architecture

The system follows a CI/CD-driven deployment pipeline:
GitHub → GitHub Actions → Ansible Server → EC2 → Nginx → Backend API → MongoDB

- **Frontend** is served via Nginx
- **Backend** runs as a managed process using PM2
- **MongoDB** is restricted to `localhost` for security

---

## ☁️ Infrastructure Setup

The project uses a **multi-server architecture** to simulate a real production environment.

| Server | Purpose | Availability Zone | Public IP |
|---|---|---|---|
| Ansible Server | CI/CD control node | `ap-south-1c` | `35.154.168.44` |
| Application Server | Hosts frontend, backend & database | `ap-south-1a` | `65.0.158.227` |

---

## ✨ Key Features

- ✅ Full-stack application deployed on AWS EC2
- ✅ Automated CI/CD pipeline with GitHub Actions & Ansible
- ✅ Secure backend and database configuration
- ✅ Real-time monitoring dashboards with Grafana
- ✅ Automated PDF reporting system with email delivery

---

## 🔄 CI/CD Pipeline

The deployment process is **fully automated** on every push to the `main` branch.

### Pipelines

| Pipeline | Description |
|---|---|
| **Main Pipeline** | Auto-deploy triggered on push to `main` branch |
| **Backup Pipeline** | Manual fallback deployment option |

### Deployment Flow

Code pushed to GitHub
GitHub Actions workflow triggered
Ansible connects to EC2 instance
Application files are deployed
Backend restarts via PM2
Nginx serves the updated application


### Branching Strategy

| Branch | Purpose |
|---|---|
| `main` | Production deployment |
| `testing` | Safe testing before production |

**Workflow:** `testing` → validate → merge → `main` → deploy

---

## 🔒 Security Implementation

Security is applied across multiple layers of the stack.

| Layer | Measure |
|---|---|
| **Transport** | HTTPS enabled via Certbot (SSL/TLS) |
| **Reverse Proxy** | Nginx with secure headers & config |
| **Firewall** | UFW with restricted port access |
| **Database** | MongoDB bound to `127.0.0.1` (localhost only) |
| **Access** | SSH key-based authentication (no password login) |
| **API** | Rate limiting on all endpoints |
| **Code** | GitHub Dependabot & CodeQL scanning |

---

## 📊 Monitoring & Observability

The monitoring stack uses industry-standard open-source tools:

| Tool | Role |
|---|---|
| **Prometheus** | Metrics collection & storage |
| **Node Exporter** | Exposes system-level metrics |
| **Grafana** | Visualization & dashboards |

### Metrics Monitored

| Metric | Description |
|---|---|
| CPU Usage | Real-time processor utilization |
| Memory Usage | RAM consumption |
| Disk Usage | Storage availability |
| Network Traffic | Inbound/outbound data |
| Server Uptime | Availability tracking |

---

## 📋 Automated Reporting System

A key feature of this project is the automated reporting system that generates **corporate-style PDF reports** and sends them via email on a schedule.

### Report Schedule

| Time | Report |
|---|---|
| `08:00 AM` | Morning infrastructure report |
| `07:00 PM` | Evening infrastructure report |

### Report Contents

| Section | Details |
|---|---|
| **Server Health** | CPU, Memory, Disk usage |
| **Application Status** | Frontend & API availability |
| **Service Health** | Nginx, MongoDB, PM2 status |
| **SSL Certificate** | Days until expiry |
| **Infrastructure Overview** | General system summary |
| **Security Logs** | Failed SSH login attempts |
| **PM2 Monitoring** | Process list and status |

### Running Reports Manually

```bash
bash scripts/daily-report.sh
```

### Automating with Cron

```bash
# Runs at 08:00 AM and 07:00 PM daily
0 8,19 * * * /bin/bash /home/ubuntu/daily-report.sh >> /home/ubuntu/report.log 2>&1
```

---

## 🗄️ Database Configuration

MongoDB runs **locally** on the application server and is accessible only by the backend service.

| Parameter | Value |
|---|---|
| **Host** | `127.0.0.1` |
| **Port** | `27017` |
| **Database** | `onixmall` |

### API Example

**Endpoint:** `GET /api/malls`

Returns mall data including name and city.

---

## 🌍 DNS Configuration

| Type | Name | Purpose |
|---|---|---|
| `A` | `@` | Main domain |
| `A` | `www` | Website |
| `A` | `grafana` | Monitoring dashboard |
| `CNAME` | `api` | API routing |

> **SSL Mode:** Full (Strict) via Cloudflare

---

## 📁 Project Structure
onix-mall-india/
├── src/                    # Frontend source code (React + TypeScript)
├── backend/                # API server (Node.js + Express)
├── dist/                   # Production build output
├── scripts/                # DevOps automation scripts
└── .github/
└── workflows/          # CI/CD pipeline definitions

---

## 📚 Key Learnings

- AWS EC2 instance setup and management
- Nginx reverse proxy configuration
- CI/CD automation with GitHub Actions and Ansible
- Infrastructure monitoring using Prometheus and Grafana
- Implementing security best practices on a Linux server
- Automation of reporting workflows using cron jobs
- Real-world debugging and production issue resolution

---

## 🚀 Future Improvements

| Feature | Description |
|---|---|
| 🔐 Authentication | User login and session management |
| 📊 Admin Dashboard | Internal management UI |
| 💳 Payment Integration | Checkout and payment gateway |
| 🐳 Docker & Kubernetes | Containerized deployments |
| 🔔 Alerting System | PagerDuty / Slack-based incident alerts |

---

## 👤 Author

**Piyush Prasad**  
*Aspiring Cloud & DevOps Engineer*

---

> *This project demonstrates a complete DevOps workflow: **Deployment → Automation → Monitoring → Security → Reporting***
