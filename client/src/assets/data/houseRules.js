import NoSmokingIcon from "@material-ui/icons/SmokeFree";
import PetsIcon from "@material-ui/icons/Pets";
import ChildFriendlyIcon from "@material-ui/icons/ChildCare";
import SmokingRoomsIcon from "@material-ui/icons/SmokingRooms";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import NoDrinksIcon from "@material-ui/icons/LocalDrink";


const houseRules = [
    { name: "noSmoking", label: "No smoking", icon: <NoSmokingIcon /> },
    { name: "pets", label: "Pets allowed", icon: <PetsIcon /> },
    { name: "children", label: "Children allowed", icon: <ChildFriendlyIcon /> },
    { name: "smoking", label: "Smoking allowed", icon: <SmokingRoomsIcon /> },
    { name: "events", label: "Events allowed", icon: <EventAvailableIcon /> },
    { name: "noDrinking", label: "No drinking", icon: <NoDrinksIcon /> },
];

export default houseRules;