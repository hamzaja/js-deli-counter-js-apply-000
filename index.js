var katzDeliLine = [];
var counter = 0;
function takeANumber(lineOFPeople){
    counter++;
    lineOFPeople.push(counter);
return "Welcome you are number " + counter;

// for ( let i=0 ; i<=lineOFPeople.lenght; i++ ){
//   array +=  lineOFPeople[i]+ "Welcome,  You are number "+ i ;
  
//}
  }


// function nowServing(katzDeliLine){
//   if (katzDeliLine.length>1){
// =======
//   return "Welcome, " + name +". You are number "+ (lineOFPeople.length)+" in line.";
  
//}

function nowServing(katzDeliLine){
  if (!katzDeliLine){
//>>>>>>> d886e5a9759d47e5d197638a18ee584c5e765c29
    return "Currently serving " + katzDeliLine.shift()+".";
  }
  else return  "There is nobody waiting to be served!";
}


function currentLine(lineOFPeople){
//<<<<<<< HEAD
  let new1 = [];
  for (let i=0 ;  i < lineOFPeople.length  ; i++ )
  new1.push(i+1+'. '+lineOFPeople[i]) ;
  new1 = new1.join(', ');
  if (lineOFPeople.length>1)
  return "The line is currently: " +new1;
  else
  return "The line is currently empty.";
}
//=======
  // if (lineOFPeople.length>1)
  // return "The line is currently: " +lineOFPeople ;
  // else
  // return "The line is currently empty.";
//}
//>>>>>>> d886e5a9759d47e5d197638a18ee584c5e765c29
