const request = require('supertest');
const app = require('../../../app');

describe('GET REQUEST', () => {
  it('should be defined', async () => {
    const res = await request(app).get('/api/v1/user');
    expect(res.body).toBeDefined();
  });

  it('Status Code Should Return 200', async () => {
    const res = await request(app).get('/api/v1/user');
    expect(res.status).toBe(200);
  });
});

describe('POST REQUEST', () => {
  it('should be defined', async () => {
    const res = await request(app).post('/api/v1/user');
    expect(res.body).toBeDefined();
  });

  it('Status Code Should Return 200', async () => {
    const res = await request(app).post('/api/v1/user');
    expect(res.status).not.toBe(404);
  });

  it('Status Code Should Return 201', async () => {
    const res = await request(app)
      .post('/api/v1/user')
      .send({
        firstname: 'Adedayo',
        lastname: 'adedunye',
        balance: 3005,
        username: 'testing'
      });
    console.log(res.error);
    expect(res.status).toBe(201);
  });
  it('Status Code Should Return 400 Due to duplicates', async () => {
    const res = await request(app)
      .post('/api/v1/user')
      .send({
        firstname: 'Adedayo',
        lastname: 'adedunye',
        balance: 3005,
        username: 'testing'
      });
    console.log(res.error);
    expect(res.status).toBe(400);
  });
});

describe('UPDATE REQUESTS', () => {
  it('should be defined', async () => {
    const res = await request(app).put('/api/v1/user');
    expect(res.body).toBeDefined();
  });

  it('Status Code Should not be found wanting', async () => {
    const res = await request(app).put('/api/v1/user/5dd5ce795ffd15bbb1a7e94b');
    expect(res.status).not.toBe(404);
  });

  it('Status Code Should return bad request', async () => {
    const res = await request(app)
      .put('/api/v1/user/5dd5ce795ffd15bbb1a7e94b')
      .send({
        firstname: 'Adedayo',
        lastname: 'adedunye',
        balance: 3005,
        username: 'samfeolu'
      });
    expect(res.status).not.toBe(200);
  });
  it('Status Code Should success with right data', async () => {
    const res = await request(app)
      .put('/api/v1/user/5dd5ce795ffd15bbb1a7e94b')
      .send({
        firstname: 'Adedayo',
        lastname: 'adedunye',
        balance: 3005,
        username: 'adedayojs'
      });
    expect(res.status).toBe(200);
  });
});
