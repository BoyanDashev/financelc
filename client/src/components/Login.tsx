import { Button, Label, TextInput } from "flowbite-react";

const LoginComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ml-2 mr-2">
      <form className="flex max-w-md w-full items-center justify-center flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@example.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
        </div>
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default LoginComponent;
