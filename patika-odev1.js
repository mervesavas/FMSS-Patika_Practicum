import axios from "axios";

const Users = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    resolve(data);
  });
};

const Posts = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    resolve(data);
  });
};

(async () => {
  try {
    const user = await Users(1);
    const post = await Posts(1);

    console.log(user);
    console.log("Post:", post);
  } catch (e) {
    console.log(e);
  }
})();

