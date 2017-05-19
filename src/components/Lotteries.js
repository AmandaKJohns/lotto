import React from 'react';

import ShowContainer from './shows/ShowContainer'
// stub data for now
import { BroadwayLotteries } from '../data/lotteries';

const Lotteries = ({match}) => (
  <div className="main-content shows">
    <div className="show-header group">
      <h2>Shows</h2> 
      <ShowContainer data={BroadwayLotteries}/>
    </div>
  </div>
);

export default Lotteries;