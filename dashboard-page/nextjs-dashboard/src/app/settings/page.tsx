"use client";
import React, { useState, useEffect } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const Settings = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
    profile_pic_url: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        // Retrieve user ID from localStorage
        const userId = localStorage.getItem("userid");
        // Fetch user data using the retrieved user ID
        const response = await fetch(
          `http://localhost:8888/users/update/${userId}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        // Set user data to state
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data");
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // Retrieve user ID from localStorage
      const userId = localStorage.getItem("userid");
      const response = await fetch(
        `http://localhost:8888/users/update/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      if (!response.ok) {
        throw new Error("Failed to update user");
      }
      console.log("User updated successfully");
      // Optionally, show a success message or redirect the user
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to update user");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />
        <div className="p-7">
          <form onSubmit={handleSubmit}>
            {/* Username Input */}
            <div className="mb-5.5">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                placeholder="Enter your username"
              />
            </div>
            {/* Email Input */}
            <div className="mb-5.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                placeholder="Enter your email"
              />
            </div>
            {/* Password Input */}
            <div className="mb-5.5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                placeholder="Enter your password"
              />
            </div>
            {/* Bio Input */}
            <div className="mb-5.5">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={userData.bio}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                rows="6"
                placeholder="Tell us something about yourself..."
              />
            </div>
            {/* Profile Picture URL Input */}
            <div className="mb-5.5">
              <label
                htmlFor="profile_pic_url"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Profile Picture URL
              </label>
              <input
                type="text"
                id="profile_pic_url"
                name="profile_pic_url"
                value={userData.profile_pic_url}
                onChange={handleChange}
                className="w-full rounded border border-stroke bg-gray px-4.5 py-3 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                placeholder="Enter your profile picture URL"
              />
            </div>
            {/* Form Buttons */}
            <div className="flex justify-end gap-4.5">
              <button
                type="button"
                onClick={() =>
                  setUserData({
                    username: "",
                    email: "",
                    password: "",
                    bio: "",
                    profile_pic_url: "",
                  })
                }
                className="bg-gray flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex justify-center rounded bg-blue-700 px-6 py-2 font-medium text-gray hover:bg-opacity-90"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
