import React, { useContext, useState } from "react";
import { AuthContext } from "../Authentications/AuthContext";
import { updateProfile } from "firebase/auth";
import "./Profile.css";
import { toast } from "react-toastify";

const NAVBAR_HEIGHT = 64; // px

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  const [panelOpen, setPanelOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const capitalizeName = (value) =>
    value
      ?.split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      toast.success("Profile updated successfully");
      loading
      setPanelOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="min-h-screen profile text-white relative overflow-hidden"
      style={{ paddingTop: NAVBAR_HEIGHT }}
    >
      {/* ================= COVER SECTION ================= */}
      <div className="relative">
        <div className="h-72 w-full">
          {user?.coverURL ? (
            <img
              src={user.coverURL}
              alt="cover"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          )}
        </div>

        {/* PROFILE IMAGE */}
        <div className="absolute -bottom-20 left-1/2 lg:left-32 transform -translate-x-1/2 lg:translate-x-0">
          <img
            src={user?.photoURL || "https://i.pravatar.cc/300"}
            alt="profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-2xl"
          />
        </div>
      </div>

      {/* ================= USER INFO ================= */}
      <div className="mt-24 px-6 lg:px-32 relative z-10">
        <div className="max-w-2xl">

          <div className="info-box">
            <h2 className="text-3xl font-semibold">
              {capitalizeName(user?.displayName || "Unnamed User")}
            </h2>
          </div>

          <div className="info-box mt-3">
            <p className="text-gray-300">{user?.email}</p>
          </div>

          <button
            onClick={() => setPanelOpen(true)}
            className="mt-6 px-6 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-700 transition shadow-lg"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* ================= SLIDING UPDATE PANEL ================= */}
      <div
        className={`absolute right-0 bg-white/10 backdrop-blur-2xl shadow-2xl 
        transform transition-transform duration-500 z-40
        ${panelOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          top: NAVBAR_HEIGHT,
          height: `calc(100% - ${NAVBAR_HEIGHT}px)`,
          width: "24rem",
        }}
      >
        <div className="relative p-6 h-full flex flex-col">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setPanelOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
          >
            ✕ Close
          </button>

          <h3 className="text-xl font-semibold mb-8 mt-6">
            Edit Profile
          </h3>

          <form
            onSubmit={handleUpdate}
            className="space-y-5 flex-1 overflow-y-auto"
          >
            <div className="form-box">
              <label className="text-sm">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-box">
              <label className="text-sm">Profile Image URL</label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                className="form-input"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
