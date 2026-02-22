# DevOps Test Project Documentation

## Overview
This project implements a Node.js API with Redis backend, containerized using Docker and orchestrated with Kubernetes. The system provides a simple counter service with health checks.

## Architecture
- **Application**: Node.js Express server
- **Database**: Redis for data persistence
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Monitoring**: [To be implemented]
- **Logging**: [To be implemented]
- **Testing**: [To be implemented]

## API Endpoints
- `GET /` - Returns current counter value and increments it
- `GET /health` - Health check endpoint

## Setup Instructions

### Local Development
1. Install dependencies:
   ```bash
   cd app
   npm install
   ```

2. Start Redis:
   ```bash
   docker run -d -p 6379:6379 redis
   ```

3. Start the application:
   ```bash
   npm start
   ```

### Docker Setup
1. Build the image:
   ```bash
   docker build -t devops-test .
   ```

2. Run with docker-compose:
   ```bash
   docker-compose up
   ```

### Kubernetes Deployment
1. Apply configurations:
   ```bash
   kubectl apply -f k8s/
   ```

## Configuration
- Environment variables:
  - `REDIS_URL`: Redis connection string (default: redis://redis:6379)
  - `APP_SECRET`: Application secret (required for health check)

## Monitoring and Observability
[To be implemented - Add details about monitoring setup]

## Testing
[To be implemented - Add details about test suites]

## Security
[To be implemented - Add security measures]

## CI/CD Pipeline
[To be implemented - Add GitHub Actions workflow details]