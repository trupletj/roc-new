import { use } from "react";
const objectToQueryString = (obj) => {
  var str = [];
  for (var p in obj) {
    if (p) {
      if (typeof obj[p] == "object") {
        for (var x in obj[p]) {
          if (x)
            str.push(
              encodeURIComponent(p) + "[]=" + encodeURIComponent(obj[p][x])
            );
        }
      } else {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
  }
  return str.join("&");
};

export const apiDomain = "https://www.api.roc.mn/";
export const mediaDomain = "https://www.api.roc.mn";
// export const apiDomain = "http://192.168.10.217:8000/";
// export const mediaDomain = "http://192.168.10.217:8000";
export function useItems(req) {
  let str = objectToQueryString(req.data);
  let url = req.url;
  if (str) {
    url = url + "?" + str;
  }
  let error = false;
  // const response = await fetch(api_path, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  const data = use(
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((e) => {
        error = e;
      })
  );

  return {
    items: data,
    isLoading: !data,
    isError: error,
  };
}

export const fetcher = async (endpoint, body, token) => {
  const JSONdata = JSON.stringify(body);
  // Authorization: "Bearer " + token,
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSONdata,
  };
  if (token) {
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSONdata,
    };
  }
  const url = `${apiDomain}${endpoint}`;
  const response = await fetch(url, options);

  return response;
};

export const fetcherForSwrGet = async (url, body) => {
  let str = objectToQueryString(body);
  let newurl = url;
  if (str) {
    newurl = newurl + "?" + str;
  }
  const res = await fetch(newurl);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

export const fetcherForSwrPost = async (fulllink, body, token) => {
  const JSONdata = JSON.stringify(body);
  // Authorization: "Bearer " + token,
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSONdata,
  };
  if (token) {
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSONdata,
    };
  }
  const url = `${fulllink}`;
  const response = await fetch(url, options);

  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};
