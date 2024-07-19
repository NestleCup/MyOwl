import Button from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Tag } from '@/components';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    console.log('counter' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  }, []);
  return (
    <>
      {counter}
      <Title tag="h3">Текст</Title>
      <Button appearance="primary" onClick={() => setCounter((x) => x + 1)}>
        Кнопка
      </Button>
      <Button appearance="ghost" onClick={() => setCounter((x) => x - 1)}>
        Кнопка
      </Button>
      <Paragraph>Маленький</Paragraph>
      <Paragraph size="m">Маленький</Paragraph>
      <Paragraph>Маленький</Paragraph>
      <Tag size="small" color="ghost">
        hh.ru
      </Tag>
      <Tag size="medium" color="red">
        hh.ru
      </Tag>
      <Tag size="small" color="grey">
        HH.ru
      </Tag>
      <Tag size="medium" color="green">
        HH.ru
      </Tag>
      <Tag size="medium" color="primary">
        HH.ru
      </Tag>
    </>
  );
}
