
# Amrutam Telemedicine Backend

Production-grade backend system for Amrutam’s telemedicine platform designed with a focus on scalability, reliability, security, and observability.

This project implements core healthcare workflows including authentication, doctor availability management, and concurrency-safe appointment booking using modern backend engineering practices.

---

## 🚀 Project Overview

The system enables patients, doctors, and administrators to interact through secure APIs supporting scheduling, booking, and analytics workflows.

Key engineering goals:

- Scalable architecture supporting high consultation volume
- Reliable and concurrency-safe booking workflow
- Secure access using RBAC and JWT authentication
- Observable and audit-ready backend design
- Containerized deployment using Docker

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose
- **API Documentation:** Swagger (OpenAPI)
- **Authentication:** JWT
- **Security:** Helmet, RBAC middleware
- **Logging:** Morgan request logging

---

## ✅ Implemented Features

### Authentication & User Lifecycle
- JWT-based signup and login
- Role-based access control (Admin, Doctor, Patient)
- Secure password hashing

### Doctor Workflow
- Doctor profile creation
- Availability slot management

### Booking Workflow (Concurrency Safe)
- Transaction-based booking
- Row-level locking (`SELECT FOR UPDATE`)
- Idempotency keys to prevent duplicate bookings
- Automatic slot reservation
- Audit logging

### Admin Features
- Platform analytics endpoint
- System statistics dashboard

### Observability
- Health check endpoint
- Request logging
- Audit trail for critical actions

---

## 🏗 Architecture Documentation

Detailed architecture and system design:

📄 `docs/architecture.pdf`

### System Diagrams

- ER Diagram → `docs/er-diagram.png`
- Booking Flow Sequence → `docs/booking-flow.png`

---

## ⚙️ Local Setup

### Prerequisites
- Docker Desktop installed
- Node.js (optional for local dev)

### Run using Docker

```bash
docker compose up --build

# amrutam-telemedicine-backend

