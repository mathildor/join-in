import React from 'react';
import { Content } from "./Content";
// <Content />

export class Root extends React.Component<{}, {}> {
  render() {
    return (
      <div id="wrapper">
        <Content />
      </div>
    );
  }
}
