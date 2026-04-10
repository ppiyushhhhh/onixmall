# Onix Mall India – Full Stack Web Application

Onix Mall India is a full-stack web application designed to simulate a real-world mall ecosystem. The platform includes customer-facing features, administrative views, and a scalable architecture suitable for cloud deployment.

---

## Overview

This project started as a frontend-only application using static dummy data and has been upgraded to a full-stack system. The application now fetches data from a backend API, making it dynamic and ready for future database integration.

---

## Technology Stack

Frontend  
React.js (Vite) with TypeScript  
Tailwind CSS  

Backend  
Node.js  
Express.js  

Database (Planned)  
MongoDB  

---

## Architecture

Frontend (React) → API (Node/Express) → Database (MongoDB - planned)

The frontend communicates with the backend using REST APIs. The backend currently serves structured data and can be extended to connect with a database.

---

## Project Structure

onixmall/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/ (legacy dummy data)
│   ├── hooks/
│   └── App.tsx
│
backend/
├── server.js
├── package.json

---

## Features

- Mall directory with API-based data
- Mall detail pages
- Admin panel (UI level)
- Leasing and careers modules (static)
- Modular and scalable structure
- Ready for cloud deployment

---

## Setup Instructions

### 1. Clone Repository

git clone https://github.com/your-username/onixmall.git  
cd onixmall  

---

### 2. Frontend Setup

npm install  
npm run dev  

Frontend runs on:  
http://localhost:5173  

---

### 3. Backend Setup

cd /home/ubuntu/backend  
npm install  

node server.js  

Backend API:  
http://<your-server-ip>:5000/api/malls  

---

## API Endpoint

GET /api/malls  

Example Response:

[
  {
    "id": "1",
    "name": "Onix Mall Mumbai",
    "city": "Mumbai"
  }
]

---

## Important Notes

- Static data from `src/data/malls.ts` has been replaced with API calls  
- Backend must be running before frontend can fetch data  
- Ensure port 5000 is open if using a cloud server  

---

## Deployment

Frontend can be deployed on:
- AWS EC2
- AWS S3
- Cloudflare Pages

Backend should be run using PM2:

npm install -g pm2  
pm2 start server.js  
pm2 save  
pm2 startup  

---

## Future Improvements

- MongoDB integration
- Authentication system
- Admin panel with full control
- Leasing workflow automation
- Analytics dashboard
- Domain and HTTPS setup

---

## Author

Piyush Prasad  
IT Office Assistant  
Learning Cloud and DevOps  

---

## License

This project is for learning and demonstration purposes.
