import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const LogoContainer = styled.div`
  ${tw`
    flex
    font-family["ZCOOL KuaiLe"]
    font-black
    text-2xl
    text-white
  `}
`;

export function Logo() {
  return <LogoContainer>TRAVELYA</LogoContainer>;
}
