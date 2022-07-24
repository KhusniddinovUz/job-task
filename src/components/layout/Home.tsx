import * as React from 'react';
import axios from "axios";
import UserCard from "./UserCard";
import Grid from '@mui/material/Grid';
import {useAppDispatch} from "../../redux/hooks";
import {startLoading, endLoading} from "../../redux/action-creaters/loading";
import {bindActionCreators} from "redux";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import loader from '../HomeLoader.svg';

type userType = {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string;
}[];

const Home: React.FC = () => {
    const loading = useSelector<RootState, boolean>(state => state.loading);
    const dispatch = useAppDispatch();
    const startLoad = bindActionCreators(startLoading, dispatch);
    const endLoad = bindActionCreators(endLoading, dispatch);
    const [users, setUsers] = React.useState<userType>([])
    React.useEffect(() => {
        (async function loadUsers() {
            startLoad();
            const response1 = await axios.get<any>('https://reqres.in/api/users?page=1')
            const response2 = await axios.get<any>('https://reqres.in/api/users?page=2')
            const response = response1.data.data.concat(response2.data.data)
            setUsers(response)
            endLoad();
        })()
    }, []);

    const content = (
        <Grid container justifyContent='center' alignItems='center' spacing={5}>
            {users && users.map(user => {
                return (<Grid key={user.id} justifyContent='center' alignItems='center' item xs='auto'>
                    <UserCard email={user.email} name={`${user.first_name}${user.last_name}`}
                              avatar={user.avatar} id={user.id}/>
                </Grid>)
            })}
        </Grid>
    );

    const loaderContent = (
        <div style={{width: "100wv", height: "100hv", display: "flex", justifyContent: "center"}}>
            <img src={loader}/>
        </div>
    )
    return (
        <div>
            {loading ? loaderContent : content}
        </div>)
};

export default Home;