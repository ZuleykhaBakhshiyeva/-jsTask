//6/The user enters a two-digit number.Print the literal representation of this number to the console.For exampe,typing '25' will display 'twenty five' in the console, and '13' will display 'thirteen'.

const a=+prompt('Enter a number');
console.log('a='+a);

let result1;
let result2;


let r=a%10;
let n=a-r;



if(a==10){
    result1='ten'
    result2=''
}else if(a==11){
    result1='eleven'
    result2=''
}else if(a==12){
    result1='tewelve'
    result2=''
}else if(a==13){
    result1='thirteen'
    result2=''
}else if(a==14){
    result1='fourteen'
    result2=''
}else if(a==15){
    result1='fifteen'
    result2=''
}else if(a==16){
    result1='sixteen'
    result2=''
}else if(a==17){
    result1='seventeen'
    result2=''
}else if(a==18){
    result1='eighteen'
    result2=''
}else if(a==19){
    result1='ninteen'
    result2=''
}else{if(r==1){
    result2='one'
    }else if(r==2){
        result2='two'
    }else if(r==3){
        result2='three'
    }else if(r==4){
        result2='four'
    }else if(r==5){
        result2='five'
    }else if(r==6){
        result2='six'
    }else if(r==7){
        result2='seven'
    }else if(r==8){
        result2='eight'
    }else if(r==9){
        result2='nine'
    }
else{if(n==20){
        result1='twenty'
    }else if(n==30){
        result1='thirty'
    }else if(n==40){
        result1='fourty'
    }else if(n==50){
        result1='fifty'
    }else if(n==60){
        result1='sixty'
    }else if(n==70){
        result1='seventy'
    }else if(n==80){
        result1='eighty'
    }else if(n==90){
        result1='ninety'
    }
}
}


console.log(result1,result2)