const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      'footer' : 'Rozymurat Kurbanov 2020'
    }
  );
}

module.exports = {
  hakkinda
}