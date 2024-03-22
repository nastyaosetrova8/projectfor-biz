import styled from "styled-components";
import { Box } from "@mui/material";

export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  /* align-items: ;
  gap: 8px; */
  max-width: 240px;
  width: 100%;
  /* height: 108px; */
  padding: 14px 18px 16px;
  border: 1px solid #23fcee;
  border-radius: 8px;
  background-color: #41ddd3;
  color: #797a7a;
`;

export const CardTitleStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 34px;
`;
