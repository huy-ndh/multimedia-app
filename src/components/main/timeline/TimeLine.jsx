import * as React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LyricsIcon from '@mui/icons-material/Lyrics';
import { Box, Grid, LinearProgress } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import ReactPlayer from "react-player";
import configs from "../../../configs"

const API_URL = configs.API_URL

const timeLine = {
    1: {
        title: "Download Video",
        subtitle: "Downloading...",
        icon: <DownloadIcon />
    },
    2: {
        title: "Separate Audio",
        subtitle: "Separating...",
        icon: <AudiotrackIcon />
    },
    3: {
        title: "Separate Vocal",
        subtitle: "Separating...",
        icon: <LyricsIcon />
    },
    4: {
        title: "Generate Lyric",
        subtitle: "Generating...",
        icon: <RepeatIcon />
    },
    5: {
        title: "Create Video",
        subtitle: "Creating...",
        icon: <OndemandVideoIcon />
    },
}

export default function CustomizedTimeline(props) {
    const { mode, link, status, logs, files } = props

    const RenderTimeline = (props) => {
        const { id } = props
        const { title, subtitle, icon } = timeLine[id]
        const pre_id = logs[logs.length - 2]?.status
        if (status === 6) {
            if (pre_id >= id -1)
                return (
                    <TimelineItem sx={{ ml: 5 }}>
                        {/* <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        {logs[id]?.timestamp}
                    </TimelineOppositeContent> */}
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color={logs?.length - 1 > id - 1 ? "primary" : "grey"}>
                                {icon}
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span">
                                {title}
                            </Typography>
                            <Typography>{logs?.length - 1 > id - 1 ? logs[id]?.message :
                                (logs?.length - 1 === id - 1 ? subtitle : "...")}</Typography>
                        </TimelineContent>
                    </TimelineItem>
                )
            else {
                return (<></>)
            }
        }
        return (
            <TimelineItem sx={{ ml: 5 }}>
                {/* <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {logs[id]?.timestamp}
                </TimelineOppositeContent> */}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color={logs?.length - 1 > id - 1 ? "primary" : "grey"}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        {title}
                    </Typography>
                    <Typography>{logs?.length - 1 > id - 1 ? logs[id]?.message :
                        (logs?.length - 1 === id - 1 ? subtitle : "...")}</Typography>
                </TimelineContent>
            </TimelineItem>
        )

    }

    return (
        <>
            <Box sx={{
                fontSize: 30,
                fontWeight: "bold",
                color: "#FFFFFF",
                background: "linear-gradient(356deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
                borderRadius: 2,
                padding: 3,
            }}>
                Production Process
                <Grid container sx={{ px: 5, mt: 1 }}>
                    <Grid item xs={6}>
                        <ReactPlayer
                            url={link}
                            playing={true}
                            // width="720px"
                            height="460px"
                        />
                    </Grid>
                    <Grid item xs={0.5} />
                    <Grid item xs={5.5}>
                        <Timeline
                            sx={{
                                // transform: "translateX(-150px)",
                                [`& .${timelineItemClasses.root}:before`]: {
                                    flex: 0,
                                    padding: 0,
                                },

                            }}
                        >
                            {status >= 0 && (
                                <RenderTimeline id={1} />
                            )}
                            {status >= 1 && (
                                <RenderTimeline id={2} />
                            )}
                            {status >= 2 && (
                                <RenderTimeline id={3} />
                            )}
                            {status >= 3 && (
                                <RenderTimeline id={4} />
                            )}
                            {status >= 4 && (
                                <RenderTimeline id={5} />
                            )}
                        </Timeline>
                    </Grid>
                </Grid>
                {status < 5 && (
                    <Box sx={{ width: '100%', mt: 2 }}>
                        <LinearProgress height={10} />
                    </Box>
                )}
            </Box>
            {status === 5 && (
                <Box sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    background: "linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)",
                    borderRadius: 2,
                    padding: 3,
                    mt: 2
                }}>
                    Result
                    <Grid container sx={{ mt: 1 }}>
                        {status === 5 && (mode === 0 || mode === 1) && (
                            <Grid item xs={mode === 1 ? 12 : 6}>
                                <iframe
                                    title="Embedded Web Page"
                                    src={`${API_URL}/video/?path=${files.lyrics_video}`}
                                    width="100%"
                                    height="400"
                                ></iframe>
                            </Grid>
                        )}
                        {status === 5 && (mode === 0 || mode === 2) && (
                            <Grid item xs={mode === 2 ? 12 : 6}>
                                <iframe
                                    title="Embedded Web Page"
                                    src={`${API_URL}/video/?path=${files.karaoke_video}`}
                                    width="100%"
                                    height="400"
                                ></iframe>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            )}
        </>
    );
}
