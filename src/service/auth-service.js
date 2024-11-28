
import axios from "axios";
 
export const loginHandler = async (username ,password) =>{

    try{
        const {data:{token}, status} = await axios.post("https://quiz-app-backend-8uic.vercel.app/auth/login",
        {
            username:username,
            password: password
        });
        if(status === 200){
            localStorage.setItem("token",token);
            return token
          
        }

        }
        catch(err){
        console.log(err)
        }
    }
