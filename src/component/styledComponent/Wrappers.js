import styled from "styled-components";

export const FlexContainerCentred = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexContainerCentredEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const CentralContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
`;

export const GoodsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;

  @media (max-width: 767px) {
     grid-template-columns: 1fr;
  }
`;