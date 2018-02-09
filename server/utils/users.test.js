const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Taylor',
            room: 'Gold'
        }, {
            id: '2',
            name: 'Mary',
            room: 'Silver'
        }, {
            id: '3',
            name: 'Emma',
            room: 'Gold'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'James',
            room: 'gold'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);

    });

    it('should not remove user', () => {

        var userId = '666';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
       
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        var userId = '666';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for Gold room', () => {
        var userList = users.getUserList('Gold');

        expect(userList).toEqual(['Taylor', 'Emma']);
    });

    it('should return names for Silver room', () => {
        var userList = users.getUserList('Silver');

        expect(userList).toEqual(['Mary']);
    });

});