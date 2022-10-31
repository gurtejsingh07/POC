import axios from 'axios';
let payload = {
  token: 'Ndud1qHvKo6pc_Ja-fGCJA',
  data: {
    id: '6360098bca0fe3c21aab2949',
    name: 'Gurtej Singh',
    cardDetails: {
      number: '4242 4242 4246 9870',
      expiry: '09/28',
      cvv: '347',
    },
    debitAccount: {
      balance: 4000,
      weeklyLimit: false,
      weeklyLimitAmount: 7000,
      moneySpent: 3000,
    },
  },
};
export const getRequest = ({API = ''}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: API,
      data: payload,
    })
      .then(function (resp) {
        resolve(resp);
      })
      .catch(error => {
        reject(error.response);
      });
  });
};
