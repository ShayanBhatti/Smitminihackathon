import { save } from "@/services/users"
export default function signup(req,res){
    if(req.method === "POST") {
        return res.status(404).send();

    }
    const {email , password , name} = req.body;
    
    
}