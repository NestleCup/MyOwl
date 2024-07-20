import Button from '@/components/Button/Button';
import { Title } from '@/components/Title/Title';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { Tag } from '@/components';
import Rating from '@/components/Rating/Rating';
import { useState } from 'react';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <Title tag="h3">Текст</Title>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
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
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
