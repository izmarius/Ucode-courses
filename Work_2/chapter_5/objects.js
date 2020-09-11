// object literals

// this keyword takes the value of the scope where the function is called

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@something.com',
    location: 'berlin',
    blogs: ['why pizza rules', '10 things to do in your free time'],
    login() {
        console.log('the user logged in');
    },
    logBlogs() {
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    logThisArrowFun: () => {
        console.log(this);
    }
};

// console.log(user);
// console.log(user.age);
// console.log(user['name']);

// const key = 'location';
// console.log(user[key]);

// user.login();
// user.logBlogs();

user.logThisArrowFun();
console.log(this);

