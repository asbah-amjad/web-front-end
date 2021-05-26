
const calculateBmi = (height:number, weight:number)  => {
  const h_cm = height/100;
  const result = weight/(h_cm*h_cm);
  if(result < 18.5){
      console.log("underweight");
  }
  else if(result >=18.5 && result<25){
    console.log("healthy weight");
  }
  else if(result >=25 && result<30){
    console.log("Over weight");
  }
  else {
    console.log("Obese");
  }
};


export { calculateBmi };
