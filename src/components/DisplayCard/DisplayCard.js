import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const DisplayCard = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            {props.data.map(i => {
                return (
                    <Card sx={{ minWidth: 275 }} key={i.email}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {i.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Date of Birth: {i.dob} <br />
                                Email: {i.email} <br />
                                Contact: {i.contact}
                            </Typography>
                            <Typography variant="body2">
                                {i.about}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

export default DisplayCard