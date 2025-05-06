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
const Login = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };
  const forgotPassword = () => {
    navigate("/forgotPassword");
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
          Đăng nhập tài khoản của bạn
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

          <PasswordInput
            mt="md"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu"
            withAsterisk
            {...form.getInputProps("password")}
          />

          <Group justify="space-between" mt="xs">
            <Text
              size="sm"
              c="blue"
              style={{ cursor: "pointer" }}
              onClick={forgotPassword}
            >
              Quên mật khẩu?
            </Text>
            <Text
              size="sm"
              c="blue"
              style={{ cursor: "pointer" }}
              onClick={register}
            >
              Chưa có tài khoản?
            </Text>
          </Group>

          <Button fullWidth mt="xl" type="submit">
            Đăng nhập
          </Button>

          <Divider my="md" label="Hoặc đăng nhập bằng" labelPosition="center" />

          <Group grow>
            <Button
              leftSection={<IconBrandGoogle size={18} />}
              variant="default"
              color="gray"
              onClick={() => console.log("Đăng nhập bằng Google")}
            >
              Google
            </Button>
            <Button
              leftSection={<IconBrandFacebook size={18} />}
              color="blue"
              onClick={() => console.log("Đăng nhập bằng Facebook")}
            >
              Facebook
            </Button>
            <Button
              leftSection={<IconBrandGithub size={18} />}
              color="dark"
              onClick={() => console.log("Đăng nhập bằng GitHub")}
            >
              GitHub
            </Button>
          </Group>
        </Box>
      </Box>
    </DefaultHeader>
  );
};

export default Login;
