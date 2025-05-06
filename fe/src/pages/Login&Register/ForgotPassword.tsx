import React from "react";
import { useForm } from "@mantine/form";
import {
  Box,
  Button,
  Divider,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import DefaultHeader from "./Header";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const form = useForm({
    mode: "controlled",
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <DefaultHeader>
      <Box className="flex flex-col justify-center items-center  bg-gray-50 p-4">
        <Text fw={500} size="xl">
          Quên mật khẩu
        </Text>
        <Box
          mt={20}
          w={400}
          mx="auto"
          onSubmit={form.onSubmit((values) => console.log(values))}
          component="form"
        >
          <TextInput
            label="Email"
            placeholder="your@email.com"
            withAsterisk
            {...form.getInputProps("email")}
          />
          <Group justify="end" mt="xs">
            <Text
              size="sm"
              c="blue"
              style={{ cursor: "pointer" }}
              onClick={login}
            >
              Đã có tài khoản?
            </Text>
          </Group>

          <Button fullWidth mt="xl" type="submit">
            Gửi lại mật khẩu
          </Button>
        </Box>
      </Box>
    </DefaultHeader>
  );
};

export default ForgotPassword;
