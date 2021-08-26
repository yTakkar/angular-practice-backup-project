const
  express = require('express'),
  hbs = require('express-handlebars'),
  path = require('path'),
  PORT = 2260,
  app = express()

app.use(express.static(path.join(__dirname, 'client')))
app.engine('html', hbs({
  extname: 'html'
}))
app.set('view engine', 'html')

app.get('*', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => console.log('App running..') )