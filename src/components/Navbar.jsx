
function Navbar() {


  return (
    <nav>
      <div className="container  flex  justify-evenly bg-[#f78da7] bg-opacity-10  mx-auto ">
        <div className="flex  gap-10">
          <a href=' ' className="uppercase text-gray-500 font-bold py-5 hover:text-indigo-950"> Professional Site </a>
          <a href=' ' className="uppercase text-gray-500 font-bold py-5 hover:text-indigo-950">Patient Site </a>
          
        </div>

        <div>
          <img src='src\assets\logo.svg' className="w-[120px] py-5 opacity-90"/>
        </div>

        <div className="flex  gap-10">
          <a href=' ' className="uppercase text-gray-500 font-bold py-5 hover:text-indigo-950">Medication </a>
          <a href=' ' className="uppercase text-gray-500 font-bold py-5 hover:text-indigo-950">prescribing Information </a>
        </div>

      </div>   
    </nav>
  );
}

export default Navbar;
