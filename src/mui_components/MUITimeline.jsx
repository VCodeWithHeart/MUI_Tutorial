import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";

const MUITimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          12:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          3:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MUITimeline;
