import { Box, Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

function isLyrics(lyrics) {
    // eslint-disable-next-line
    const regex = /\r|\n/
    if (lyrics.trim() === "") 
        return false
    
        var res = lyrics.match(regex)
    if (res == null) 
        return false
    
    return true
}

export default function Input(props) {
    const { handleSubmit, dataForm, setDataForm } = props
    const [link, setLink] = React.useState("");
    const [lyrics, setLyrics] = React.useState("");
    const [mode, setMode] = React.useState(0);

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
                        setDataForm({
                            ...dataForm,
                            link: e.target.value})
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
            {!ReactPlayer.canPlay(link) && link.length > 0 && (
                <Box sx={{ fontSize: 12 }}>
                    Link not found Video
                </Box>
            )}
            <Box>
            {ReactPlayer.canPlay(link) && (
                <TextField
                    fullWidth
                    hiddenLabel
                    placeholder="Lyrics Music"
                    multiline
                    maxRows={5}
                    onChange={(e) => {
                        setLyrics(e.target.value);
                        setDataForm({
                            ...dataForm,
                            lyrics: e.target.value})
                    }}
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
            {/* {ReactPlayer.canPlay(link) && (
                <Box>
                    <ReactPlayer url={link} width="480px" height="240px"/>
                </Box>
            )} */}
            </Box>
            {ReactPlayer.canPlay(link) && (
                <Box>
                    <Box>
                        <ToggleButtonGroup
                            size="small"
                            color="primary"
                            value={mode}
                            exclusive
                            onChange={(e, value) => {
                                setMode(value)
                                setDataForm({
                                    ...dataForm,
                                    mode: value
                                })
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
                        onClick={()=>{
                            handleSubmit(dataForm)
                        }}
                        disabled={!isLyrics(lyrics)}
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
            )}
        </Box>
    );
}
