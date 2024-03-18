// user.test.js
const request = require('supertest');
const app = require('../../smartpantry'); // Adjust this path to the location of your app file

describe('User Registration', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({
        username: 'TestUser',
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
        password: 'password123',
      });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token'); // Assuming your API returns a token upon successful registration
  });

  // Add more tests as needed
});
