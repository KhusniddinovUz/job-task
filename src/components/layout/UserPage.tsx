import * as React from 'react';
import Container from '@mui/material/Container';
import {useParams} from 'react-router-dom';
import axios from "axios";
import UserCard from "./UserCard";

type dataType = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string;
};

const UserPage: React.FC<any> = () => {
    const [data, setData] = React.useState<dataType>({avatar: "", email: "", first_name: "", id: "", last_name: ""});
    const id = useParams().id;
    React.useEffect(() => {
        (async function loadUserData() {
            const response = await axios.get(`https://reqres.in/api/users/${id}`);
            setData(response.data.data)
        })();
    }, [id])
    return (
        <Container style={{display: "flex", justifyContent: "center"}}>
            <UserCard id={data.id} email={data.email} name={`${data.first_name}${data.last_name}`}
                      avatar={data.avatar}/>
        </Container>
    )
};

export default UserPage;