import { Box, Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

function isUrlValid(userInput) {
    const regex =
        // eslint-disable-next-line
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    var res = userInput.match(regex);
    if (res == null) return false;
    else return true;
}

export default function Input(props) {
    const { handleSubmit, dataForm } = props
    const [link, setLink] = React.useState("");
    const [openLyric, setOpenLyric] = React.useState(false);
    const [mode, setMode] = React.useState(1);

    return (
        <Box
            sx={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#FFFFFF",
                background:
                    "linear-gradient(356deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                borderRadius: 2,
                padding: 3,
            }}
        >
            <Box>Link Music Video</Box>
            <Box >
                <TextField
                    fullWidth
                    hiddenLabel
                    id="filled-hidden-label-small"
                    value={link}
                    onChange={(e) => {
                        setLink(e.target.value);
                    }}
                    sx={{
                        width: 500,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 2,
                        px: 2,
                        mx: 2,
                    }}
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                    }}

                />
            </Box>
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
                        backgroundColor: "#FFFFFF",
                        borderRadius: 2,
                        px: 2,
                        my: 1,
                        mx: 2,
                    }}
                    variant="standard"
                    InputProps={{
                        disableUnderline: true,
                    }}
                />
            )}
            {isUrlValid(link) ? (
                <Box>
                    <Box>
                        <ToggleButtonGroup
                            size="small"
                            color="primary"
                            value={mode}
                            exclusive
                            onChange={(e, value) => {
                                setMode(value)
                            }}
                            sx={{
                                background: "#FFFFFF"
                            }}
                        >
                            <ToggleButton value={1}>Lyrics Video</ToggleButton>
                            <ToggleButton value={0}>Lyrics & Karaoke Video</ToggleButton>
                            <ToggleButton value={2}>Karaoke Video</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Button
                        onClick={() => {
                            setOpenLyric(!openLyric);
                        }}
                        sx={{
                            backgroundColor: "#FFFFFF",
                            minWidth: 187,
                            mr: 3,
                            "&:hover": {
                                backgroundColor: "#FFFFFF",
                            },
                        }}
                    >
                        {openLyric ? "Remove lyrics" : "Add lyrics"}
                    </Button>
                    <Button
                        onClick={()=>{
                            handleSubmit(dataForm)
                        }}
                        sx={{
                            backgroundColor: "#F04874",
                            color: "#FFFFFF",
                            minWidth: 187,
                            "&:hover": {
                                backgroundColor: "#F04874",
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            ) : link.length ? (
                <Box
                    sx={{
                        fontSize: 18,
                        fontWeight: 0,
                    }}
                >
                    Link not found
                </Box>
            ) : (
                <></>
            )}
        </Box>
    );
}
