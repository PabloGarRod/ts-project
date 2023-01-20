(()=>{
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log('is new:', isNew)
  isNew = true;
  console.log('is new:', isNew)

  const random = Math.random()
  console.log('random:', random)
  isNew = random >= 0.5 ? true : false;
  console.log(`random: ${isNew}`)
})();
