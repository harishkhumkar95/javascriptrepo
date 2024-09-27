           
           const limit =1000;
        const result = sumofMultiple(limit);
          function sumofMultiple(limit){
            let sum =0;
            for(let i=1;i<limit;i++){
                if(i % 3==0 || i % 5==0){
                    sum +=i;
                }
            }
            return sum;
          }
          console.log(result);