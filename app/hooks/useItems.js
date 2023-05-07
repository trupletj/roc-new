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
// export const apiDomain = 'http://192.168.10.188:8000/'
// export const mediaDomain = 'http://192.168.10.188:8000'
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
