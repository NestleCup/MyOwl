import React, { KeyboardEvent, useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(e, i + 1)
          }
        />
      );
    });
    setRatingArray(updateArray);
  };

  const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
    if (e.code != 'Space' || !setRating) {
      return;
    }
    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props} onMouseLeave={() => changeDisplay(rating)}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
