import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";

export const list = [
  {
    name: "name",
    element: <PersonIcon />,
    placeholder: "Name",
  },
  {
    name: "phone",
    element: <PhoneIcon />,
    placeholder: "Contact Number",
  },
  {
    name: "email",
    element: <EmailIcon />,
    placeholder: "Email",
  },
  {
    name: "password",
    element: <VpnKeyIcon />,
    placeholder: "Password",
  },
  {
    name: "college",
    element: <SchoolIcon />,
    placeholder: "College Name",
  },
  {
    name: "address",
    element: <LocationCityIcon />,
    placeholder: "Address",
  },
];
