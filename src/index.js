const mystyle = {
    fontSize: "30px",
    color: "white",
    backgroundColor: "Blue",
    fontFamily: "Times New Roman, serif",
    position: "relative",
    top: "-8px",
     width : "100%",
    padding: "15px",
    display :"flex",
    left : "--20px"
     

};



//Parent compoment
const App = () => {
    return (

        <div>
            <NavBar />
            <MenuBar />
            <Para/>
            <Books />
            <Slider/>
            <Art1/>
            <Art2 />
            <Art3 />
            <Art4 />
            <Art5 />
            <Art6 />
            <Art7 />
            <Art8 />
            
        </div>


    );
};

//COMPONENT1
const NavBar = () => {
    return (
        <div>
            <h2 style={mystyle}>Home</h2>

        </div>
    );
};
//component 2

const MenuBar = () => {
   
    
    return (
        <div className="menubar" >
            <p>Smart House Book Store</p>
    
        


        </div>
    );
};

const Para= ()=>{
    const secondStyle ={
        color: "blue",
        backgroundColor : "lightblue",
        textAlign:"center",
        fontFamily:"Arial ",
        fontSize : "25px",
        position :"relative",
        top:"-180px",
        
        
        
    };

    
    const buttonstyle = {
        backgroundColor: "lightblue",
        color: "blue",
        fontSize: "25px",
        position: "relative",
        left: "45%",
        top: "-178px",
        display: "block",
        borderRadius: "10px",
        cursor:"pointer"
    };




    return(
        <div className="para">
            <h3 style={secondStyle}>Bring your mind here!!!!</h3>
            <button style  ={buttonstyle}>Shop Now</button>
            

            
        </div>
    );
};


const Books=()=>{
    const thirdStyle ={
        color :"grey",
        fontSize:"48px",
        textAlign:"center"
        
        
        

    };

return(
    <div>
        <h3 style={thirdStyle}>Book Shelves</h3>
    </div>
);

};
const Slider = () => {
return(


    <div className="container">
        <div className="gallery">
            <img src="images/2.jpeg"></img>
            
            <div className="desc">Book 01 <br></br>After the title and the book cover, your description is the most important book marketing material. </div>
        </div>
    </div>

);
    
}



const Art1 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/1.jpeg"></img>
                <div className="desc">Book 02 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};
const Art2 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/3.jpeg"></img>
                <div className="desc">Book 03 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};
const Art3 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/5.jpeg"></img>
                <div className="desc">Book 04 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};
const Art4 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/9.jpg"></img>
                <div className="desc">Book 05 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};

const Art5 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/13.jpeg"></img>
                <div className="desc">Book 06 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};

const Art6 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/7.jpeg"></img>
                <div className="desc">Book 07 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};

const Art7 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/10.jpeg"></img>
                <div className="desc">Book  08 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};

const Art8 = () => {

    return (
        <div className="container">
            <div className="gallery">
                <img src="images/5.jpg"></img>
                <div className="desc">Book 09 <br></br>After the title and the book cover, your description is the most important book marketing material.</div>
            </div>
        </div>

    );
};






ReactDOM.render(<App />, document.getElementById("root"));





