import React, { useEffect, useState } from 'react';
import axios from "axios";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';

// Styled expand button
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: 'auto',
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Cards = () => {
    const [data, setData] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then((response) => {
                setData(response.data.recipes);
                console.log("FETCHED DATA IS :- ", response)
            });
    }, []);

    const handleExpandClick = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Grid container spacing={4} padding={6}>
            {data.map((recipe) => (
                <Grid item xs={12} sm={6} md={3} key={recipe.id}>
                    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {recipe.name.charAt(0)}
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={recipe.name}
                            subheader={`Prep time: ${recipe.prepTimeMinutes} min`}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={recipe.image}
                            alt={recipe.name}
                        />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {recipe.cuisine} | {recipe.difficulty}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <ExpandMore
                                expand={expandedId === recipe.id}
                                onClick={() => handleExpandClick(recipe.id)}
                                aria-expanded={expandedId === recipe.id}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expandedId === recipe.id} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography sx={{ marginBottom: 2, fontFamily: 'Times', fontWeight: 'Bolder' }}>
                                    Ingredients:
                                </Typography>
                                <ul>
                                    {recipe.ingredients.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <Typography sx={{ marginTop: 2, fontFamily: 'Times', fontWeight: 'Bolder' }}>
                                    Instructions:
                                </Typography>
                                <Typography>{recipe.instructions}</Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Cards;
