import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '~/theme';

type FootnoteType = {
  text: string;
  /** theme.spaceを推奨 */
  marginTop?: string;
};

/**
 * 脚注
 */
export const Footnote: React.FC<FootnoteType> = ({
  text,
  marginTop = theme.space.s,
}) => {
  return <P marginTop={marginTop}>{text}</P>;
};

const P = styled.p<Pick<FootnoteType, 'marginTop'>>`
  ${({ theme, marginTop }) => css`
    font-size: 1.3rem;
    color: ${theme.font.color.default};
    letter-spacing: 1px;
    line-height: 2rem;
    white-space: pre-wrap;

    margin-top: ${marginTop};
  `}
`;
