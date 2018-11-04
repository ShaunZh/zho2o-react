/**
 *
 * SimpleTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import bgYouLike from '../../images/bg_youlike.png';

const Wrap = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  > img {
    width: 56px;
  }
`;
function SimpleTitle(props) {
  return (
    <Wrap>
      <span className="fs-14 fc-333">{props.title}</span>
      <img src={bgYouLike} alt="下划线图标" />
    </Wrap>
  );
}

SimpleTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SimpleTitle;
