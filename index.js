const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

// Routes
app.use('/users', users);

// Handle 404 and errors
app.use((req, res, next) => {
  const err = new Error('not found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status ? err.status : 500;
  res.status(status).json({
    error: {
      message: error.message
    }
  });
});

// Server
app.listen(3030, function () {
  console.log('Listening on port 3030');
});