const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


app.use(express.static('./public'));
// parse incoming JSON data
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT, () => {
  console.log(`Server running at http:127.0.0.1:${PORT}`);
});
