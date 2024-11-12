import { successToast } from "@/providers/Toast";
import { User } from "@/types/User";
import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("673086740019928747d4");

// const databases = new Databases(client);
const account = new Account(client)


export const uploadSermon = async () => {
  try {
    // const response = await databases.createDocument(
    //   "669aeb560037c7d31414",
    //   "669aeb6d001df729bbaa",
    //   ID.unique(),
    //   { firstname: firstname, email: email, role: role }
    // );

    // return response
    // console.log(response)
  } catch (error) {
    console.log(error);
  }
};

export const DownloadSermon = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const getAllSermons = async () => {
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export const login = async({email, password}: User) => {
try{
   const response = await account.createEmailPasswordSession(email, password)
   if(response) successToast('Login Successful')
   return response
}catch(error){
  console.log(error)
}
}