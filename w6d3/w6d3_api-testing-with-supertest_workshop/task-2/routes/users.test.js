// Write your tests for task 2 in this file. Plan out what you need to import/require.
import request from "supertest";
import app from "../app.js"

test('Get request to users returns all users', async () => {

    await request(app)
        .get("/users")
        .expect(200)
        .expect(function (res) {
            const actual = res.body;
            const expected = {
                success: true,
                payload: expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        username: expect.any(String)
                    })
                ])
            }

            expect(actual).toStrictEqual(expected);
        })
})

test('Get /users/4 request to users', async () => {

    await request(app)
        .get("/users/4")
        .expect(200)
        .expect(function (res) {
            const actual = res.body;
            const expected = {
                success: true,
                payload: {
                    id: 4,
                    username: expect.any(String)
                }
            }
            expect(actual).toStrictEqual(expected);
        })
})