import {styled} from "styled-components";

export const SectionTitle = styled.h2`
  font-family: NespressoLucasBold;
  text-transform: uppercase;
  font-size: 40px;
  color: #17171a;
  letter-spacing: 1.8px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const SectionDescription = styled.p`
  font-family: NespressoLucasRegular;
  font-size: 20px;
  color: #17171a;
  letter-spacing: 1.2px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TitleL = styled.p`
  font-family: NespressoLucasBold;
  text-transform: uppercase;
  font-size: 14px;
  color: ${(props) => props?.color || "#171A20"};
  letter-spacing: 1.5px;
  margin: 0;
`;

export const TitleM = styled(TitleL)`
  font-size: 12px;
  letter-spacing: 1px;
`;

export const TitleS = styled(TitleL)`
  font-size: 10px;
  letter-spacing: 0.8px;
`;

export const TitleXS = styled(TitleL)`
  font-size: 8px;
  letter-spacing: 0.4px;
`;

export const Description = styled.p`
  font-family: NespressoLucasMed;
  font-size: 14px;
  color: #6f6f70;
  letter-spacing: 0.3px;
  margin: 0;
`;


