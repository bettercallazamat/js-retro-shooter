import 'regenerator-runtime';

const apiKey = 'VaPEsjFAynSPVGjClAVe';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`;

const postScore = async (username, score) => {
  const playerScore = {
    user: username,
    score: score,
  };

  const params = {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerScore),
  };

  const response = await fetch(url, params);
  const data = await response.json();
  return data;
};

const getScores = async () => {
  const params = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, params);
  const topScores = await response.json();

  return topScores.result;
};

export { postScore, getScores };