// overlay 및 container
import React from 'react';
import Location from './Location';

const SideBar = () => {
	return (
    <div>
      <Location visible={true}>
        sideHeader
        LocationList
      </Location>
    </div>
  );
};

export default SideBar;
