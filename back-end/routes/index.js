const express = require('express')
const router = express.Router()

router.get('/text', (req, res) => {
    res.json({
        "text":"hello world"
    });
})

router.get('/int', (req, res) => {
    res.json({
        "int":42
    });
})

module.exports = router;
