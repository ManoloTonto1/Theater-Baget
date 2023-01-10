import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { getTicketsByDate } from '../../tools/TicketTools';


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
                    marginRight: 4,
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
                    overflowY: 'scroll',
				}}>
                {getTicketsByDate()}
            </Card>
        </Container>
    );
}

export default ProgrammaOverzicht;