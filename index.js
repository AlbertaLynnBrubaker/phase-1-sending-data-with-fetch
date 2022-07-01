// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         'Content-Type': "application/json",
//         'Accept': "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch('http://localhost:3000/dogs', configurationObject).then(r => r.json()).then(object => console.log(object)).catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

  // f submitData(a, b) a -> userName b-> userEmail


// const configObj = {
//     method: "POST",
//     headers: {
//         'Content-Type': "application/json",
//         'Accept': "application/json"
//     },
//     body: JSON.stringify({
//         'Name': `${userName}`,
//         'Email': `${userEmail}`
//     })
// };
let message = 'Unauthorized Access'
const submitData = (userName, userEmail) => {
    return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify({
                'name': `${userName}`,
                'email': `${userEmail}`
            })
        }).then(r => r.json()).then(resObj => {

            const body = document.querySelector('body');
            const div = document.createElement('div');
            div.textContent = resObj.id;
            body.appendChild(div)
        }).catch(error => {
            const div = document.createElement('div');
            div.textContent = message;
            document.body.appendChild(div)
        });
};

submitData('Freddy', 'fbanger@gmail.com');