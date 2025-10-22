import Profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="w-11/12 md:w-4/5 mx-auto mt-12 mb-8 pb-8 border-b border-[#11111126]">
      <div className="flex justify-between items-center">
        {/* header title  */}
        <h1 className="text-4xl text-[#111111] font-bold">Scribbles Cafe</h1>

        {/* profile picture  */}
        <figure className="w-16 h-16  flex justify-center items-center">
          <img
            src={Profile}
            alt="profile picture"
            className="w-full object-scale-down"
          />
        </figure>
      </div>
    </header>
  );
};

export default Header;
