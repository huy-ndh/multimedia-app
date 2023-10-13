import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const CardTool = (props) => {
    const { info } = props;
    return (
        <Grid item xs={4} sx={{ padding: 1 }}>
            <Box
                sx={{
                    borderRadius: 2,
                    background:
                        "linear-gradient(356deg, rgba(238,174,202,1) 0%, rgba(220,233,148,0.7482590448288691) 100%)",
                    //   height: 350,
                }}
            >
                <CardMedia
                    component="img"
                    height={220}
                    image={info.image}
                    sx={{
                        cursor: "pointer",
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5,
                    }}
                    onClick={() => {
                        window.open(info.link);
                    }}
                />
                <Box
                    sx={{
                        padding: 1,
                        height: 180,
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div">
                        {info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {info.description}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default function OpenSource(props) {
    const toolInformation = [
        {
            name: "youtube-dl",
            link: "http://ytdl-org.github.io/youtube-dl/",
            image:
                "https://repository-images.githubusercontent.com/307260205/b6a8d716-9c7b-40ec-bc44-6422d8b741a0",
            description:
                "youtube-dl is a free and open source download manager for video and audio from YouTube and over 1,000 other video hosting websites. It is released under the Unlicense software license.",
        },
        {
            name: "Spleeter",
            link: "https://research.deezer.com/projects/spleeter.html",
            image:
                "https://media.licdn.com/dms/image/C5612AQEp8VqAV2vXbw/article-cover_image-shrink_720_1280/0/1573462659132?e=2147483647&v=beta&t=27Q1moay7Uj4zWL2bzntcKIbOEHeUm3mIo3Ehvq_eOc",
            description:
                "Spleeter writes in Python and using Tensorflow, makes it easy to train music source separation models, and provides already trained state of the art models for performing various flavours of separation",
        },
        {
            name: "Whisper",
            link: "https://github.com/openai/whisper",
            image:
                "data:image/jpeg;base64,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",
            description:
                "Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multitasking model that can perform multilingual speech recognition, speech translation, and language identification.",
        },
        {
            name: "FFmpeg",
            link: "https://ffmpeg.org/",
            image:
                "https://pbs.twimg.com/profile_images/961052733510893568/wbWiekmv_400x400.jpg",
            description:
                "FFmpeg is a free and open-source software project consisting of a suite of libraries and programs for handling video, audio, and other multimedia files and streams.",
        },
    ];

    return (
        <Box
            sx={{
                background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                borderRadius: 2,
                padding: 1,
            }}
        >
            <Typography
                style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                }}
            >
                Open Source
            </Typography>
            <Box sx={{ display: "flex", textAlign: "justify" }}>
                {toolInformation.map((value, idx) => (
                    <CardTool info={value} key={idx} />
                ))}
            </Box>
        </Box>
    );
}
