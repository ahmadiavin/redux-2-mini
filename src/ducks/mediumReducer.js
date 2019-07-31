import axios from "axios";

const initialSate = {
  loading: false,
  articles: []
};

const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export function requestArticles() {
  return {
    type: REQUEST_ARTICLES,
    payload: axios.get("/api/medium").then(res => res.data)
  };
}

export default function reducer(state = initialSate, action) {
  switch (action.type) {
    case `${REQUEST_ARTICLES}_PENDING`:
      return {
        ...state,
        loading: true
      };
      case `${REQUEST_ARTICLES}_FULFILLED`:
      return {
        loading: false,
        articles: action.payload
      };
      case `${REQUEST_ARTICLES}_REJECTED`:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
