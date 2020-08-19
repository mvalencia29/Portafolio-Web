import styled from "styled-components";
import { Icon as ChakraIcon } from "@chakra-ui/core";

export const ContainerAccount = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Icon = styled(ChakraIcon)`
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #0000007a;
  }
`;
