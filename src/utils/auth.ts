import { errorToast, successToast } from "@/providers/Toast";
import { supabase } from "@/supabase/client";
import { User } from "@/types/User";

export async function login(data: User) {
    const { email, password } = data;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        errorToast(error.message);
        return;
      }
      if (data && !error) {
        // localStorage.setItem("token", JSON.stringify(data?.session?.access_token))
        // localStorage.setItem("user", JSON.stringify(data?.user?.user_metadata))
        successToast("Login Successful");
        // redirect('/')
      }
  
      // console.log(data, error);
      return { data, error };
    } catch (error) {
      errorToast(error);
      console.log(error);
    }
  }