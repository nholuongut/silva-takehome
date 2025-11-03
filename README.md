# Silva Take-Home

A minimal Node.js + Express service that cleans and reshapes a list of people objects into a structured JSON format.  
This project demonstrates clean API design, simple logic, and production-ready Node.js practices.

---

## Tech Stack
- **Runtime:** Node.js v22+
- **Framework:** Express.js v4.x
- **Language:** JavaScript (CommonJS)
- **Dependencies:** Only Express — no external utilities used.

---

## Project Overview

This small Express app exposes a single endpoint:

| Method | Endpoint              | Description                  |
|---------|-----------------------|------------------------------|
| POST    | `/api/clean-people`   | Cleans and restructures input JSON data |

It accepts an array of objects with fields:  
`no`, `name`, `age`, `birthday`  
and returns an object indexed by `name`.

---

## API Specification

### **POST** `/api/clean-people`

#### Request Body
```json
[
  { "no": 1, "name": "Nho Luong", "age": 36, "birthday": "1989.27.07" }
]
```

#### Response Example
```json
{
  "Nho Luong": {
    "age": 36,
    "birthday": "1989.27.07"
  }
}
```

#### Example with Multiple Entries
**Request**
```json
[
  { "no": 1, "name": "Alden",  "age": 24, "birthday": "1999.12.12" },
  { "no": 2, "name": "Briony", "age": 32, "birthday": "1990.05.10" },
  { "no": 3, "name": "Cedric", "age": 28, "birthday": "1995.08.20" }
]
```

**Response**
```json
{
  "Alden":  { "age": 24, "birthday": "1999.12.12" },
  "Briony": { "age": 32, "birthday": "1990.05.10" },
  "Cedric": { "age": 28, "birthday": "1995.08.20" }
}
```

---

## Folder Structure
```
silva-takehome/
├── src/
│   ├── index.js        # Main Express server, auto port retry (3000 → 3005)
│   └── routes/
│       └── people.js   # Core API endpoint logic
├── package.json        # npm configuration
├── .gitignore
└── README.md           # Documentation (this file)
```

---

## Run & Test Locally

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start the server
```bash
npm start
```
Expected output:
```
Server running on port 3000
```

### 3️⃣ Test API using curl
```bash
curl -s -X POST http://localhost:3000/api/clean-people   -H "Content-Type: application/json"   -d '[{"no":1,"name":"Nho Luong","age":36,"birthday":"1989.27.07"}]' | jq .
```

Expected output:
```json
{
  "Nho Luong": {
    "age": 36,
    "birthday": "1989.27.07"
  }
}
```

---

## Health Check
Simple health endpoint to verify server status:
```
GET /health
→ { "ok": true }
```

---

## Port Handling
The server automatically retries ports (3000 → 3005)  
if the base port is in use (`EADDRINUSE`).

---

## Clean Up
If port 3000 is still occupied:
```bash
lsof -i :3000
kill -9 <PID>
```

Or:
```bash
killall -9 node 2>/dev/null || true
```

---

## Code Quality
- Simple, readable, and maintainable
- Handles invalid input gracefully
- Follows Express best practices
- Logs both server and API results

---

## Author
**Nho Luong**  
🔗 GitHub: [@nholuongut](https://github.com/nholuongut)

---
