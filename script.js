let getUsers = fetch('https://reqres.in/api/users?per_page=12')
  .then((e) => {
    return e.json()
  })

  getUsers.then((result) => {
    let allUsers = result.data
    console.log(allUsers)

    // Вывод всех фамилий пункт 2
    console.log('---------------');
    console.log('Пункт 2');
    allUsers.forEach(item => {
      console.log(item.last_name);
    });
    console.log('---------------');

    // Вывод всех фамилий которые начинатся на F пункт 3
    console.log('Пункт 3');
    allUsers.forEach(item => {
      if(item.last_name.startsWith('F') == true) {
        console.log(item)
      }
    });
    console.log('---------------');

    // Вывод имени и фамилии с помощью reduce пункт 4
    console.log('Пункт 4');
    let names = allUsers.reduce((a,b,i) => a += `${b.first_name} ${b.last_name}${i !== allUsers.length-1 ? ', ' : ''}`,''); 
    console.log(`Наша база содержит данные следующих пользователей: ${names}`); 

    // Пункт 5
    console.log('Пункт 5');
    allUsers.forEach((item) => {
      console.log(Object.keys(item))
    })
  })