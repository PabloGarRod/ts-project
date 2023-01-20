(()=>{
  let userId: string | number;
  userId = 12334;
  userId='asdjkgfh';

  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`Mi string: ${myText.toLowerCase()}`);
    }else{
      console.log(`Mi number: ${myText.toFixed(1)}`);

    }
  }

  greeting('asa');
  greeting(12.28379);
})();
