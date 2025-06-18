import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Profile from "../Profile/Profile";
import MessagePage from "../MessagePage/MessagePage";
import LoginPage from "../Login/LoginPage";
import RegisterPage from "../Login/RegisterPage";
import Authenticate from "../Login/Authenticate";
import CreatePassword from "../Login/CreatePassword";
import ActivationPage from "../Login/ActivationPage";
import EditAccountPage from "../Account/EditAccountPage";
import OtherUserProfile from "../../Components/ProfileComponents/OrderUserProfile";
import SearchPage from "../Search/SearchPage";
import { SidebarComponent } from "../../Components/Sidebar/SidebarComponent";
import NotificationsPage from "../Notification/NotificationPage";

const Router = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");
  
  const authRoutes = ["/login", "/register", "/create-password", "/activate"];
  const isAuthPage = authRoutes.includes(location.pathname);
  
  // Nếu chưa đăng nhập và không ở trang auth → chuyển về login
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/login" replace />;
  }
  
  return (
    <div className="flex">
      
      {isAuthenticated && !isAuthPage && (
        <div className="fixed top-0 left-0 w-[240px] h-screen border-r bg-white z-10">
          <SidebarComponent />
        </div>
      )}
      
      {/* Adjust main content based on whether sidebar is present */}
      <div className={`${isAuthenticated && !isAuthPage ? "pl-3 ml-[240px] w-[calc(100%-240px)]" : "w-screen"}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/user" element={<OtherUserProfile />} />
          <Route path="/message" element={<MessagePage  />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/account/edit" element={<EditAccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/activate" element={<ActivationPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="notification" element={<NotificationsPage/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Router;