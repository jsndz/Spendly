import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { items } from '@/lib/const';

const IntegrationInf = () => {
  return (
    <div>
        <InfiniteMovingCards items={items}></InfiniteMovingCards>
        <InfiniteMovingCards items={items} direction="right"></InfiniteMovingCards>
    </div>
  )
}

export default IntegrationInf;  