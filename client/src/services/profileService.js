// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

// const getAllProfiles = async () => {
//   const response = await axios.get(`/api/profile`);
//   return response.data || [];
// };

const signInUser = async (username, password) => {
  const response = await axios
    .post(`/login/`, {
      username: username,
      password: password,
    })
    .then((response) => {
      const user = response.data.user;
      return user;
    })
    .catch((error) => {
      const err = JSON.stringify(error.response.data.message);
      return err;
    });

  return response;
};

// All of the endpoints in this file can be exported below
export { signInUser };
