import { Button, Navbar } from "flowbite-react";

// I should make it here so that there Should be an icon next to the Name and when the screen is smaller
// the title should collapse and only the image should be visible, since there is not enough space in the Navbar
// Also the DropDown menu should be made mobile responsive.
// The Get Started button should go to the main component

const NavbarComponent: React.FC = () => {
  return (
    <Navbar fluid rounded className="bg-white shadow-md">
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
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
