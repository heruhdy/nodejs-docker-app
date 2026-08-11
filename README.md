# Node.js Docker App

A simple Node.js REST API containerized with Docker.

This project was created as a hands-on exercise to learn Git, GitHub, Node.js, and Docker.

## 🚀 Technologies

- Node.js 22
- Express.js
- Docker
- Git
- GitHub

## 📁 Project Structure

```text
nodejs-docker-app/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## ⚙️ Application

The application exposes a simple HTTP endpoint:

```http
GET /
```

Response:
```json
{
  "message": "Hello from Node.js Docker!",
  "status": "success"
}
```

## 🐳 Run with Docker
### Clone the repository
```bash
git clone git@github.com:heruhdy/nodejs-docker-app.git
cd nodejs-docker-app
```

### Build the Docker image
```bash
docker compose up -d --build
```

### Run the container
```bash
docker run -d --name nodejs-docker-app -p 3000:3000 nodejs-docker-app:1.0
```

### Test the application

Open:
```text
http://localhost:3000
```

Or use:
```bash
curl http://localhost:3000
```

Expected response:
```json
{
  "message": "Hello from Node.js Docker!",
  "status": "success"
}
```

## 🔍 Docker Commands

### Check running containers:
```bash
docker ps
```

### View application logs:
```bash
docker logs nodejs-docker-app
```

### Stop the container:
```bash
docker stop nodejs-docker-app
```

### Remove the container:
```bash
docker rm nodejs-docker-app
```

## 🎯 Learning Objectives

This project demonstrates:

- Basic Node.js application development
- Express.js HTTP server
- Docker image creation
- Docker container management
- Port mapping
- Git version control
- GitHub repository management
- SSH authentication with GitHub