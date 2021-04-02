const express = require('express');
const morgan = require('morgan');
const maneuversRouter = require('./routes/maneuvers');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/health', (req, res, next) => {
    res.send(`The service ${process.env.MS_NAME} is running at ${process.env.PORT}`);
})

app.use('/maneuvers', maneuversRouter);
app.use('/manobras', maneuversRouter);

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})

app.listen(process.env.PORT, () => {
    console.log(`Started at ${process.env.PORT}`);
});

module.exports = app;