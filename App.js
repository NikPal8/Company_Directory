//Departments: Information Communication Technology, Finance, Marketing, Human Resources, General
const StaffAcc = [
     {
          name: 'Tom',
          lastname: 'Jones',
          username:'tom.jones',
          password: 'Open!@ant2',
          email: 'tom.jones@gmail.com',
          birthDate: '17/04/1978',
          street: '12A Christie Road',
          suburb: 'Ryde',
          city: 'Sydney',
          state: 'NSW',
          postcode: 2113,
          department: 'General',
     },
     {
          name: 'James',
          lastname: 'West',
          username:'james.west',
          password: 'ten!*sand2',
          email: 'james.west@gmail.com',
          birthDate: '20/07/1989',
          street: '68 Peel Street',
          suburb: 'Fairfield',
          city: 'Sydney',
          state: 'NSW',
          postcode: 2196,
          department: 'Information Communication Technology',
     },
     {
          name: 'Anna',
          lastname: 'Bourne',
          username:'anna.bourne',
          password: 'apple!*three#',
          email: 'anna.bourne@gmail.com',
          birthDate: '20/07/1989',
          street: '10 Gladstone Street',
          suburb: 'Parramatta',
          city: 'Sydney',
          state: 'NSW',
          postcode: 2181,
          department: 'Finance',
     },
     
     {
          name: 'Sarah',
          lastname: 'Blair',
          username:'sarah.blair',
          password: 'bin*78Fence',
          email: 'anna.bourne@gmail.com',
          birthDate: '28/11/1989',
          street: '10 Gladstone Street',
          suburb: 'Parramatta',
          city: 'Sydney',
          state: 'NSW',
          postcode: 2166,
          department: 'Human Resources',
     },
     
     {
          name: 'April',
          lastname: 'May',
          username:'april.may',
          password: 'lovlace23$',
          email: 'anna.bourne@gmail.com',
          birthDate: '10/02/1979',
          street: 'Lotus street',
          suburb: 'Fairlight',
          city: 'Sydney',
          state: 'NSW',
          postcode: 2117,
          department: 'Marketing',
     }

];

const userId = document.querySelector('#username');     
const signInBtn = document.querySelector('#signInBtn');
let message = "";


signInBtn.addEventListener('click', ()=> {
     const username = userId.value;
     const usernameValue = username.toString();
     if(usernameValue === "tom.jones") {
          alert("YES")
     } else {
          alert("NO");
     }
});

// function validateUsername(user) {
     
//      if(usernameValue === "tom.jones") {
//           message = "Welcome back!";
//      } else {
//           message = "Invalid user";
//      }
//      user = message;
//      return user;
// }