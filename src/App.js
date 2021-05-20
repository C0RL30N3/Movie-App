import "./App.css";
import React, { useState } from "react";
import MovieList from "./component/MovieList";
import {  Form, FormControl, Button } from "react-bootstrap";
import Add from "./component/add";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const data = [
    {
      title: "Earwig and the Witch",
      src: "https://i.egycdn.com/pic/WmFwZndlY21ZRW1ZSGN2Y211Y21mTm1tcElQbEs.jpg",
      rating: 4 ,
      text:
        "An orphan girl, Earwig, is adopted by a witch and comes home to a spooky house filled with mystery and magic.",
    },
    {
      title: "Nazha Reborn",
      src: "https://i.egycdn.com/pic/WmFwZndlY21ZSGNtcGJtWWFjbUNqbWptbW12bXZ2Tmo.jpg",
      rating: 3,
      text:
        "The story happens after over 2000 years when Nezha conquered the Dragon King in the novel Fengshen Yanyi.A normal young deliveryman Li Yunxiang, though coming from the slum area, is living.",
    },
    {
      title: "Xico's Journey",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21ZbW1ibWJtVFl2RWNtcHZtbW1ibUVtRXZOag.jpg",
      rating: "1",
      text:
        "A girl, a dog and her best pal set out to save a mountain from a gold-hungry corporation. But the key lies closer to home, with her sidekick pup, Xico.",
    },
    {
      title: "Ainbo",
      src: "https://i.egycdn.com/pic/WmFwZndlY21ZdnZOdm1UbW1qRWNtRWxtYnZ0d3hjdHc.jpg",
      rating: 2,
      text:
        "هذا الفيلم ليس متوفر بجودة عالية حتى الان لانه جديد و مازال يعرض في السينما.لا يوجد تاريخ محدد لاصدار نسخة الجودة العالية.",
    },
    {
      title: "Raya and the Last Dragon",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21ZRW12dk5tbVRiRWNtSVBtbW1qY3RjYWN3.jpg",
      rating: 4,
      text:
        "بعد سنوات من قيام التنانين بالتضحية القصوى لإنقاذ البشر في مملكة لوماندرا من درون الشرير، تعود المخلوقات الشائنة لتهدد لوماندرا، فتسعى المحاربة (رايا) للعثور على آخر تنين على أمل إنقاذ عالمها من الدرون.",
    }, 
    {
      title: "Justice Society: World War II",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21ZanZOdm1wYm1tRWN2Tm1tb2NtbW1tbXBi.jpg",
      rating: 3,
      text:
        "The Justice Society of America , a group of heroes aiding the allies in World War 2, acquire an ally from the future who sends them on an adventure that changes history.",
    },
    
  ];
  const starList = [
    {
      id: 1,
      icon: "★",
      isColored: false,
    },
    {
      id: 2,
      icon: "★",
      isColored: false,
    },
    {
      id: 3,
      icon: "★",
      isColored: false,
    },
    {
      id: 4,
      icon: "★",
      isColored: false,
    },
    {
      id: 5,
      icon: "★",
      isColored: false,
    },
  ];

  const [tabStar, setTabStar] = useState(starList);

  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");

  const movieAdd = (title, src, rating, text) =>
    setMovieList([...movieList, { title, src, rating, text }]);
  const changeColor = (id) => {
    setTabStar(
      tabStar.map((el) =>
        el.id === id ? { ...el, isColored: !el.isColored } : el
      )
    );
  };
  return (
    
    <div className="App">
     <m1>Movies Store</m1> 
      <div style={{display:'flex' ,justifyContent:'center',paddingTop:'130px'}}>
  <Form style={{display:'flex',paddingRight:'50px'}}>
  <Button variant="outline-info" style={{color:'pink',fontFamily:'Cookie',fontSize:'30px',borderRadius:' 30px'}}>Filter by title</Button>
      <FormControl onChange={(search) => setSearch(search.target.value)} type="text" placeholder="Search" style={{width:'50%',borderRadius:'30px'}} />'
      
    </Form>
 <Button variant="outline-info" style={{color:'pink',fontFamily:'Cookie',fontSize:'30px',borderRadius:' 30px',paddingleft:'50px'}}>Filter by rating</Button>
  {tabStar.map((star) => (
  
              <span className={star.isColored?"gold":"black"} onClick={() => changeColor(star.id)}>{star.icon}</span>
              
            ))}
   </div>
      <MovieList movieList={movieList} search={search} tabStar={tabStar} />
  
      <Add movieAdd={movieAdd} />
    </div>
  );
}

export default App;
