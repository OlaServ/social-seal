"use client";
import { HeroElements as el } from "./hero.elements";
import { useBreakpointValue } from "@chakra-ui/react";
import { carouselLogoUrls } from "@/data/carousel-logo-urls";

export const Hero = () => {
  const isMobile = useBreakpointValue(
    { base: true, sm: true, md: true, lg: false },
    { fallback: "lg" }
  );

  return (
    <el.Container>
      <el.InnerContainer>
        <el.ColumnLeft>
          <el.Tag>Social Media Marketing That Works!</el.Tag>
          <el.H1 as="h1">
            Save Time <br />
            Build Connections
            <br />
            Increase Profits
          </el.H1>
          {!isMobile && (
            <>
              <el.SocialMediaIcons
                alt="social-media-icons"
                src="/assets/icons/social-media.svg"
              />

              <el.ButtonsContainer>
                <el.PlansButton size="large">View Our Plans</el.PlansButton>
                <el.OfferButton size="large">What We Offer</el.OfferButton>
              </el.ButtonsContainer>
            </>
          )}
        </el.ColumnLeft>
        <el.ColumnRight>
          <el.ImagesContainer>
            <el.StyledImage
              alt="A woman in a bakery shop holding a paper bag and smiling"
              src="/assets/images/hero_1.jpg"
            />
            <el.StyledImage
              alt={
                isMobile
                  ? "A smiling woman in a bakery shop holding two loaves of bread"
                  : "A smiling woman sitting in a car on the passenger seat"
              }
              src={
                isMobile
                  ? "/assets/images/hero_4.jpg"
                  : "/assets/images/hero_2.jpg"
              }
            />
          </el.ImagesContainer>

          <el.Placeholder
            bgImage={isMobile ? "url(/assets/images/hero_3.jpg)" : "unset"}
          />
        </el.ColumnRight>
        {isMobile && (
          <el.MobileBottomPart>
            <el.SocialMediaIcons
              alt="social-media-icons"
              src="/assets/icons/social-media.svg"
            />
            <el.ButtonsContainer>
              <el.PlansButton size="large">View Our Plans</el.PlansButton>
            </el.ButtonsContainer>
          </el.MobileBottomPart>
        )}
      </el.InnerContainer>

      <el.StyledCarousel imageUrls={carouselLogoUrls} />
    </el.Container>
  );
};
