const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Stronglover Blog </h1>
            <div className="links">
                <a href="/" style={{color:"#f3a039"}}>Home</a>
                <a href="/create" style={{ 
                    color: "white",
                    backgroundColor: '#f3a039',
                    borderRadius: '8px'
                    }}>New Blog</a>
            </div>
            
        </nav>
     );
}
 //we can also make style css by using style ={{ css here }}
export default Navbar;