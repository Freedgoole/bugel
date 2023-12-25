import logo from './logo.svg';
import './App.css';
import notes from './catalog/notes'
import sizeOfCaup from './catalog/size'
import './fonts/NespressoLucas-Bold.woff';
import './fonts/NespressoLucas-Med.woff';
import './fonts/NespressoLucas-Regular.woff';
import {Label} from "./component/Label";
import {CapsulePreview} from "./images";
import {Img} from "./component/CardImg";
import {shortDescription} from "./catalog/shortDescription";
import {nameOrigin, nameUkraine} from "./catalog/name";
import {
  Description,
  SectionDescription,
  SectionTitle,
  TitleL,
  TitleM,
  TitleS
} from "./component/styledComponent/Typography";
import {Rating} from "./component/Rating";
import {intensity, translate} from "./catalog/intensity";
import {CentralContainer, FlexContainerCentred, GoodsContainer} from "./component/styledComponent/Wrappers";
import {Badge} from "./component/styledComponent/Badge";
import {Button} from "./component/styledComponent/Button";
import {Footer} from "./component/Footer";
import {Price} from "./component/Price";
import {useEffect, useState} from "react";
import {SideBar} from "./component/sideBar";
import {CardGood} from "./component/Card";
import {goods} from "./catalog/goods";
import useBodyOverflow from "./component/hooks/hiddenScroll";
import {Header} from "./component/Header";
import {SectionPreview} from "./component/styledComponent/Section";
import {Sections} from "./catalog/section";

function App() {
  const [isOpenSideBar, setOpenSideBar] = useState(false);

  const toggleOpenSideBar = () => {
    setOpenSideBar(!isOpenSideBar);
  }

  useBodyOverflow(isOpenSideBar)
  console.log('sss', `url(${Sections['worldExploration'].img})`)
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <SideBar isOpenSideBar={isOpenSideBar} onClose={toggleOpenSideBar}/>
        Aromatic profile :
          <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          {Object.values(notes).map((note) => (
              <Label information={note} isShort/>
          ))}
          </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          <CentralContainer>
            <GoodsContainer>
              {goods.map(good => (<CardGood card={good} />))}
            </GoodsContainer>
          </CentralContainer>
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          <CentralContainer>
            <GoodsContainer>
              <CardGood/>
              <CardGood/>
              <CardGood/>
              <CardGood/>
              <CardGood/>
            </GoodsContainer>
          </CentralContainer>
        </div>
          <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
              {Object.values(notes).map((note) => (
                  <Label information={note} />
              ))}
          </div>
        Size of cup:
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          {Object.values(sizeOfCaup).map((note) => (
              <Label information={note} isShort/>
          ))}
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          <SectionPreview style={{backgroundImage: `url(images/HomeSection/${Sections["worldExploration"].img})`}} >
              <SectionTitle>Дослідження світу</SectionTitle>
              <SectionDescription>
                Подорожуйте світом завдяки каві та відкривайте унікальні та типові смаки, які привозяться до вас з міст по всьому світу
              </SectionDescription>
          </SectionPreview>
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          {Object.values(sizeOfCaup).map((note) => (
              <Label information={note} />
          ))}
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          <Price price='320'/>
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          <SectionTitle>Дослідження світу</SectionTitle>
          <SectionDescription>
            Подорожуйте світом завдяки каві та відкривайте унікальні та типові смаки, які привозяться до вас з міст по всьому світу
          </SectionDescription>
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          <Badge type='bestSeller'>Топ продаж</Badge>
          <Badge type='newProduct'>Новий продукт</Badge>
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          <Button>Додати у корзину</Button>
          <Button type='basket' onClick={toggleOpenSideBar}>Корзина</Button>
        </div>
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          {Object.values(intensity).map((note) => (
              Object.entries(note).map(([name, rate]) => (
                  <FlexContainerCentred>
                    <TitleS color="#876c43">{translate[name]}</TitleS>
                    <Rating rate={rate}/>
                  </FlexContainerCentred>
              ))
          ))}
        </div>
        Preview Capsule
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          {Object.entries(CapsulePreview).map(([key, value]) => (
              <div>
              <Img src={value} />
              <p style={{color: 'black', fontSize: '12px'}}>{key}</p>
              </div>
          ))}
        </div>
        Name Ukr
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          {Object.entries(nameUkraine).map(([key, value]) => (
              <TitleL>{value}</TitleL>
          ))}
          Name Eng
          <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
            {Object.entries(nameOrigin).map(([key, value]) => (
                <TitleM>{value}</TitleM>
            ))}
        </div>
        Description
        <div style={{width: '100%', display: 'flex', gap: "12px", flexWrap: "wrap", justifyContent: "start", marginTop: '24px'}}>
          {Object.entries(shortDescription).map(([key, value]) => (
              <Description>{value}</Description>
          ))}
        </div>
        <img src={logo} className="App-logo" alt="logo" />
          <Footer/>
        </div>
      </header>
    </div>
  );
}

export default App;
