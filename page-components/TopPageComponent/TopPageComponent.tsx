import React from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Paragraph, Tag, Title } from '@/components';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { HhData } from '../../components/HhData/HhData';
import { Advantages } from '@/components/Advantages/Advantages';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title tag="h1">{page.title}</Title>
        {products && (
          <Tag color="grey" size="medium">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Title tag="h2">Вакансии - {page.category}</Title>
        <Tag color="red" size="medium">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Title tag="h2">Преимущества</Title>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Title tag="h2">Получаемые навыки</Title>
      {page.tags.map((tag) => (
        <Tag size="small" key={tag} color="primary">
          {tag}
        </Tag>
      ))}
    </div>
  );
};
