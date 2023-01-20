(()=>{
  let myDinamicVar: any;
  myDinamicVar= 10;
  myDinamicVar= '10';
  myDinamicVar= [10];
  myDinamicVar= null;
  myDinamicVar= {};

  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toLowerCase();
  console.log(rta);

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log(rta2);





})();
