# Java-REST-API-with-Frontend-and-Backend-Connectivity
This project implements the REST API for data interchange between the client and server. The ReactJS UI framework is employed to design the web forms, enabling the execution of Create, Read, Search, and Delete operations. Java Spring Boot is utilized to manage the REST API.


## Features

- Single Page Application (SPA)
- Simple and Efficient User Interface (UI)


## Spring Boot Framework for Backend

- The Java Spring Boot framework is used for handling requests from the frontend. The communication employs the REST architectural design for data interchange.
- The implementation of the REST API in Spring Boot is clearly explained in the following Git repository 'https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman.git'.
- '@crossorigin' annotation is used in Spring Boot Controller for accepting the Cross Origin Resource Sharing (CROS) among frontend and backend.

## ReactJS UI framework for Frontend

- ReactJS is a JavaScript framework used to create efficient user interfaces. In this project, ReactJS is employed to generate various web forms for accepting user data and performing operations such as Create, Read, Search, and Delete.


## How to Run this project locally on your machine ?

- To Run the server follow the above mentioned Git repository.
- To Run the Frontend application, clone this project on your local machine and execute the following Git commands in terminal.
 ```
 cd 'project folder'
 npm install
 npm run dev
 ```


## Create Operation

![create](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/d073ba10-4db5-48c5-b000-18afc434fd51)

- Enter the required details in the form and click 'send'. Once the insertion is successful, a message will be displayed stating 'server details have been inserted successfully'.

## Fetch Operation

![fetch](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/804a07a8-575e-4965-b119-ef8f188dbd2b)

- Click on the 'Fetch' button, it will retrieve all the available records from the MongoDB database.

## Read Operation
![read](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/1f6c3fb7-757b-4277-ade8-4fee5f9b8e58)

- Enter the 'server id', and click the 'send' button. If the record is available in the database, it will be retrieved and displayed otherwise, an error message '404 record not found' will be displayed. 

![readNo](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/1813d139-461c-4a65-a6bf-7d79766ad9fe)

## Search Operation

![search](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/d5f76b69-6f3f-4f94-bca4-df645b94f7a2)

- Enter the 'server name', and click the 'send' button. If the record is available in the database, it will be retrieved and displayed otherwise, an error message '404 record not found' will be displayed. 

![searchNo](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/b40839b0-5478-4743-b869-1b51d1e3aa6e)

## Delete Operation

![delete](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/d5f4b872-aac4-43c8-bcee-9a891969f165)

- Enter the 'server id' from which you wish to remove records in the database, then click the 'Delete' button. If the record is found in the database, it will be removed. Otherwise, an error message '404 record not found' will be displayed.

![deleteNo](https://github.com/MARIAASHRAF1502/Java-REST-API-using-SpringBoot-MongoDB-Postman/assets/67148270/dc7871ce-b8a9-44d2-b6f2-11348faf4f0b)


## Axios for handling Request and Response in ReactJS

Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF.

## Code Explanation !

1. src/Create.jsx

```

const [res,setRes] = useState("");

const handleSubmit = ()=>{
    axios.post("http://localhost:8080/create",{
        id:server.id,
        name:server.name,
        language:server.language,
        framework:server.framework
    }).then((res)=>{
        setRes(res.data);
    })
}

<button onClick={handleSubmit}>send</button>

```

- When the user clicks the 'send' button, the handleSubmit() method is executed. This method utilizes Axios to send an HTTP request with the 'POST' method, including the data in the body section. 
- Since Axios is a promise-based API for HTTP requests and responses, it returns two methods: 'then' for success and 'catch' for failure or errors.
- In the provided code, it handles the success message from the database and then the message is stored in 'res' variable using 'useState' React Hook.
- 'http://localhost:8080/' is the address where the Spring Boot application (server) is running.
- The request is sent to the '/create' endpoint at 'http://localhost:8080/create'. The server will respond accordingly when it receives a 'POST' request to '/create'.

2. src/ReadAll.jsx

```
const [data,setData] = useState([]);

  const sendRequest = ()=>
  {
    axios.get("http://localhost:8080/getServer").then((res)=>
    {
    setData(res.data);
    })
  }

  <button onClick={sendRequest}>Fetch</button>
      {data.map((value)=>{
        return(
          <>
          <div className='mainContainer'>
          <p>Server id : {value.id}</p>
          <p>Name : {value.name}</p>
          <p>Language : {value.language}</p>
          <p>Framework : {value.framework}</p>
          </div>
          </>
        )
```

- Once the user clicks on the 'Fetch' button, a request with the 'GET' method is sent to the server to retrieve all available records. The fetched records are stored in a 'data' variable using the 'useState' React Hook.

- The JavaScript map() method is then employed to iterate over each individual record."

3. src/Search.jsx

```
const [msg,setMsg] = useState("");
const [serverDetails,setServerDetails] = useState([]);

const sendRequest = ()=>{
    axios.get("http://localhost:8080/findRecord/"+`${name.name}`).then((res)=>
    {
    setServerDetails(res.data);
    setMsg("");
    }).catch((err)=>
    {
      setMsg(err.message+" , no Record found");
    })
  }

<button onClick={sendRequest}>send</button>

<pre>{msg}</pre>
```

- When the user clicks the 'send' button, the sendRequest() method is executed. This method utilizes Axios to send an HTTP request with the 'GET' method, including the 'server name' in the body section. 
- If the response is 'success', meaning data is available, the 'then' method is executed, and those records are stored in the 'serverDetails' variable using React Hook. Otherwise, the 'catch' method is executed, storing the error message in the 'msg' variable, which is then displayed to the user.

## 

                                    Happy Learning !


