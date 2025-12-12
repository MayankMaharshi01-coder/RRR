import axios from 'axios';

axios.defaults.withCredentials = true;

export function postProduct(data) {
  return axios
    .post('http://localhost:3000/product', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((response) => {
      console.log('API response', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('API error', error);
      throw error;
    });
}

export function getProducts() {
  return axios
    .get('http://localhost:3000/allProducts')
    .then((response) => {
      console.log('API response', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('API error', error);
    });
}

export function getProductById(id) {
  return axios
    .get(`http://localhost:3000/product/${id}`)
    .then((response) => {
      console.log('API response', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('API error', error);
      throw error;
    });
}

export function postRegisterSchool(data) {
  return axios
    .post('http://localhost:3000/school/register', data)
    .then((response) => {
      console.log('API response', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('API error', error);
      throw error;
    });
}

export function postLoginSchool(data) {
  return axios
    .post('http://localhost:3000/school/login', data, {
      withCredentials: true,
    })
    .then((response) => {
      console.log('API response', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('API error', error);
      throw error;
    });
}

export function getCurrentSchool() {
  return axios
    .get('http://localhost:3000/school/current', {
      withCredentials: true,
    })
    .then((response) => {
      console.log('API response', response.data);
      return response.data;
    })
    .catch((error) => {
      console.error('API error', error);
      throw error;
    });
}

export function getAllSchool() {
  return axios
    .get('http://localhost:3000/school/allSchool')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error while getting all school', err);
    });
}

export function getSchoolProducts(id) {
  return axios
    .get(`http://localhost:3000/school/${id}/products`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error while getting school products', err);
    });
}

export function getSchoolById(id) {
  return axios
    .get(`http://localhost:3000/school/detail/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error while getting by school', err);
    });
}

export function getSchoolBySubDistrict(subDistrict) {
  return axios
    .get(
      `http://localhost:3000/school/subDistrict/school/?subDistrict=${subDistrict}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error while getting by district school', err);
    });
}


export function getSchoolLeaderBoard() {
   return axios
    .get(
      `http://localhost:3000/school/schoolLeaderBoard`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log('error while getting by district school', err);
    });
}
