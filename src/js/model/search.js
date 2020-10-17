import axios from 'axios';

export default class Search{
    constructor(query){
        this.query=query;
    }
    
    async getRes(){
        try{
        const res=await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
        this.recipies=res.data.recipes;
        //console.log(this.recipies);
        }
        catch(error){
            alert("found an error");
        }
    }
}