import { Box, Button, TextField } from "@mui/material";
import React from "react";

function isUrlValid(userInput) {
    // eslint-disable-next-line
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}

export default function Input(props) {
    //   const {  } = props
    const [link, setLink] = React.useState('')
    const [openLyric, setOpenLyric] = React.useState(false)

    return (
        <Box
            sx={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#FFFFFF',
                background: 'linear-gradient(356deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                borderRadius: 2,
                padding: 3,
                // height: 500,
            }}
        >
            <Box>Link Music Video</Box>
            <TextField
                fullWidth
                hiddenLabel
                id="filled-hidden-label-small"
                value={link}
                onChange={(e)=>{
                    setLink(e.target.value)
                }}
                sx={{
                    width: 500,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2,
                    px: 2,
                    mx: 2
                }}
                variant="standard"
                InputProps={{
                    disableUnderline: true,
                }}
            />
            {openLyric && (
            <TextField
                fullWidth
                hiddenLabel
                placeholder="Lyrics Music"
                multiline
                maxRows={5}
                // value={link}
                // onChange={(e)=>{
                //     setLink(e.target.value)
                // }}
                sx={{
                    width: 500,
                    height: 120,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2,
                    px: 2,
                    my: 0,
                    mx: 2
                }}
                variant="standard"
                InputProps={{
                    disableUnderline: true,
                }}
            />
            )}
            {isUrlValid(link) ? (
            <Box>
                <Button
                    onClick={()=>{
                        setOpenLyric(!openLyric)
                    }}
                    sx={{
                        backgroundColor: '#FFFFFF',
                        minWidth: 200,
                        mr: 3,
                        '&:hover': {
                            backgroundColor: '#FFFFFF',
                        }
                    }}
                >
                    {openLyric ? "Remove lyrics" : "Add lyrics"}
                </Button>
                <Button
                    sx={{
                        backgroundColor: '#F04874',
                        color: '#FFFFFF',
                        minWidth: 200,
                        '&:hover': {
                            backgroundColor: '#F04874',
                        }
                    }}
                >
                    Submit
                </Button>
            </Box>
            ) : (
                link.length ? (
                    <Box sx={{
                        fontSize: 18,
                        fontWeight: 0,
                    }}>Link not found</Box>
                ):(<></>)
            )}
        </Box>
    );
}
