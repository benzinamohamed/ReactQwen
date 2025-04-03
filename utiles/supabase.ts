import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
type Provider = "google" | "github";


 const supabase = createClientComponentClient( process.env.NEXT_PUBLIC_SUPABASE_URL , process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY , process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY);

console.log(process.env.SUPABASE_URL);
export const signWithProvider = async( providerName : Provider  ) =>
    {
    return  await supabase.auth.signInWithOAuth({
        provider: providerName,
        options: { redirectTo: `${window.location.origin}/redirectpage`},
      })   
}

export const getCurrentUser = async() =>{
    return await supabase.auth.getSession();  
}

export const insertUser = async(userId : string , email : string , name : string , avatar_url : string) => {
    const { data, error } = await supabase.from("users").insert({ id: userId , email , name , avatar_url });
    return { data, error };
}
export const insertConversation = async(userId : string , conversationName : string) => {
  const { data, error } = await supabase.from("conversations").insert({ user_id: userId , name : conversationName }).select("id");
  return { data, error };
}
export const getConversations = async(userId : string) => {
  const { data, error } = await supabase.from("conversations").select("*").eq("user_id", userId);
  return { data, error };
}

export const getMessages = async(conversationId : string) => {
  const { data, error } = await supabase.from("messages").select("*").eq("conversation_id", conversationId);
  return { data, error };
}

export const insertMessage = async(sender : string , content : string , conversation_id : string ) => {
    const { data, error } = await supabase.from("messages").insert({ conversation_id: conversation_id , sender : sender ,content : content }).select("*");
    return { data, error };
    }


export const sginOut = async() =>
{
    return await supabase.auth.signOut()
}
