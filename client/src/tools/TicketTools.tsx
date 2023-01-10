import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Monki from '../assets/gorilla.jfif';
import CardMedia from '@mui/material/CardMedia';

export function getUserTickets(token: string/* jwt token */) {
    var tickets = [];

    // check if user is allowed to see tickets
    //

    //do get request for all users tickets
    //

    // check if they have any tickets
    //

    //convert them into card
    for (let index = 0; index < 2; index++) {
        tickets.push(generateTickets("JAN 08 2023", "zo - 19:30", "Monki in paris", "013 - Tilburg", Monki))
    }

    // return the tickets
    return tickets;
}

export function getTicketsByDate(/*date: Date */) {
    var tickets = [];

    //do get request for tickets with this date
    //

    // check if there are any tickets with the date
    //

    //convert them into card
    for (let index = 0; index < 2; index++) {
        tickets.push(generateTickets("JAN 08 2023", "zo - 19:30", "Monki in paris", "013 - Tilburg", Monki))
    }

    return tickets;
}

export function generateTickets(date: string, time: string, name: string, location: string, image: string) {
    return (<Card sx={{
            width: 600,
            height: 130,
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 30000,
            backdropFilter: 'blur(5px)', /* this doesnt work for some reason */
            display: 'flex',
            marginBottom: 2,
        }}>

        <CardMedia
            component="img"
            sx={{ 
                width: 170,
                p: 1.2,
                marginRight: 1,
                borderRadius: 5,
            }}
            image= { image }
            alt= { name }
        />
        
        <Box sx={{
            display: 'flex', 
            alignItems: 'center',
            width:60,
            height: 130,
            textAlign: 'center',
            }}>
                <Typography variant="h5">
                    { date }
                </Typography>
        </Box>
        <Box sx={{
            height: 130,
            alignItems: 'center',
            marginTop: 3.5,
            marginLeft: 2
            }}>
            <Typography variant="body2">
                { time }
            </Typography>
            <Typography variant="h6">
                { name }
            </Typography>
            <Typography variant="body2">
                { location }
            </Typography>
            
            
        </Box>
    </Card>);
}
