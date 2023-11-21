const router = require('express').Router();

router.get('/notes', (req, res) => {
  res.json('success');
});

module.exports = router;