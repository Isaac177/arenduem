import RoomIcon from "@mui/icons-material/Room";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HouseIcon from "@mui/icons-material/House";

const propertyTypes = [
    {
        value: 'room in a shared apartment', label: 'Room in a shared apartment',
        IconComponent: RoomIcon,
    },
    {
        value: 'private apartment', label: 'Private apartment',
        IconComponent: ApartmentIcon,
    },
    {
        value: 'house', label: 'House',
        IconComponent: HouseIcon,
    }
    ];

export default propertyTypes;