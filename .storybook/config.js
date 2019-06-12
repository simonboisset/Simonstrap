import { addParameters,configure } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import '@storybook/addon-console';
import "./preview.css";
function loadStories() {
  require('./index.js');
}
configureActions({
  depth: 100,
  limit: 20,
})
addParameters({
  options: {
    panelPosition: 'right'
  },
});
configure(loadStories, module);
