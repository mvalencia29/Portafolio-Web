import CustomIcons from "../../assets/icons/CustomIcons";
import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...CustomIcons,
  },
};

export default customTheme;
