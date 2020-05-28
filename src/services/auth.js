export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({username, password}) => {
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    let raw = JSON.stringify({identifier: username, password: password});

    let requestOptions = {
        method: 'POST',
        headers: headers,
        body: raw
    };

    fetch("http://localhost:1337/auth/local", requestOptions)
    .then(response => response.json())
    .then(result => setUser(result))
    .catch(error => console.log('error', error));
}

export const isLoggedIn = () => {
  const userInfo = getUser()

  return userInfo.jwt;
}

export const logout = callback => {
  setUser({})
  callback()
}