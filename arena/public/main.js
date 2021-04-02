$(function () {

    // Initialize variables
    const $window = $(window);
    const $usernameInput = $('.usernameInput'); // Input for username
    const $messages = $('.messages');           // Messages area
    const $inputMessage = $('.inputMessage');   // Input message input box

    const $loginPage = $('.login.page');        // The login page
    const $chatPage = $('.chat.page');          // The chatroom page

    const socket = io();

    // Prompt for setting a username
    let username;
    let connected = false;
    let $currentInput = $usernameInput.focus();

    const addParticipantsMessage = (data) => {
        let message = '';
        if (data.numUsers === 1) {
            message += `there's 1 participant`;
        } else {
            message += `there are ${data.numUsers} participants`;
        }
        log(message);
    }

    // Sets the client's username
    const setUsername = () => {
        username = $usernameInput.val().trim();

        // If the username is valid
        if (username) {
            $loginPage.fadeOut();
            $chatPage.show();
            $loginPage.off('click');

            // Tell the server your username
            socket.emit('add user', username);
        }
    }

    $window.keydown(event => {
        // Auto-focus the current input when a key is typed
        if (!(event.ctrlKey || event.metaKey || event.altKey)) {
            $currentInput.focus();
        }
        // When the client hits ENTER on their keyboard
        if (event.which === 13) {
            setUsername();
        }
    });

    // Log a message
    const log = (message) => {
        const $el = $('<li>').addClass('log').text(message);
        addMessageElement($el);
    }

    const addChatMessage = (data) => {
        log(`${data.username}: ${data.message}`)
    }

    const addMessageElement = (el) => {
        const $el = $(el);
        $messages.append($el);
        $messages[0].scrollTop = $messages[0].scrollHeight;
    }

    // Focus input when clicking anywhere on login page
    $loginPage.click(() => {
        $currentInput.focus();
    });

    // Whenever the server emits 'login', log the login message
    socket.on('login', (data) => {
        connected = true;
        // Display the welcome message
        const message = 'Welcome to Socket.IO Chat – ';
        log(message, {
            prepend: true
        });
        addParticipantsMessage(data);
    });

    socket.on('card chosen', (data) => {
        console.log(`card chosen fired`);
        addChatMessage({ username: data.username, message: `Already choosed his/her card` });
    });

    socket.on('reveal cards', (data) => {
        console.log(`reveal cards fired`);
        log(`Cards chosen were ${JSON.stringify(data.user1)} and ${JSON.stringify(data.user2)}`);
        if (data.winner)
            log(`The winner is: ${data.winner}`);
    });

    // Whenever the server emits 'user joined', log it in the chat body
    socket.on('user joined', (data) => {
        log(`${data.username} joined`);
        addParticipantsMessage(data);
    });

    // Whenever the server emits 'user left', log it in the chat body
    socket.on('user left', (data) => {
        log(`${data.username} left`);
        addParticipantsMessage(data);
    });

    socket.on('disconnect', () => {
        log('you have been disconnected');
    });

    socket.on('reconnect', () => {
        log('you have been reconnected');
        if (username) {
            socket.emit('add user', username);
        }
    });

    socket.on('reconnect_error', () => {
        log('attempt to reconnect has failed');
    });

    $('.card').click(function (evt) {
        const data = $(this).attr('data-value');
        $(this).css('border', '5px solid red');

        if (connected) {
            addChatMessage({ username, message: `Already choosed his/her card.` });
            socket.emit('card chosen', {
                username,
                data
            });
        }
    })

});