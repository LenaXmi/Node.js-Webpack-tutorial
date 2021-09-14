
//Дефолтный экспорт
export default function fetchAllUsers() {
    console.log('fetchAllUsers')
}
//Именованный экспорт
export const fetchUserById = (id) => {
    console.log('fetchUserById')
}

export const updateUserById = (id) => {
    console.log('updateUserById')
}

export const x = 5


function checkForSpam(message) {
  let result;
  // Change code below this line

    if (message.toLowerCase().includes( 'sale')) {
      
  result = true;
  }
  else if(message.toLowerCase().includes( 'spam')){
  result = true;
    }
    else {
        result = false;
    }
  // Change code above this line
    
  return result;
}

console.log(checkForSpam("Get best sale offers now!"))