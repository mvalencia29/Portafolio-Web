import React from "react";
import IconButton from "../IconButton";
import { Icon, ContainerAccount } from "./Style";

const Accounts = () => {
  return (
    <ContainerAccount>
      <IconButton>
        <Icon name="outlookIcon" color="#5f616d" size="24px" url={} />
      </IconButton>
      <IconButton>
        <Icon name="outlookIcon" color="#5f616d" size="24px" />
      </IconButton>
      <IconButton>
        <Icon name="outlookIcon" color="#5f616d" size="24px" />
      </IconButton>
      <IconButton>
        <Icon name="outlookIcon" color="#5f616d" size="24px" />
      </IconButton>
      <IconButton>
        <Icon name="outlookIcon" color="#5f616d" size="24px" />
      </IconButton>
    </ContainerAccount>
  );
};

export default Accounts;
