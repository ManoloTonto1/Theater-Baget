import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { red } from '@mui/material/colors';

/* source date picker: https://mui.com/x/react-date-pickers/custom-components/ */
function ProgrammaOverzicht() {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(''));

    return (
        <Container style={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Card elevation={4} sx={{ 
                    height: 485,
					p: 1,
				}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        onChange={(newValue) => setValue(newValue)}
                        value={value}
                        renderInput={(params) => <TextField {...params} />}
                        componentsProps={{
                        actionBar: {
                            actions: ['today'],
                        },
                        }}
                    />
                    </LocalizationProvider>
            </Card>
            <Card elevation={4} sx={{ 
                    height: 485,
					p: 1,
				}}>
                <Card
                    sx={{
                        width: 600,
                        height: 160,
                        backgroundColor: '#003304',
                        display: 'flex',
                    }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Mac Miller
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Card>
        </Container>
    );
}

export default ProgrammaOverzicht;