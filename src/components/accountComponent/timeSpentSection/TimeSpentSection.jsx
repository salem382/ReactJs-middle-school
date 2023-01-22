import Progress from "../Progress";

const TimeSpentSection = () => {

    return (
        <div className="d-flex justify-content-between pt-4"
        style={{height:'95px'}}
        >
            <Progress rotate="true" percent="17%" color="red" />
            <Progress rotate="true" percent="20%" color="blue" />
            <Progress rotate="true" percent="30%" color="red" />
            <Progress rotate="true" percent="35%" color="blue" />
            <Progress rotate="true" percent="40%" color="red" />
            <Progress rotate="true" percent="50%" color="blue" />
            <Progress rotate="true" percent="55%" color="red" />
        </div>
    )
}

export default TimeSpentSection;

// <Progress rotate="true" percent="17%" color="red" />