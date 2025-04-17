import { Box, Text } from "@mantine/core";
import { IconTriangleInverted } from "@tabler/icons-react";
const LovePage = () => {
  return (
    <Box className="grid grid-cols-3 pb-16 w-full overflow-hidden">
      <Box className="h-72 relative">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <Box className=" flex items-center justify-between  overflow-hidden w-15 px-2  absolute  bottom-1  z-10 text-white">
          <IconTriangleInverted
            style={{ transform: "rotate(-90deg)" }}
            size={15}
          />
          <Text size="sm" ml={2} fw={500}>
            350
          </Text>
        </Box>
      </Box>
      <Box className="h-72 relative">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <Box className=" flex items-center justify-between  overflow-hidden w-15 px-2  absolute  bottom-1  z-10 text-white">
          <IconTriangleInverted
            style={{ transform: "rotate(-90deg)" }}
            size={15}
          />
          <Text size="sm" ml={2} fw={500}>
            350
          </Text>
        </Box>
      </Box>
      <Box className="h-72 relative">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <Box className=" flex items-center justify-between  overflow-hidden w-15 px-2  absolute  bottom-1  z-10 text-white">
          <IconTriangleInverted
            style={{ transform: "rotate(-90deg)" }}
            size={15}
          />
          <Text size="sm" ml={2} fw={500}>
            350
          </Text>
        </Box>
      </Box>
      <Box className="h-72 relative">
        <video
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dcvu7e7ps/video/upload/v1744799772/Download_vjv8fv.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <Box className=" flex items-center justify-between  overflow-hidden w-15 px-2  absolute  bottom-1  z-10 text-white">
          <IconTriangleInverted
            style={{ transform: "rotate(-90deg)" }}
            size={15}
          />
          <Text size="sm" ml={2} fw={500}>
            350
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LovePage;
