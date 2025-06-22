import axios from "axios";

export const fetchUserPosts = async (token) => {
  try {
    const response = await axios.get(
      "https://35fe-2405-4802-9170-80f0-2457-8c6d-10fe-855d.ngrok-free.app/api/post/my-posts",
      {
        method: "GET",
        headers: {
          
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data?.code !== 1000) {
      throw new Error(`fetch error: ${response.data?.code}`);
    }

    return response.data?.result;
  } catch (error) {
    console.error("Fetch posts error:", error);
    throw error; // Cho phép nơi sử dụng bắt lỗi nếu cần
  }
};
export const fetchAllPost = async (token) => {
  try {
    const response = await axios.get("https://35fe-2405-4802-9170-80f0-2457-8c6d-10fe-855d.ngrok-free.app/api/post/all", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.data?.code !== 1000) {
      throw new Error(`fetch error: ${response.data?.code}`);
    }

    return response.data?.result;
  } catch (error) {
    console.error("Fetch posts error:", error);
    throw error; // Cho phép nơi sử dụng bắt lỗi nếu cần
  }
};
export const fetchLikePost = async (token,postId) =>{
  try {
    const response = await axios.get(`https://35fe-2405-4802-9170-80f0-2457-8c6d-10fe-855d.ngrok-free.app/api/post/${postId}/likes`, {
      method: "GET",
      headers: {

        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.data?.code !== 1000) {
      throw new Error(`fetch error: ${response.data?.code}`);
    }
    return response.data?.result;
  } catch (error) {
    console.error("Fetch posts error:", error);
    throw error; // Cho phép nơi sử dụng bắt lỗi nếu cần
  }
}

export const deletePost = async (token, postId) => {
  try {
    const response = await axios.delete(`https://35fe-2405-4802-9170-80f0-2457-8c6d-10fe-855d.ngrok-free.app/api/post/${postId}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data?.code !== 1000) {
      throw new Error(`delete error: ${response.data?.code}`);
    }

    return response.data?.result;
  } catch (error) {
    console.error("Delete post error:", error);
    throw error;
  }
};


export const getPostsByUserId = async (userId, token) => {
  const response = await axios.get(`https://35fe-2405-4802-9170-80f0-2457-8c6d-10fe-855d.ngrok-free.app/api/post/users/posts/${userId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data?.result || [];
};
export const fetchAllComments = async (token, postId) => {
  try {
    const response = await axios.get(`https://35fe-2405-4802-9170-80f0-2457-8c6d-10fe-855d.ngrok-free.app/api/post/comment/${postId}/comments`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
    );
    return response.data?.result;
  } catch (error) {
    console.error("Fetch all comments error:", error);
    throw error;
  }
};