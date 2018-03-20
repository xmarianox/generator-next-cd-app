import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LayoutWrapper from './styles';

export default class Layout extends PureComponent {
  render() {
    return (
      <LayoutWrapper>
        {this.props.children}
      </LayoutWrapper>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

