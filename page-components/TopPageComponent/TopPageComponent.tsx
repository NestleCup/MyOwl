import React, { useReducer } from 'react';
import { TopPageComponentProps } from './TopPageComponent.props';
import { Sort, Tag, Title } from '@/components';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { HhData } from '../../components/HhData/HhData';
import { Advantages } from '@/components/Advantages/Advantages';
import { SortEnum } from '@/components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  function setSort(sort: SortEnum) {
    dispatchSort({ type: sort });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Title tag="h1">{page?.title}</Title>
        {sortedProducts && (
          <Tag color="grey" size="medium">
            {sortedProducts.length}
          </Tag>
        )}

        <Sort sort={sort} setSort={setSort} />
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
