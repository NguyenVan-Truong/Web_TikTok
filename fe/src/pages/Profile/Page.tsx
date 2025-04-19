import DefaultLayout from "@/layouts/default";
import { Avatar, Box, Indicator, Badge, Text, Button } from "@mantine/core";
import {
  IconCoins,
  IconMenu2,
  IconStairsUp,
  IconPlus,
  IconUserPlus,
} from "@tabler/icons-react";
import ContentPage from "./Content/page";
const Profile = () => {
  return (
    <DefaultLayout>
      <Box className="mx-auto overflow-hidden w-full h-[900px]  overflow-y-auto scrollbar-hide bg-white">
        <Box className="flex justify-between gap-4 items-center h-16 px-4 ">
          <div>
            <IconCoins />
          </div>
          <Text fw={700} ml={35}>
            Trường Hay Ho
          </Text>
          <div className="flex gap-4">
            <IconMenu2 />
            <IconStairsUp />
          </div>
        </Box>
        <Box className="flex flex-col items-center justify-center mx-auto">
          <Indicator
            label={<IconPlus size={16} />}
            position="bottom-end"
            size={25}
            mt={30}
            withBorder
            processing
          >
            <Avatar
              size="xl"
              radius="xl"
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            />
          </Indicator>
          <Text className="mt-5">@truong21_6_2004</Text>
        </Box>
        <Box className="flex justify-center gap-14  mt-5 ">
          <Box className="flex flex-col items-center justify-center">
            <Text>191</Text>
            <Text>Đã follow</Text>
          </Box>
          <Box className="flex flex-col items-center justify-center">
            <Text>191</Text>
            <Text>Follower</Text>
          </Box>
          <Box className="flex flex-col items-center justify-center">
            <Text>191</Text>
            <Text>Thích</Text>
          </Box>
        </Box>
        <Box className="flex justify-center mt-3 gap-1">
          <Button>Sửa hồ sơ</Button>
          <Button>Chia sẻ hồ sơ</Button>
          <Button>
            <IconUserPlus size={24} color="black" />
          </Button>
        </Box>
        <ContentPage />
      </Box>
    </DefaultLayout>
  );
};

export default Profile;
