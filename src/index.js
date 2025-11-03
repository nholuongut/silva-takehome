const express = require('express');
const app = express();

app.use(express.json());

// health check
app.get('/health', (_req, res) => res.json({ ok: true }));

// mount routes (only once)
app.use('/api', require('./routes/people'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
