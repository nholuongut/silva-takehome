const express = require('express');
const router = express.Router();

/**
 * POST /api/clean-people
 * Body: Array<{ no, name, age, birthday }>
 * Response: Array<string> (names only)
 */
router.post('/clean-people', (req, res) => {
  const data = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: 'Expected an array of people' });
  }

  // Lấy danh sách tên duy nhất
  const names = data
    .filter(p => p && p.name)
    .map(p => p.name);

  console.log('Names only:', names); // log ra console như yêu cầu
  return res.json(names);
});

module.exports = router;
