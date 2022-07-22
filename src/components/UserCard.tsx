import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

interface PropsType {
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

const UserCard = (props: PropsType) => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.avatar}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.first_name}{props.last_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default UserCard;