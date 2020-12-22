import { useState } from 'react';
import Container from '../../shared/basic-components/Container';
import { Button } from '../../shared/basic-components/Buttons';
import api from '../../services/apiService';

const MainPage = () => {
  const [img, setImg] = useState('');
  const rollDog = async () => {
    const { data } = await api.dog.getRandomDogImg();
    setImg(data.message);
  };

  return (
    <Container>
      {
        img && <img src={img} alt="dog" />
      }
      <Button onClick={rollDog}>Roll dog</Button>
    </Container>
  );
};

export default MainPage;
