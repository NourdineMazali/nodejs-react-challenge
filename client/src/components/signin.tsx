import React, { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";

const Login = () => {
    const navigate = useNavigate();
    const { setUserContext } = useContext(UserContext);

    const [loginCred, setLoginCred] = useState<IloginCred>({
        username: "",
        password: "",
    });

    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            let login = await axios.post(
                "http://localhost:4000/api/v1/auth/signin",
                loginCred
            );

            console.log("login successful");

            setLoginCred({
                username: "",
                password: "",
            });

            const token = login.data.token;
            const user_id = login.data.id;
            setUserContext({ id: user_id });

            document.cookie = `token=${JSON.stringify(token)}`;
            document.cookie = `user_id=${user_id}`;

            sessionStorage.setItem("token", JSON.stringify(token));
            sessionStorage.setItem("user_id", user_id);

            navigate("/");
            console.log("Login successful");
        } catch (error) {
            setStatus("Invalid credentials, please try again");
            console.log(error);
        }
    };

    useEffect(() => {
    });

    return (
        <>
            <h3>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username or Email"
                        value={loginCred.username}
                        onChange={(e) => {
                            setLoginCred({ ...loginCred, username: e.target.value });
                        }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={loginCred.password}
                        onChange={(e) => {
                            setLoginCred({ ...loginCred, password: e.target.value });
                        }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
        </Button>

                <p className="text text-danger">{status}</p>
            </Form>
        </>
    );
};

export default Login;