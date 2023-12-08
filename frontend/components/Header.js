import Link from "next/link";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <>
      <header>Hello</header>
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link
          href="/"
          // onClick={() => setMobileMenu(false)}
          className="hidden md:block transition-transform active:scale-95"
        >
          <img
            src="/assets/bookswaplogo.svg"
            alt="main logo"
            className="w-[100px] md:w-[140px]"
          />
        </Link>
        {/* <div>
            <button
              onClick={() => {
                console.log("logout");
                signOut();
              }}
            >
              LogOut
            </button>
          </div> */}
        {/* <Search></Search> */}

        {/* <NavIcons
          authUser={authUser}
          showProfileMenu={showProfileMenu}
          setShowProfileMenu={setShowProfileMenu}
          signOut={signOut}
          setLogOut={setLogOut}
        ></NavIcons> */}
      </Wrapper>
    </>
  );
};

export default Header;
