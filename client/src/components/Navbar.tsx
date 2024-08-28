import { Button, Navbar } from "flowbite-react";



const NavbarComponent: React.FC = () => {
  return (
    <Navbar fluid rounded className="bg-white w-full shadow-md">
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900 hover:text-sky-800">
          StocksMadeEasy
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-700">
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Game</Navbar.Link>
        <Navbar.Link href="#">Profile</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
