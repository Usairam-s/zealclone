import AnimateFromLeft from "@/components/AnimateFromLeft/AnimateFromLeft";
import { ApproachHero, Heading, SubHeading } from "@/components/mui/Approach";
import { Box } from "@mui/material";

export default function MainHeading() {
  return (
    <ApproachHero>
      <Box>
        <Heading fontFamily={"BDSans"} variant="h1">
          <AnimateFromLeft text=" Approach." />
        </Heading>
        <SubHeading variant="h6">
          <AnimateFromLeft
            text="  With more than 15 years of experience in healthcare technologies and
          the integration of innovations such as artificial intelligence, we
          specialize in investing in highly scalable businesses and management
          teams. We identify those that we believe have the potential to
          generate exceptional growth."
          />
        </SubHeading>
      </Box>
    </ApproachHero>
  );
}
