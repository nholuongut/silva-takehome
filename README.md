# Silva-TakeHome

Minimal Express app implementing the requested endpoint.

## Endpoint
`POST /api/clean-people`

## Request (JSON Array)
```json
[
  { "no": 1, "name": "Nho Luong", "age": 36, "birthday": "1989.27.07" }
]
```

## Run locally
```bash
npm install
npm start
```

## Test
```bash
curl -s -X POST http://localhost:3000/api/clean-people \
  -H "Content-Type: application/json" \
  -d '[{"no": 1, "name": "Nho Luong", "age": 36, "birthday": "1989.27.07"}
```
