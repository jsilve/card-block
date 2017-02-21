import React from 'react';
import DocumentTitle from 'react-document-title';

export class AppContainer extends React.Component {
  render() {
    return (
      <DocumentTitle title='Card Block Exercise'>
          { this.props.children }
      </DocumentTitle>
    );
  }
}