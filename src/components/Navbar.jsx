import Logo from "../assets/Sergellogo.png";

function Navbar() {


  return (
    <nav>
      <div className="container  md:flex  md:justify-evenly bg-blue-300 bg-opacity-10  mx-auto ">
        <div className="md:flex  md:gap-10 pt-3">
          <a href=' ' className="uppercase text-gray-500 font-bold my-4 py-1 hover:text-indigo-950 hover:border-y hover:border-blue-600 hover:border-shadow-2xl"> Professional Site 
          </a>
          <a href=' ' className="uppercase text-gray-500 font-bold my-4 py-1 hover:text-indigo-950 hover:border-y hover:border-blue-600 hover:border-shadow-2xl">Patient Site </a>
          
        </div>

        <a href="/">
          <img src={Logo}  className="w-[200px] py-4 opacity-90"/>
        </a>

        <div className="md:flex  md:gap-10 pt-3">
          <a href=' ' className="uppercase text-gray-500 font-bold my-4 py-1 hover:text-indigo-950 hover:border-y hover:border-blue-600 hover:border-shadow-2xl">Medication </a>
          <a href=' ' className="uppercase text-gray-500 font-bold my-4 py-1 hover:text-indigo-950 hover:border-y hover:border-blue-600 hover:border-shadow-2xl">prescribing Information </a>
        </div>

      </div>   
    </nav>
  );
}

export default Navbar;
