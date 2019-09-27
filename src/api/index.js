function ChordeeApi() {
  const BASE_URL = 'http://localhost:3000';

  const getConfig = {
    method: 'GET',

    headers: {
      Accept: 'application/json',
    },
  };

  const postConfig = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const putConfig = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const deleteConfig = {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  /**
   * The response.json() is a promise that reads the HTTP response
   * body, from the network input stream.
   *
   * We resolve the Promise when the body is completely read, and
   * along with the body data, we pass a few fields from the original
   * response to the client code.
   *
   *
   * @param  {object} response The Response object as defined in the Fetch Api
   *
   * @return {object}          The parsed JSON body, and a number of fields
   *                           from the response
   */
  const parseJson = response => new Promise(
    resolve => response.json().then(json => resolve({
      status: response.status,
      ok: response.ok,
      json,
    })),
  );

  const makeRequest = (url, options) => (
    new Promise(
      (resolve, reject) => fetch(url, options)
        .then(parseJson)
        .then(
          response => (response.ok ? resolve(response.json) : reject(response.json)),
        ),
    )
  );

  const makeGetRequest = url => makeRequest(url, getConfig);
  const makePostRequest = (url, body = {}) => makeRequest(
    url,
    Object.assign({}, postConfig, { body: JSON.stringify(body) }),
  );
  const makePutRequest = (url, body = {}) => makeRequest(
    url,
    Object.assign({}, putConfig, { body: JSON.stringify(body) }),
  );
  const makeDeleteRequest = url => makeRequest(url, deleteConfig);

  return {
    fetchAllSong() {
      const url = BASE_URL + '/api/songs/';
      return makeGetRequest(url);
    },

    createSong(data) {
      const url = '/api/song/';
      return makePostRequest(url, data);
    },

    fetchSong(id) {
      const url = `/api/song/${id}`;
      return makeGetRequest(url);
    },

    updateSong(id, data) {
      const url = `/api/song/${id}`;
      return makePutRequest(url, data);
    },

    deleteSong(id) {
      const url = `/api/delete-song/${id}`
      return makeDeleteRequest(url);
    },
  };
}

export default ChordeeApi;
