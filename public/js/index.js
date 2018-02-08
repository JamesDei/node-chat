var socket = io();

socket.on('connect', () => {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from : 'Jane',
        text: 'Hey. This is Jane.',
    
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message: ', message);
});
