const express = require('express');
const router = express.Router();

/* Server side API */
router.get('/healthcheck', (req, res) => res.send({ok: true}));

module.exports = router;
