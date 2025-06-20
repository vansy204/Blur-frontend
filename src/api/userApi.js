import axios from "axios";

const BASE_URL = "https://6849-27-75-229-35.ngrok-free.app/api/profile";

const config = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

// Lấy thông tin profile của chính mình
export const fetchUserInfo = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/myInfo`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.data?.code !== 1000) {
      throw new Error(response.data?.message);
    }
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// Lấy thông tin user theo userId (dành cho nội bộ)
export const fetchUserByUserId = async (userId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/internal/users/${userId}`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.data?.code !== 1000) {
      throw new Error(response.data?.message);
    }
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// Lấy tất cả user profiles
export const fetchAllUserProfiles = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.data?.code !== 1000) {
      throw new Error(response.data?.message);
    }
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// Cập nhật profile người dùng
export const updateUserProfile = async (userProfileId, data, token) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${userProfileId}`, data,{
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.data?.code !== 1000) {
      throw new Error(response.data?.message);
    }
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// Xoá profile người dùng
export const deleteUserProfile = async (userProfileId, token) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${userProfileId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.data?.code !== 1000) {
      throw new Error(response.data?.message);
    }
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// Follow người dùng
export const followUser = async (userId, token) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/follow/${userId}`, {}, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// Unfollow người dùng
export const unfollowUser = async (userId, token) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/unfollow/${userId}`, {},{
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

// Tìm kiếm user theo tên
export const searchUsersByFirstName = async (firstName, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/search/${firstName}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};
// Lấy thông tin user theo profileId
export const fetchUserProfileById = async (profileId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${profileId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.data?.code !== 1000) {
      throw new Error(response.data?.message);
    }
    return response.data?.result;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
};

export const getFollowers = async (profileId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/follower/${profileId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data?.result;
  } catch (error) {
    console.error("Error fetching followers:", error);
    return [];
  }
};

export const getFollowings = async (profileId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/following/${profileId}`,{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data?.result;
  } catch (error) {
    console.error("Error fetching followings:", error);
    return [];
  }
};
