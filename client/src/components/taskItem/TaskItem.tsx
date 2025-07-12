import {Box, Chip, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent, Typography} from "@mui/material";
import type {TaskItemProps} from "./taskItemProps.ts";
import {useCallRecords} from "../../contexts/callRecordsContext.tsx";
import type {TaskStatus} from "../../models/task.ts";

export default function TaskItem({task}: TaskItemProps) {
    const {updateCallTask} = useCallRecords();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Open':
                return 'error';
            case 'In Progress':
                return 'warning';
            case 'Completed':
                return 'success';
            default:
                return 'default';
        }
    };


    const handleStatusChange = (event: SelectChangeEvent<TaskStatus>): void => {
        const newStatus: TaskStatus = event.target.value;
        updateCallTask({
            ...task,
            status: newStatus,
            updatedAt: new Date().toISOString()
        });
    }

    return (
        <Box display={'flex'} flexDirection={'row'} key={task.id} p={2} bgcolor={'background.default'} borderRadius={2}
             justifyContent={'space-between'} alignItems={'center'} gap={2}
             boxShadow={1}>
            <Box>
                <Typography variant={'h6'} component={'div'} display={'flex'} alignItems={'center'} gap={1}>
                    {task.name}
                    <Chip variant={'outlined'} size={'small'} color={getStatusColor(task.status)}
                          label={task.status}></Chip>
                </Typography>

                <Typography variant={'body2'}>
                    Created At: {new Date(task.createdAt).toLocaleString()}
                </Typography>
                <Typography variant={'body2'}>
                    Updated At: {new Date(task.updatedAt).toLocaleString()}
                </Typography>
            </Box>
            <FormControl>
                <InputLabel id="task-status-select">Status</InputLabel>
                <Select
                    labelId={"task-status-select"}
                    value={task.status}
                    label={"Status"}
                    onChange={handleStatusChange}
                >
                    <MenuItem value={'Open'}>Open</MenuItem>
                    <MenuItem value={'In Progress'}>In Progress</MenuItem>
                    <MenuItem value={'Completed'}>Completed</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}