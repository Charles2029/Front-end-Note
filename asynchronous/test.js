
  
/*
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[0].name);
    });
  });
  
*/

const feetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) =>{
    const jsonPromise = response.json();
    jsonPromise.then((data) =>{
        console.log(data[0].name);
    });
});
/*
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].name);
    });
  */
 /*const fetchPromise = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

 fetchPromise
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data[0].name);
    });
    */

//This is called promise chaining and means we can avoid ever-increasing levels of indentation
// when we need to make consecutive asynchronous function calls.
//This is called promise chaining and means we can avoid ever-increasing levels of indentation
//when we need to make consecutive asynchronous function calls.

const fetchPromise1 =fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);


fetchPromise
    .then((response)=>{
        if(!response.ok){
            throw new Error(`Http error: ${response.status}`);
        }
        return response.json();

    })
    .then((data)=>{
        console.log(data[0].name);
    })

    const fetchPromise = fetch (
        "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
   
    fetchPromise 
        .then((response)=>{
            if(!response.ok){
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then((data)=>{
            console.log(data[0].name);
        })
        .catch((error)=>{
            console.error(`Could not get products: ${error}`);
        })
      
        async function fetchProducts(){
            try{
                // 在这一行后，我们么的函数将等待‘fetch()’调用完成
                // 调用‘fetch（）’将返回一个”响应“或抛出一个错误
                const response = await fetch(
                    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
                );
                if(!response.ok){
                    throw new Error(`HTTP 请求错误： ${response.status}`);
    
                }
                //在这一行之后，我们的函数将等待‘reponse.json()’的调用完成
                //'response.json()'调用将返回JSON 对象或抛出一个错误
                const json = await response.json();
                console.log(json[0].name);
            }catch (error){
                console.error(`无法获取产品列表： ${error}`);
            }
        }   

        fetchProducts


    function alarm(person,delay){
        return new Promise((resolve,reject)=>{
            if(delay <0){
                throw new Error ("Alarm delay must not be negative");
            }
            setTimeout(()=>{
                resolve(`Wake up, ${person}!`);
            },delay);
        });
    }
          



       /*function alarm(person, delay) {
            return new Promise((resolve, reject) => {
              if (delay < 0) {
                throw new Error("Alarm delay must not be negative");
              }
              setTimeout(() => {
                resolve(`Wake up, ${person}!`);
              }, delay);
            });
          }
          */