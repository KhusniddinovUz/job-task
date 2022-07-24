import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {Link} from 'react-router-dom';

interface PropsType {
    id: string,
    email: string,
    name: string,
    avatar: string;
}

const UserCard = (props: PropsType) => {
    return (
        <Link to={`/user/${props.id}`}>
            <Card sx={{width: 250}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.avatar}
                        alt="user profile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default UserCard;