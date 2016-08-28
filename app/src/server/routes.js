var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/extrato', getData('extrato'));
router.get('/objectives', getData('objectives'));
router.get('/objectives/:id', getObjectives);
router.get('/settings', getData('settings'));
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getData (type) {
  return function(req, res, next) {
    res.status(200).send(data[type]);
  };
}

function getObjectives (req, res, next) {
  var id = +req.params.id;
  var objective = data.objectives.filter(function(o) {
    return o.id === id;
  })[0];

  if (objective) {
    res.status(200).send(objective);
  } else {
    four0four.send404(req, res, 'objective ' + id + ' not found');
  }
}
