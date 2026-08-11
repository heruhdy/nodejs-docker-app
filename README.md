# Node.js Docker App

A simple Node.js application running inside a Docker container.

## Technologies

- Node.js
- Express.js
- Docker
- Git
- GitHub

## Project Structure

```text
nodejs-docker-app/
├── app.js
├── package.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## How to Run

### Build the Docker image:

```bash
docker build -t nodejs-docker-app:1.0 .
```

### Run the container:

```bash
docker run -d --name nodejs-docker-app -p 3000:3000 nodejs-docker-app:1.0 
```
### Access the Application

Open:

```text
http://localhost:3000
```

The application returns:
```json
{
  "message": "Hello from Node.js Docker!",
  "status": "success"
}
```

## Docker Container

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