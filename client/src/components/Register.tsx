import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const RegisterComponent: React.FC = () => {
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const [matchPwd, setMatchPwd] = useState<string>(""); // State for matching password
  const [pwd, setPwd] = useState<string>(""); // State for password
  const [email, setEmail] = useState<string>(""); // State for email
  const [validMatch, setValidMatch] = useState<boolean>(false); // State for matching password validation
  const [validPwd, setValidPwd] = useState<boolean>(false); // State for password validation
  const [agree, setAgree] = useState<boolean>(false); // State for agreement checkbox
  const [errMsg, setErrMsg] = useState<string>(""); // State for error message
  const navigate = useNavigate();

  useEffect(() => {
    setValidPwd(passwordRegex.test(pwd)); // Validate password against regex
    setValidMatch(pwd === matchPwd); // Validate if passwords match
  }, [pwd, matchPwd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validPwd || !validMatch || !agree) {
      setErrMsg("Please ensure all fields are correct.");
      return;
    }

    try {
      const response = await fetch("http://your-backend-api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pwd }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        const result = await response.json();
        setErrMsg(result.message || "Registration failed.");
      }
    } catch (err: any) {
      // 'any' type used for error handling
      setErrMsg(`Registration failed due to a network error: ${err.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ml-2 mr-2">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md w-full items-center justify-center flex-col gap-4 bg-white p-6 rounded-lg shadow-md"
      >
        {errMsg && <p className="text-red-500 mb-4">{errMsg}</p>}
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            required
            shadow
          />
          {!validPwd && pwd && (
            <p className="text-red-500 text-sm mt-1">
              Password must be 8-24 characters long and include at least one
              uppercase letter, one number, and one special character.
            </p>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput
            id="repeat-password"
            type="password"
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            shadow
          />
          {!validMatch && matchPwd && pwd && (
            <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="agree"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              to="/home"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit" disabled={!validPwd || !validMatch || !agree}>
          Register new account
        </Button>
        <p className="mt-4 text-center">
          Already registered?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterComponent;
