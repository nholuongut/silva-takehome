const express = require('express');
const router = express.Router();

/**
 * POST /api/clean-people
 * Body: Array<{ no, name, age, birthday }>
 * Response:
 * {
 *   "Alden": { "age": 24, "birthday": "1999.12.12" },
 *   "Briony": { "age": 32, "birthday": "1990.05.10" },
 *   ...
 * }
 */
router.post('/clean-people', (req, res) => {
  const data = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Expected an array of people' });
  }

  const result = data.reduce((acc, p) => {
    if (p && p.name) {
      acc[p.name] = { age: p.age, birthday: p.birthday };
    }
    return acc;
  }, {});

  console.log('Cleaned result:', result); 
  res.json(result);
});

module.exports = router;
