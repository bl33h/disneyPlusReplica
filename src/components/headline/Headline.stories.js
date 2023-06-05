/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Headline.stories.js
   Version: I
   Creation: 04/06/2023
   Last modification: 05/06/2023
*/

import Headline from './Headline';

export default {
  title: 'Components/Headline',
  component: Headline,
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Headline',
  },
};