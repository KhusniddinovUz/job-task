import * as React from 'react';
import axios from "axios";
import UserCard from "./UserCard";
import Grid from '@mui/material/Grid';

type userType = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string;
}[]

const Home: React.FC = () => {
    const [users, setUsers] = React.useState<userType>([])
    React.useEffect(() => {
        (async function loadUsers() {
            const response1 = await axios.get<any>('https://reqres.in/api/users?page=1')
            const response2 = await axios.get<any>('https://reqres.in/api/users?page=2')
            const response = response1.data.data.concat(response2.data.data)
            setUsers(response)
        })()
    }, [])
    return (
        <div>
            <Grid container justifyContent='center' alignItems='center' spacing={5}>
                {users && users.map(user => {
                    return (<Grid justifyContent='center' alignItems='center' item xs='auto'>
                        <UserCard email={user.email} name={user.first_name + user.last_name}
                                  avatar={user.avatar} id={user.id}/>
                    </Grid>)
                })}
            </Grid>
        </div>)
};

export default Home;