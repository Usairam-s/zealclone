import {
  CultureContainer,
  CultureHeading,
  CultureParagraph,
  CultureSubHeading,
} from "@/components/mui/About";

export default function AboutCulture() {
  return (
    <CultureContainer>
      <CultureHeading sx={{ fontFamily: "BDSans" }}>Our Culture</CultureHeading>
      <CultureSubHeading sx={{ fontFamily: "BDSans" }}>
        We believe in the importance of providing our team with essential
        resources that support their personal development and foster an
        enriching work environment that inspires them to be part of our ZEAL
        family, giving their best every day.
      </CultureSubHeading>
      <CultureParagraph sx={{ fontFamily: "JakartaSans" }}>
        At the heart of ZEAL, our core values—resilience, empathy, patience,
        humor, self-awareness, and hope—not only define who we are but also
        guide our team toward success and well-being in the workplace. We
        believe that by embracing these values, we create an environment where
        every team member can thrive and contribute meaningfully to ZEAL's
        continued success.
      </CultureParagraph>
    </CultureContainer>
  );
}
