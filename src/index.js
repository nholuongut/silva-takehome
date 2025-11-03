const express = require('express');
const app = express();

app.use(express.json());

// health check
app.get('/health', (_req, res) => res.json({ ok: true }));

// mount routes
app.use('/api', require('./routes/people'));

const basePort = Number(process.env.PORT) || 3000;
function startOn(port) {
  const server = app.listen(port, () =>
    console.log(`Server running on port ${port}`)
  );
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && port < basePort + 5) {
      console.warn(`⚠️  Port ${port} in use. Trying ${port + 1}...`);
      startOn(port + 1);
    } else {
      throw err;
    }
  });
}
startOn(basePort);
