import { postScore, getScores} from '../src/helpers/apiHandler';

test('returns the username of the first user', async () => {
  getScores().then((scores) => {
    expect(scores[0].user).toEqual('Zema');
  });
});

test('returns the score of the first user', async () => {
  getScores().then((scores) => {
    expect(scores[0].score).toEqual('120');
  });
});

test('returns the username of added user and hes or hers score', async () => {
  postScore('John Doe', 100);
  getScores().then((scores) => {
    expect(scores[(scores.length-1)].user).toEqual('John Doe');
    expect(scores[(scores.length-1)].score).toEqual('100');
  });
});


