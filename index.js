// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity ="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
if(flair == "*"){
   
    return   function () { return 'You are '+flair+'a hard worker'+flair+'!';}
    }
   else if(flair == "||"){
    return   function () { return 'You are '+flair+'a dedicated programmer'+flair+'!';}
     
   }
}
