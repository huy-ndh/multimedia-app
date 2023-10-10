import { Box, Grid } from "@mui/material";
import React from "react";
import OpenSource from "./openSource/OpenSource";
import Input from "./input/Input";
import CustomizedTimeline from "./timeline/TimeLine";

const SEVER_URL = "http://localhost:8000"

const Main = (props) => {
  const [dataForm, setDataForm] = React.useState(
    {
      "name": "string",
      "link": "",
      "lyrics": "",
      "status": 0,
      "task_id": "",
      "logs": [],
      "files": {
        "karaoke_video": "",
        "lyrics_video": ""
      }
    }
  )
  const [taskId, setTaskId] = React.useState(null)
  const [logs, setLogs] = React.useState([])
  const [files, setFiles] = React.useState([])

  const handleSubmit = async (data_form) => {
    await fetch(`${SEVER_URL}/tasks/`, {
      method: 'POST',
      body: JSON.stringify(data_form),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTaskId(data?.task_id)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  const getStatus = async (id) => {
    await fetch(`${SEVER_URL}/tasks/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setLogs(transform(data?.item?.logs))
        setFiles(data?.item?.files)
        if(data?.item?.status === 5) {
          setTaskId(null)
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  const transform = (logs) => {
    let array = []
    for(let i = 0; i< logs.length; i++) {
      let data = logs[i].split("\t")
      const log = {
        "timestamp": data[0],
        "status": data[1].replace("Status: ", ""),
        "message": data[2]
      }
      array.push(log)
    }

    return array
  }

  React.useEffect(() => {
    if(taskId) {
      const intervalCall = setInterval(() => {
        getStatus(taskId)
      }, 3000);
      return () => {
        clearInterval(intervalCall);
      }
    }
  }, [taskId])

  return (
    <Box
      sx={{
        position: "absolute",
        top: 50,
        width: "100%",
        // height: "90%",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Box
        sx={{
          padding: 2,
          px: 20,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: 2,
          }}
        >
          <Grid container sx={{ height: "100%", padding: 2 }}>
            <Grid item xs={12} sx={{ marginBottom: 2 }}>
              <Input handleSubmit={handleSubmit} dataForm={dataForm} setDataForm={setDataForm} />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 2 }}>
              <CustomizedTimeline logs={logs} files={files}/>
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: 2 }}>
              <OpenSource></OpenSource>
            </Grid>
            <Grid item xs={12} sx={{ border: "2px solid #ECECEC" }}>
              About Us
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
