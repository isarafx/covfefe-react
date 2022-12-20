import axios from "axios";
import { storageAppendList } from "./localStorageMethod";
// export token = localStorage.getItem('token')
export const fetchFav  = (token) => { 
    try{
        const favorite = axios.get(`https://q27z6n.deta.dev/favorite`, {headers: {'accept': 'application/json', 'x-token': token}});
        storageAppendList(favorite.data)
      }catch(error){
        console.log(error)
      }
  };
export const fetchRecipe  = async (token) => { 
      try{
        const user_recipe = await axios.get("https://q27z6n.deta.dev/recipes/users", { headers: { 'accept': 'application/json', 'x-token':token } });
        storageAppendList(user_recipe.data)
      }catch(error){
        console.log(error)
      }
  };
export const fetchPublic = () =>{
      try{
        const commu_recipe = axios.get("https://q27z6n.deta.dev/recipes/community", { headers: { 'accept': 'application/json' } })
        // storageAppendList(user_recipe.data)

      }catch(error){
          console.log(error)
        }
  }