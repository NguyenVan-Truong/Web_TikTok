import { IconWaveSine } from "@/common/IconWaveSine";
import { Badge, Avatar } from "@heroui/react";
import { Box, Button, Text, TextInput, Tooltip } from "@mantine/core";
import { IconArrowLeft, IconPhoto, IconSend } from "@tabler/icons-react";
const ChatMail = () => {
  return (
    <Box className="mx-auto overflow-hidden w-full h-[900px]  overflow-y-auto scrollbar-hide bg-white">
      <Box className="flex gap-4 items-center h-16 px-4 top-0 bg-white z-10 fixed w-full border-b">
        <Box className="flex gap-4 items-center flex-1">
          <IconArrowLeft size={30} className="mt-2" />
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
              size="md"
              color="danger"
              src="https://i.pravatar.cc/300?u=a042581f4e290267072"
            />
          </Badge>
          <Text fw={700} size="xl" className="mt-1">
            Trường Hay Ho
          </Text>
        </Box>
      </Box>
      <Box className="p-4 pt-20">
        {/* Tin nhắn */}

        <Box className="flex justify-start gap-2 items-end mb-2">
          <Avatar
            style={{ marginBottom: "6px" }}
            isBordered
            size="sm"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e290267072"
          />
          <Box className="bg-blue-100 p-2 rounded-lg max-w-[70%]">
            Xin chào! Bạn cần hỗ trợ gì ?
          </Box>
        </Box>

        {/* Tin nhắn bên phải (người dùng) */}
        <Box className="flex justify-end mb-2">
          <Box className="bg-green-100 p-2 rounded-lg max-w-[70%]">
            Mình cần tư vấn sản phẩm laptop.
          </Box>
        </Box>

        {/* Tin nhắn tiếp theo bên trái */}
        <Box className="flex justify-start gap-2 items-end mb-2">
          <Avatar
            style={{ marginBottom: "6px" }}
            isBordered
            size="sm"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e290267072"
          />
          <Box className="bg-blue-100 p-2 rounded-lg max-w-[70%]">
            Xin chào! Bạn cần hỗ trợ gì ?
          </Box>
        </Box>

        {/* Tin nhắn tiếp theo bên trái */}
        <Box className="flex justify-start gap-2 items-end mb-2">
          <Avatar
            style={{ marginBottom: "6px" }}
            isBordered
            size="sm"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e290267072"
          />
          <Box className="bg-blue-100 p-2 rounded-lg max-w-[70%]">
            Xin chào! Bạn cần hỗ trợ gì ?
          </Box>
        </Box>

        {/* Input */}
        <Box className="p-4 border-t flex gap-2 fixed bottom-0 left-0 w-full bg-white">
          <TextInput
            className="flex-1"
            size="lg"
            placeholder="Nhập tin nhắn..."
            leftSection={
              <Tooltip
                label="Hình ảnh"
                withArrow
                arrowPosition="side"
                arrowOffset={5}
                arrowSize={8}
                position="top-start"
                transitionProps={{ transition: "fade-right", duration: 300 }}
              >
                <Button
                  variant="transparent"
                  leftSection={<IconPhoto size={25} className="ml-2" />}
                />
              </Tooltip>
            }
            rightSection={
              <Tooltip
                label="Gửi"
                withArrow
                arrowPosition="side"
                arrowOffset={5}
                position="top-start"
                arrowSize={8}
                transitionProps={{ transition: "fade-right", duration: 300 }}
              >
                <Button
                  variant="transparent"
                  leftSection={<IconSend size={25} />}
                />
              </Tooltip>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatMail;
