import UserService from './src/domains/User/services/UserService';

async function main() {

    const body = {
        email : "joao@gmail.com",
        name : "joaozinho",
        role : "ADMIN",
        password : "123456" 
    };

    const user = await UserService.create(body);
    
    console.log(user)
}

main();