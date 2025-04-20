import DefaultLayout from "@/layouts/default";
import { Box, Text } from "@mantine/core";
import { IconUserPlus, IconSearch, IconCamera } from "@tabler/icons-react";
import { Carousel } from "@mantine/carousel";
import { Badge, Avatar } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { IconWaveSine } from "@/common/IconWaveSine";
const Mailbox = () => {
  const navigate = useNavigate();
  const Chat = () => {
    navigate("/chatmail");
  };
  return (
    <DefaultLayout>
      <Box className="mx-auto overflow-hidden w-full h-[900px]  overflow-y-auto scrollbar-hide bg-white">
        <Box className="flex justify-between gap-4 items-center h-16 px-4 ">
          <IconUserPlus />
          <Text fw={700} ml={35}>
            Hộp thư
          </Text>
          <IconSearch />
        </Box>
        <Carousel
          withControls={false}
          slideSize="16.333333%"
          slideGap="md"
          align="start"
          slidesToScroll={2}
          className="mb-1 p-4"
        >
          <Carousel.Slide>
            <Box className="flex flex-col justify-center ml-1">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "6px" }}
                  isBordered
                  size="lg"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box w={60} className="mt-2">
                <Text truncate="end">Trường Hay Ho</Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col justify-center ml-1">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "6px" }}
                  isBordered
                  size="lg"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box w={60} className="mt-2">
                <Text truncate="end">Trường Hay Ho</Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col justify-center ml-1">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "6px" }}
                  isBordered
                  size="lg"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box w={60} className="mt-2">
                <Text truncate="end">Trường Hay Ho</Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col justify-center ml-1">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "6px" }}
                  isBordered
                  size="lg"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box w={60} className="mt-2">
                <Text truncate="end">Trường Hay Ho</Text>
              </Box>
            </Box>
          </Carousel.Slide>
          <Carousel.Slide>
            <Box className="flex flex-col justify-center ml-1">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "6px" }}
                  isBordered
                  size="lg"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box w={60} className="mt-2">
                <Text truncate="end">Trường Hay Ho</Text>
              </Box>
            </Box>
          </Carousel.Slide>
        </Carousel>
        <hr />
        <Box className="px-4">
          <Box
            className="flex justify-between  items-center "
            onClick={() => Chat()}
            style={{ cursor: "pointer" }}
          >
            <Box className="flex  items-center">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "20px" }}
                  isBordered
                  size="md"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box className="mt-5 ml-2">
                <Text fw={700} ml={10}>
                  Trường Hay Ho
                </Text>
                <Text ml={10}>Hộp thư đến</Text>
              </Box>
            </Box>
            <IconCamera size={24} stroke={1.5} className="mt-5" />
          </Box>

          <Box
            className="flex justify-between  items-center"
            onClick={() => Chat()}
            style={{ cursor: "pointer" }}
          >
            <Box className="flex  items-center">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "20px" }}
                  isBordered
                  size="md"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box className="mt-5 ml-2">
                <Text fw={700} ml={10}>
                  Trường Hay Ho
                </Text>
                <Text ml={10}>Hộp thư đến</Text>
              </Box>
            </Box>
            <IconCamera size={24} stroke={1.5} className="mt-5" />
          </Box>
          <Box
            className="flex justify-between  items-center "
            onClick={() => Chat()}
            style={{ cursor: "pointer" }}
          >
            <Box className="flex  items-center">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "20px" }}
                  isBordered
                  size="md"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box className="mt-5 ml-2">
                <Text fw={700} ml={10}>
                  Trường Hay Ho
                </Text>
                <Text ml={10}>Hộp thư đến</Text>
              </Box>
            </Box>
            <IconCamera size={24} stroke={1.5} className="mt-5" />
          </Box>
          <Box
            className="flex justify-between  items-center "
            onClick={() => Chat()}
            style={{ cursor: "pointer" }}
          >
            <Box className="flex  items-center">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "20px" }}
                  isBordered
                  size="md"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box className="mt-5 ml-2">
                <Text fw={700} ml={10}>
                  Trường Hay Ho
                </Text>
                <Text ml={10}>Hộp thư đến</Text>
              </Box>
            </Box>
            <IconCamera size={24} stroke={1.5} className="mt-5" />
          </Box>
          <Box
            className="flex justify-between  items-center "
            onClick={() => Chat()}
            style={{ cursor: "pointer" }}
          >
            <Box className="flex  items-center">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "20px" }}
                  isBordered
                  size="md"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box className="mt-5 ml-2">
                <Text fw={700} ml={10}>
                  Trường Hay Ho
                </Text>
                <Text ml={10}>Hộp thư đến</Text>
              </Box>
            </Box>
            <IconCamera size={24} stroke={1.5} className="mt-5" />
          </Box>
          <Box
            className="flex justify-between  items-center "
            onClick={() => Chat()}
            style={{ cursor: "pointer" }}
          >
            <Box className="flex  items-center">
              <Badge
                isOneChar
                color="danger"
                content={<IconWaveSine />}
                placement="bottom-right"
                shape="circle"
                size="lg"
              >
                <Avatar
                  style={{ marginTop: "20px" }}
                  isBordered
                  size="md"
                  color="danger"
                  src="https://i.pravatar.cc/300?u=a042581f4e290267072"
                />
              </Badge>
              <Box className="mt-5 ml-2">
                <Text fw={700} ml={10}>
                  Trường Hay Ho
                </Text>
                <Text ml={10}>Hộp thư đến</Text>
              </Box>
            </Box>
            <IconCamera size={24} stroke={1.5} className="mt-5" />
          </Box>
        </Box>
      </Box>
    </DefaultLayout>
  );
};

export default Mailbox;
