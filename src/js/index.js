import Search from './model/search';

/**
 * -Search Object
 * -Current REcipe Object
 * -Shopping list object
 * -Liked REcipes
 */

const state={};


const ControlSearch = async () =>{
    const query='pizza';

    if(query){
        state.search = new Search();


        await state.search.getRes();
        console.log(state.search.recipies);
    }
}




 document.querySelector('.search').addEventListener('submit',e => {
     console.log(e);
     e.preventDefault();
 });
