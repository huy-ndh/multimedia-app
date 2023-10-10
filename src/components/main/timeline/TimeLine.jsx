import * as React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LyricsIcon from '@mui/icons-material/Lyrics';
import { Grid } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { timelineItemClasses } from '@mui/lab/TimelineItem';

const timeLine = {
    0: {
        title: "Download Video",
        subtitle: "Downloading...",
        icon: <DownloadIcon />
    },
    1: {
        title: "Separate Audio",
        subtitle: "Separating...",
        icon: <AudiotrackIcon />
    },
    2: {
        title: "Separate Vocal",
        subtitle: "Separating...",
        icon: <LyricsIcon />
    },
    3: {
        title: "Generate Lyric",
        subtitle: "Generating...",
        icon: <RepeatIcon />
    },
    4: {
        title: "Creat Video",
        subtitle: "Creating...",
        icon: <RepeatIcon />
    },
    5: {
        title: "Complete",
        subtitle: "Link",
        icon: <RepeatIcon />
    },
}

export default function CustomizedTimeline(props) {
    const { logs, files } = props
    const RenderTimeline = (props) => {
        const { id } = props
        const { title, subtitle, icon } = timeLine[id]

        return (
            <TimelineItem>
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
                    <TimelineDot color={logs?.length - 1 > id ? "primary" : "grey"}>
                        {icon}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        {title}
                    </Typography>
                    <Typography>{logs?.length - 1 > id ? logs[id + 1]?.message : subtitle}</Typography>
                </TimelineContent>
            </TimelineItem>
        )
    }

    return (
        <Grid container sx={{ px: 10}}>
            <Timeline
                sx={{
                    // transform: "translateX(-150px)",
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                      },
              
                }}
            >
                <RenderTimeline id={0} />
                <RenderTimeline id={1} />
                <RenderTimeline id={2} />
                <RenderTimeline id={3} />
                <RenderTimeline id={4} />
                <RenderTimeline id={5} />
            </Timeline>
            <video width="600" height="400" controls >
                <source src={`http://localhost:8000/video/?path=${files?.karaoke_video}`} type="video/mp4" />
            </video>
        </Grid>
    );
}
