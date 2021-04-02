const morgan = require('morgan');
const path = require('path');
const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(express.json());

app.get('/health', (req, res, next) => {
    res.send(`The service ${process.env.MS_NAME} is running at ${process.env.PORT}`);
})

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})

let numUsers = 0;

let user1 = null;
let user2 = null;

io.on('connection', (socket) => {
    let addedUser;

    socket.on('add user', (username) => {
        console.log(`current users: ${JSON.stringify(user1)}:${JSON.stringify(user2)}`);
        console.log(`add user: ${username}`);
        if (addedUser) return;

        if (!user1) user1 = { username };
        else if (!user2) user2 = { username };

        // we store the username in the socket session for this client
        socket.username = username;
        ++numUsers;
        addedUser = true;
        socket.emit('login', {
            numUsers: numUsers
        });

        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });
    });

    socket.on('card chosen', (data) => {

        if (user1 && user1.username === socket.username)
            user1.card = data.data;
        else if (user2 && user2.username === socket.username)
            user2.card = data.data;
        else return;

        if (user1.card && user2 && user2.card) {
            console.log(`reveal cards fired`);

            let winner = null;
            if (user1.card === 'papel' && user2.card === 'pedra')
                winner = user1.username;
            else if (user1.card === 'papel' && user2.card === 'tesoura')
                winner = user2.username;
            else if (user1.card === 'pedra' && user2.card === 'tesoura')
                winner = user1.username;
            else if (user1.card === 'pedra' && user2.card === 'papel')
                winner = user2.username;
            else if (user1.card === 'tesoura' && user2.card === 'papel')
                winner = user1.username;
            else if (user1.card === 'tesoura' && user2.card == 'pedra')
                winner = user2.username;

            socket.broadcast.emit('reveal cards', {
                user1,
                user2,
                winner
            });
        }
        else {
            socket.broadcast.emit('card chosen', {
                username: socket.username
            });
        }
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', () => {
        if (addedUser) {
            --numUsers;

            // echo globally that this client has left
            socket.broadcast.emit('user left', {
                username: socket.username,
                numUsers: numUsers
            });
        }
    });
});


server.listen(port, () => {
    console.log('Server listening at port %d', port);
});