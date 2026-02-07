# Spendly

**Spendly** is a personal expense-tracking product that helps you record, organize, and query your spending by category and date. It exposes a REST API for users and expenses, with a React web client for the interface.

---

## Features

- **User accounts** — Sign up and log in to manage your own expenses
- **Expense tracking** — Create, update, and delete expenses with amount, description, category, and date
- **Filtering** — List expenses by user, category, or date range
- **REST API** — Backend built with Spring Boot; integrate from any client (web, mobile, or scripts)

---

## Tech Stack

| Layer   | Stack                    |
|---------|--------------------------|
| Backend | Java, Spring Boot, JPA   |
| Database| PostgreSQL               |
| Frontend| React, TypeScript, Vite  |

---

## API Overview

Base URL (default): `http://localhost:8080`

All expense amounts use decimal precision (e.g. `19.99`). Dates use **ISO 8601** format: `YYYY-MM-DD`.

---

### Users API

Base path: `/users`

| Method | Endpoint        | Description                    |
|--------|-----------------|--------------------------------|
| GET    | `/users/ping`   | Health check; returns `"hello"` |
| POST   | `/users/signup` | Create a new user              |
| GET    | `/users/login/{id}` | Get user by ID (login)    |

#### Create user (signup)

**Request**

```http
POST /users/signup
Content-Type: application/json
```

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

**Response** — User object with `id`, `name`, `email`.

#### Get user (login)

**Request**

```http
GET /users/login/{id}
```

**Response** — User object.

---

### Expenses API

Base path: `/expenses`

| Method | Endpoint                          | Description                          |
|--------|-----------------------------------|--------------------------------------|
| POST   | `/expenses/create`                | Create an expense                    |
| GET    | `/expenses/{id}`                  | Get expense by ID                    |
| GET    | `/expenses/user/{userId}`         | List all expenses for a user        |
| GET    | `/expenses/user/{userId}/category?category=...` | List by user and category   |
| GET    | `/expenses/user/{userId}/range?start=...&end=...` | List by user and date range |
| PUT    | `/expenses/{id}`                  | Update an expense                    |
| DELETE | `/expenses/{id}`                  | Delete an expense                    |

#### Create expense

**Request**

```http
POST /expenses/create
Content-Type: application/json
```

```json
{
  "amount": 49.99,
  "description": "Weekly groceries",
  "category": "Food",
  "expenseDate": "2025-02-08",
  "userId": 1
}
```

**Validation**

- `amount` — Required, must be ≥ 0
- `description` — Required, non-blank
- `category` — Required, non-blank
- `expenseDate` — Required, ISO date
- `userId` — Required

**Response** — Full expense object including generated `id`.

#### Get expense by ID

**Request**

```http
GET /expenses/{id}
```

**Response** — Single expense.

#### List expenses by user

**Request**

```http
GET /expenses/user/{userId}
```

**Response** — Array of expenses for that user.

#### List by category

**Request**

```http
GET /expenses/user/{userId}/category?category=Food
```

**Response** — Array of expenses for that user in the given category.

#### List by date range

**Request**

```http
GET /expenses/user/{userId}/range?start=2025-02-01&end=2025-02-28
```

Query params: `start` and `end` in `YYYY-MM-DD`.

**Response** — Array of expenses within the date range.

#### Update expense

**Request**

```http
PUT /expenses/{id}
Content-Type: application/json
```

Body: same shape as create (amount, description, category, expenseDate, userId).

**Response** — Updated expense.

#### Delete expense

**Request**

```http
DELETE /expenses/{id}
```

**Response** — `204 No Content`.

---

## Data Models

### User

| Field   | Type   | Notes              |
|---------|--------|--------------------|
| id      | number | Auto-generated     |
| name    | string | Required           |
| email   | string | Required, unique   |

### Expense

| Field        | Type   | Notes          |
|--------------|--------|----------------|
| id           | number | Auto-generated |
| amount       | number | ≥ 0, decimal   |
| description  | string | Required       |
| category     | string | Required       |
| expenseDate  | string | ISO date       |
| user         | User   | Owner of expense |

---

## Running the Project

### Prerequisites

- Java 17+
- Node.js 18+
- PostgreSQL (default config: `mydb`, user `postgres`, password `postgres`, port `5432`)

### Backend

```bash
cd server
./mvnw spring-boot:run
```

API is available at `http://localhost:8080`. Configure database in `server/src/main/resources/application.properties` if needed.

### Frontend

```bash
cd client
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:5173`).

---

## Project Structure

```
spendly/
├── client/          # React + Vite frontend
├── server/          # Spring Boot API
│   └── src/main/java/com/jsndz/spendly/
│       ├── controller/   # REST endpoints
│       ├── dto/          # Request DTOs
│       ├── model/        # JPA entities
│       ├── repository/   # Data access
│       └── service/      # Business logic
└── README.md
```

---

## License

See repository license if applicable.
