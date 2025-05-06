import { logo } from "@/assets/PageImage";
import { Box, Text } from "@mantine/core";
import React from "react";

const DefaultHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Box className="flex sticky justify-center items-center space-x-2 bg-white shadow-md z-50 top-0 left-0 h-14">
        <img src={logo} alt="Header Image" width={45} />
        <Text fw={700} size="30px">
          TIK TOK
        </Text>
      </Box>
      <main className="flex items-center justify-center mt-20">{children}</main>
    </Box>
  );
};

export default DefaultHeader;
