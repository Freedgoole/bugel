import {memo} from "react";
import styled from "styled-components";
import {Label} from "../Label";
import notes from "../../catalog/notes";
import {Img} from "../CardImg";
import {CapsulePreview} from "../../images";
import {Description, TitleL, TitleM, TitleS, TitleXS} from "../styledComponent/Typography";
import {nameOrigin, nameUkraine} from "../../catalog/name";
import {shortDescription} from "../../catalog/shortDescription";
import {FlexContainerCentred} from "../styledComponent/Wrappers";
import {intensity, translate} from "../../catalog/intensity";
import {Rating} from "../Rating";
import {Price} from "../Price";
import {Button} from "../styledComponent/Button";

const CardContainer = styled.div`
    position: relative;
    width: 265px;
    padding: 8px 16px 24px;
    box-sizing: border-box;
    box-shadow: 0 0 8px #17171a0d, 0 2px 8px #17171a14;
    display: grid;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
  //grid-template-areas: 
  //      "img"
  //      "title"
  //      "border"
  //      "subTitle"
  //      "description"
  //      "params"
  //      "price"
  //      "exstra"
  //      "button";
  
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }

    @media (max-width: 450px) {
      width: 90%;
   }
`

const ExstraInformation = styled(TitleXS)`
  font-family: NespressoLucasRegular;
  margin-bottom: 16px;
  text-transform: lowercase;
  font-size: 10px;
`
const BorderBlock = styled.span`
  border-top: 1px solid black;
  width: 40%;
  margin: 6px 0;
`

const CardDescription = styled(Description)`
  margin: 12px 0;
  flex: 1;
  width: 90%;
`

const CoffeParamsContainer = styled(FlexContainerCentred)`
  width: 100%;
  gap: 8px;
  margin-bottom: 4px;
`

const NotesContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

// const CardContainer = styled.div`
//   position: absolute;
//   top: 10px;
//   right: 10px;
// `

const ImgComponent = ({card = 'buenosAires'}) => {
    console.log(card, intensity[card]?.intensity)
    return (
        <CardContainer>
            <NotesContainer>
                <Label information={notes.smoky} isShort/>
            </NotesContainer>
            <Img src={CapsulePreview[card]} />
            <TitleL>{nameUkraine[card]}</TitleL>
            <BorderBlock/>
            <TitleM>{nameOrigin[card]}</TitleM>
            <CardDescription>{shortDescription[card]}</CardDescription>
            <CoffeParamsContainer>
                <TitleS color="#876c43">{translate['intensity']}</TitleS>
                <Rating rate={intensity[card].intensity}/>
            </CoffeParamsContainer>
            <Price price='320'/>
            <ExstraInformation>1 упаковка (10 капсул)*</ExstraInformation>
            <Button>Додати у корзину</Button>
        </CardContainer>
    )
};

export const CardGood = memo(ImgComponent);

