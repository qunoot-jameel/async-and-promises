                         //QUESTION:01       
         function fetchGeeting(){
        setTimeout(()=>{
            console.log("Hello Thursday Class");
        },2000)
    };
fetchGeeting();
                       //QUESTION:02
                    
function simulateTask(){
   console.log("Task Started") ;
   setTimeout(()=>{
    console.log("Task Completed");
   },1000)
    };
    simulateTask();

                    //QUESTION:03

    function fetchData(){
        return new Promise((resolve:any,reject:any)=>{
            setTimeout(()=>{
                resolve("Data fetched successfully!");
            },1000);
        })
    };
    fetchData().then((message)=>{
        console.log(message);
    });

                     //QUESTION:04

    function fetchWithError(){
        return new Promise((resolve,reject)=>{
            if(Math.random()>0.5){
                resolve("Data fetched successfully!")
            }else{
                reject("Data fetched failed!")
            }setTimeout(()=>{
            },1000)
        })
        };
        fetchWithError().then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        });

                         //QUESTION:05

        function executeSequentially(){
            function fetchData(){
                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        resolve("Data Fetched!")
                    },1000)
                })
            }
        }
        function processData(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve("Data Processed!")
                },1000);
            })
        }
    fetchData().then((response)=>{
        console.log(response);
        return processData();
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
    executeSequentially();
