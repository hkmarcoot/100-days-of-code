import * as config from '../config';

describe('Check task2 completion', () => {
    test('check config.databaseHost is set correctly', () => {
        expect(config.databaseHost).toEqual('dbhost');
    });

    test('check config.databaseName is set correctly', () => {
        expect(config.databaseName).toEqual('dbname');
    });

    test('check config.username is set correctly', () => {
        expect(config.username).toEqual('username');
    });

    test('check config.password is set correctly', () => {
        expect(config.password).toEqual('password');
    });
});
