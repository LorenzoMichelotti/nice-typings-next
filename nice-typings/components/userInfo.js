import router from "next/router";
import { useEffect, useState } from "react";
import UserModel from "../models/userModel";
import TypingField from "./lolo-ui/typings/typing-test";
import UserCard from "./lolo-ui/user-card";

export default function UserInfo({setLoggedIn}){
    const [user, setUser] = useState(new UserModel())
    useEffect(() => {
        const newUser = JSON.parse(window.localStorage.getItem('user'));
        if (newUser !== null){
            setUser(newUser);
        } else {
            logOut();
        }
    }, [])

    function logOut(){
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        router.push('/')
    }
    return (
    <div className='flex w-full'>
        <div className='mx-auto'>
            <UserCard user={user}></UserCard>
        </div>
    </div>
    )
}