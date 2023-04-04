import {
    AcUnit, Balcony,
    Bathtub, DesktopMac, Elevator,
    Home,
    Kitchen, LocalLaundryService, LocalParking,
    MeetingRoom,
    PeopleAlt,
    SingleBed,
    SmokeFree,
    Tv,
    Wifi
} from "@mui/icons-material";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import React from "react";

const amenities = [
    { name: "homeType", label: "Home", icon: <Home /> },
    { name: "bedroom", label: "Bedroom", icon: <SingleBed /> },
    { name: "bathroom", label: "Bathroom", icon: <Bathtub /> },
    { name: "roommates", label: "Roommates", icon: <PeopleAlt /> },
    { name: "livingRoom", label: "Living Room", icon: <MeetingRoom /> },
    { name: "kitchen", label: "Kitchen", icon: <Kitchen /> },
    { name: "wifi", label: "Wifi", icon: <Wifi /> },
    { name: "tv", label: "TV", icon: <Tv /> },
    { name: "airConditioning", label: "Air conditioning", icon: <AcUnit /> },
    { name: "smokeFree", label: "Smoke free", icon: <SmokeFree /> },
    { name: "laundry", label: "Laundry", icon: <LocalLaundryService /> },
    { name: "elevator", label: "Elevator", icon: <Elevator /> },
    { name: "parking", label: "Parking", icon: <LocalParking /> },
    { name: "balcony", label: "Balcony", icon: <Balcony /> },
    { name: "privateBathroom", label: "Private bathroom", icon: <Bathtub />},
    { name: "privateKitchen", label: "Private kitchen", icon: <Kitchen />},
    { name: "desktop", label: "Desk", icon: <DesktopMac /> },
    { name: "closet", label: "Closet", icon: <CheckroomIcon /> }
];

export default amenities;