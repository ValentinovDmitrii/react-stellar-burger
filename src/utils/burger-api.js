export const BURGER_API_URL = 'https://norma.nomoreparties.space/api';

const checkResponse = res => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));  
};

export const getIngredients = async () => {
  const data = await fetch(`${BURGER_API_URL}/ingredients`)
    .then(checkResponse)
    .then(promise => {return promise.data})
    .catch(e => {console.error(e)})
    return data;
}
