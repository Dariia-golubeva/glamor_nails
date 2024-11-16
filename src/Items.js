import React from 'react'
import {Box, Typography} from "@mui/material";

import AddToCartButton from "./AddToCartButton"

const styles = {
    container: {
        width: '80%',
        height: '80%',

    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px'
    },
    text: {
        color: '#372821',
        fontWeight: '200',
        fontSize: '20px',
    },
    cart: {
        marginTop: '30px'
    },
}

const Item = ({text, image, cost}) => {
    return (
        <Box sx={styles.container}>
            <Box>
                <img src={image} alt={text} style={{width: '100%', height: '100%'}}/>
            </Box>
            <Box sx={styles.textContainer}>
                <Typography sx={styles.title}>{text}</Typography>
                <Typography sx={styles.title}>{`${cost}BYN`}</Typography>
            </Box>
            <Box sx={styles.cart}>
                <AddToCartButton/>
            </Box>
        </Box>
    )
}

export default Item
