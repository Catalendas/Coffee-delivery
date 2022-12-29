import styled, { css } from "styled-components";
import introBackgroundImg from '../../.././../assets/intro-background.png'
import { rgba } from 'polished'
import { TitleText } from "../../../../components/Typography";

export const BannerContainer = styled.section`
    height: 34rem;
    width: 100%;
   
    background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
   background-size: cover;

   display: flex;
   align-items: center;
   justify-content: center;

   @media(max-width: 520px) {
        width: 100%;

        padding: 1rem;
    }

`

export const BanneroContent = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    @media(max-width: 520px) {
       

        > img {
           display: none;
        }
    }
`

export const BannerTitle = styled(TitleText)`
  margin-bottom: 1rem;

  @media(max-width: 520px) {
        width: 360px;
        font-size: 3rem;
    }
`

export const BannerBanefits = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  font-size: 1rem;

  @media(max-width: 520px) {
    width: 320px;
    font-size: .80rem;
  }
`