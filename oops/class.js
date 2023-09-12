class user{
    constructor(name,username,password){
        this.name=name;
        this.username = username;
        this.password = password;
    }
    login(username, password){
        if(username == this.username && password == this.password){
            console.log("Login sucessfully");

        }else{
            console.log("Authentication failed!!");
        }
    }
   

};

    const nehal= new user("Nehal Mahida","nehal mahida","password:)");
    const js= new user("javascript","js","python:)")
    
    nehal.login("nehal mahida","password:)");// login sucessfully
    js.login("js","python:)");// Login sucessfully

    console.log(nehal.name);// Nehal Mahida
    console.log(nehal.password); // undefined
    // console.log(nehal.#password); // syntax error

    
    nehal.log("nehal_mahida", "password:)");// authentication failed!!
    nehal.log("nehal_mahida","new_password:)");//login sucessfully
