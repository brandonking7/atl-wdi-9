var express = require('express');
var router = express.Router();

var seeds = [
    {
        _id: 21413589023237590275,
        name: 'Pookie',
        city: 'Charles house'
    },
    {
        _id: 30295702375928375,
        name: 'shadowDom',
        city: 'noDavidVille'
    },
    {
        _id: 9132874923785,
        name: 'Kush',
        city: 'Atlanta'
    }
];

router.get('/', function (req, res) {
    res.json({criminals: seeds });
    
});

module.exports = router;
