import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Logout = () => {
    //promises
    const history = useHistory();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"    //cookie backend me send krny k lye
        }).then((res) => {
            history.push('/login', { replace: true });  //mean compulsory to move login page
           console.log('logout sucessfully');
            if (res.status != 200) {
                const error = new Error(res.error);
                throw error;
            }
       
        }).catch((err) => {
            console.log(err);
        })
    });

    return (
        <>
            <h1>page of logout</h1>
        </>
    );
}

export default Logout;