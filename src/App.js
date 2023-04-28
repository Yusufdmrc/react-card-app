import {
  Container,
  Grid,
  Stack,
  Button,
  Input,
  Textarea,
  Title,
} from "@mantine/core";
import "./App.css";
import { useState } from "react";
import CardComponent from "./components/Card";

let arr = [
  {
    id: 1,
    name: "Messi",
    club: "PSG",
    img: "https://images.unsplash.com/photo-1626025437642-0b05076ca301?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=834&q=80",
  },
  {
    id: 2,
    name: "Ronaldo",
    club: "Al Nassr",
    img: "https://images.unsplash.com/photo-1583236728325-aa6cd12594a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Neymar",
    club: "PSG",
    img: "https://images.unsplash.com/photo-1529629468183-b9cddd7be13b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const App = () => {
  const [name, setName] = useState("");
  const [club, setClub] = useState("");
  const [list, setList] = useState(arr);
  const [img, setImg] = useState("");

  const click = () => {
    setName("");
    setClub("");
    setImg("");

    setList([
      ...list,
      {
        id: 5,
        name: name,
        club: club,
        img: img,
      },
    ]);
  };
  return (
    <Container>
      <Title size="h3" className="title">
        <h1>Futbolcu Kartı Oluşturma Programı</h1>
      </Title>

      <Stack>
        <Input.Wrapper label="Futbolcu">
          <Input
            placeholder="İsim Giriniz"
            radius="md"
            width={400}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="Kulüp Giriniz"
          radius="md"
          label="Kulüp"
          value={club}
          onChange={(e) => {
            setClub(e.target.value);
          }}
        />
        <Input.Wrapper label="Görsel">
          <Input
            placeholder="Görsel Linki Giriniz"
            width={400}
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </Input.Wrapper>
        <Button color="cyan" onClick={click}>
          Futbolcu Kartı Oluştur
        </Button>
      </Stack>
      <h2 className="h2">Futbolcu Kartları</h2>
      <Grid className="cards">
        {list.map(({ club, name, img }, i) => (
          <Grid.Col span={3} key={`index ${i}`}>
            <CardComponent
              club={club}
              name={name}
              img={img}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
                console.log("Dışardan tıklanıldı");
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
