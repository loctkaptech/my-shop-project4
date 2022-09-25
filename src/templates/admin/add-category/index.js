import React from "react";
import { Box, Typography, TextField, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { light } from "@mui/material/styles/createPalette";


const AddCategoryTemplate = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={700}
            height={80}
            marginBottom="200px"
        >
            <Box m="auto" width={400}>
                <Typography variant="h4" align="center">
                    Add Category
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }} >
                    <TextField
                        fullWidth
                        label='Add Category'
                        margin='normal'
                    />
                </Stack>
            </Box>
        </Box>


    );
};
export default AddCategoryTemplate;