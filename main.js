function palindroma(str){

    let newstr = str.replace(/\W/g, "");

    console.log(newstr);

    let reverse = newstr.split('').reverse().join('');

    console.log(reverse);


    if(reverse == newstr){
        return true;
    } else{
        return false;
    }

}

let verifica = palindroma('i topi non avevano nipoti');
console.log(verifica);
