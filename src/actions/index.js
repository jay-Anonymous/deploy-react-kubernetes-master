/*Copyright [2018] IBM Corp. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.*/

import fetch from 'isomorphic-fetch'
import ActionTypes from '../constants'

// Actions for retrieving movie
export const retrieveMoviesStart = () => {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_START,
  };
}

export const retrieveMoviesError = (error) => {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_ERROR,
    payload: error
  };
}

export const retrieveMoviesSuccess = (response) => {
  return {
    type: ActionTypes.RETRIEVE_MOVIES_SUCCESS,
    payload: response
  };
}

export const retrieveMovies = (userInput) => {
  return dispatch => {
  // Insert your api key on line 30, remove []
  const URL = `http://www.omdbapi.com/?apikey=[apiKey]&t=${userInput}`;
  let request = new Request(URL, {
    method: 'GET',
  });

  dispatch(retrieveMoviesStart())
  return fetch(request)
    .then(response => response.json())
    .then(result => dispatch(retrieveMoviesSuccess(result)))
    .catch(error => dispatch(retrieveMoviesError(error)));
  };
}
