
type User = {
    name: string;
    age: number;
    email: string;
}

const CreateUser = (user: User): User => {
    return {
        name: user.name || '',
        age: user.age || 0,
        email: user.email || ''
    }
}

const myuser:User =CreateUser({
    name: 'Aditya',
    age: 20,
    email: 'aditya@gmail.com'
})

console.log(myuser)

function namer(x: number){
     return 5;
}