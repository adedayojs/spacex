const request = require('supertest');
const app = require('../../../app');

describe('GET REQUEST', () => {
  it('should be defined', async () => {
    const res = await request(app).get('/api/v1/station');
    expect(res.body).toBeDefined();
  });

  it('Status Code Should Return 200', async () => {
    const res = await request(app).get('/api/v1/station');
    expect(res.status).toBe(200);
  });
});
