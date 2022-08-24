import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //lists outpputing
    const [blogs,setBlogs] = useState(null);
//useEffect()
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
           return res.json();
        })
        .then(data => {
            console.log(data);
        })
    }, []);

    const handClick = (e) => {
        console.log('Hello, ninjas', e);
    }

    const handlclickagain = (name,e) => {
        console.log('Hello ' +name, e.target);
    }
    //let name = 'mario';
    //useState for update states like this example 
    const [name,setName] = useState('mario');
    const [age,setAge] = useState(20);
    const handlclickusestate =() =>{
        setName('Salim Taha Yacine');
        setAge('sorry is '+29+' :p ')
    }
    //BUTTON HANDLE Color using this anonymos function
    const [color,setColor] = useState("black");
    const handlColorchange = () => {
        setColor(color === "black" ? "#f3a039" : "black")
    }
    //BUTTON HANDLE DELETE using this anonymos function
    const handDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }


        /*============================= */
    return ( 
        <div>
            <h4 style={{color:color}}> this is Home </h4>
            <button onClick={handClick}>Click Me</button> <br></br>
            <button onClick={ (e) => handlclickagain('Salim', e)}> click on Me Again</button>
            <br /> <br />
            <h4 style={{color:color}}>my name is {name} and {age} old</h4>
            <button onClick={handlclickusestate}>button for usestate</button>
            <button onClick={handlColorchange}>change Color</button>
            <br /> <br /><br /> <br />
           {/*<BlogList  blogs={blogs} title="This is a Title props" handDelete={handDelete}/>
            <BlogList  blogs={blogs.filter((blog)=> blog.author === 'salim')} title="Salim's Blogs"/>*/} 
        </div>
     );
}
 
export default Home;