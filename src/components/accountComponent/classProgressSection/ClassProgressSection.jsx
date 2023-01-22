import ClassProgress from "./classProgress/ClassProgress";

const ClassProgressSection = () => {

    return (
        <div>
             <ClassProgress percent = "18%" topicName="Html" color="red"/>
             <ClassProgress percent = "20%" topicName="css" color="blue"/>
             <ClassProgress percent = "15%" topicName="javascript" color="red"/>
             <ClassProgress percent = "30%" topicName="React" color="blue"/> 
        </div>
    )
}

export default ClassProgressSection;