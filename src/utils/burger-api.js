export const BURGER_API_URL = 'https://norma.nomoreparties.space/api';

const checkResponse = res => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));  
};

export const getIngredientsRequest = async () => {
  const data = await fetch(`${BURGER_API_URL}/ingredients`)
    .then(checkResponse)
    .then(promise => {return promise})
    .catch(e => {console.error(e)});
    return data;
}

export const getOrderRequest = async (bodyRequest) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyRequest
};
  const data = await fetch(`${BURGER_API_URL}/orders`, requestOptions)
    .then(checkResponse)
    .then(promise => {return promise})
    .catch(e => {console.error(e)});
    return data;
}