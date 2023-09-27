const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const app = express();
const port = process.env.PORT || 3000;

const redisClient = redis.createClient({
    host: 'localhost', 
    port: 3000,       
  });

  app.use(session({
    store: new RedisStore({ client: redisClient }),
    secret: 'darshit_jikadara', 
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, 
      maxAge: 3600000, 
    },
  }));

  app.post('/login', async(req, res) => {
    const { email, password } = req.body;

  const useremail_check = await user.find({ email: email });

  if (useremail_check.length > 0) {
      console.log(useremail_check[0].password);
      console.log(password);
    if (password == useremail_check[0].password)
     {
        req.session.user = {
            email: req.body.email,
          };
          res.status(200).send('Login successful');
        }
     }
});
