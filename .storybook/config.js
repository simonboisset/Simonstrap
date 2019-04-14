import { configure } from '@storybook/react';
import "./preview.css";
function loadStories() {
  require('./index.js');
}

configure(loadStories, module);
