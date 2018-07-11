const baseUrl = 'https://jsonplaceholder.typicode.com/users';

function fetchJson(request) {
  return fetch(request).then((res) => res.json());
}

export function getContactsFromApi() {
  return fetchJson(baseUrl);
}

export function getContactByIdFromApi(id) {
  return fetchJson(`${baseUrl}/${id}`);
}
