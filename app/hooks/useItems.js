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
export function useItems(req) {
  let str = objectToQueryString(req.data);
  let url = req.url;
  if (str) {
    url = url + "?" + str;
  }
  let error = false;
  const data = use(
    fetch(req.url, {
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
