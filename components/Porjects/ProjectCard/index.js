import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '50px',
    },
    projectImage: {
        height: '526px',
        width: '496px',
        borderTopRightRadius: "30px",
        borderBottomRightRadius: "30px",

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function ProjectCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Project 1
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
                    </Typography>
                </CardContent>

            </div>
            <img className={classes.projectImage} src="/projectCard.png" />
            <CardMedia
                className={classes.cover}

                title="Live from space album cover"
            />
        </Card>
    );
}
