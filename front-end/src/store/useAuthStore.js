import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import { toast } from "react-hot-toast"
import {io} from "socket.io-client"

const Base_Url=import.meta.env.MODE === "development"?'http://localhost:5001':"/"

export const useAuthStore= create((set,get) => ({
    authUser:null,
    isSigningUp:false,
    isLoggingIn: false,
    isUpdatingProfile:false,
    isCheckingAuth:true,
    onlineUsers: [],
    socket:null,

    checkAuth: async()=>{
        try {
            const res=await axiosInstance.get("/auth/check");

            set({authUser:res.data});
            get().connectSocket()
        } catch (error) {
            console.log("Error in checkAuth:", error);
            set({authUser:null})
        } finally{
            set({ isCheckingAuth:false});
        }
    },
    signup:async(data) => {
        set({isSigningUp:true}); 
        try {
            const res = await axiosInstance.post("/auth/signup",data);
            
            console.log("Signup response:", res.data);
            set({ authUser: res.data});
            toast.success("Account created successfully");
            get().connectSocket();
            

        } catch (error) {
            console.error("Signup error:", error);

            if (error.response) {
                console.log("Status:", error.response.status);
                console.log("Data:", error.response.data);
                toast.error(error.response.data?.message || "Signup failed");
            } else {
                toast.error("Network error or server not reachable");
            }
        } finally{
            set({isSigningUp:false});
        }
    },
    login: async (data) => {
        set({ isLoggingIn: true });
          try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authUser: res.data });
            toast.success("Logged in successfully");

            get().connectSocket();
          } catch (error) {
            toast.error(error.response.data.message);
          } finally {
            set({ isLoggingIn: false });
          }
    },
    logout: async ()=>{
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser:null});
            toast.success("Logged Out Successfully.");
            get().disconnectSocket();
        } catch (error) {
            
        }
    },
   updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
          try {
            const res = await axiosInstance.put("/auth/update-profile", data);
            set({ authUser: res.data });
            toast.success("Profile updated successfully");
          } catch (error) {
            console.log("Error in update profile:", error);
            toast.error(error?.response?.data?.message || "Failed to update profile");
          } finally {
            set({ isUpdatingProfile: false });
          }
    },

    connectSocket: ()=> {
      const {authUser} = get();
      if(!authUser || get().socket?.connected) return;

      const socket =io(Base_Url, {
        query:{
          userId: authUser?._id,

        },
      });
      socket.connect();
      set({socket:socket});
      socket.on("getOnlineUsers",(userIds)=>{
        set({onlineUsers:userIds})
      });

    },

    disconnectSocket:()=>{
      if(get().socket?.connected) get().socket.disconnect();
    }

}))