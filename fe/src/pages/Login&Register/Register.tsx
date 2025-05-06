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
const Register = () => {
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
          Đăng ký tài khoản của bạn
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
            placeholder="ký mật khẩu"
            withAsterisk
            {...form.getInputProps("password")}
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
            Đăng ký
          </Button>

          <Divider my="md" label="Hoặc đăng ký bằng" labelPosition="center" />

          <Group grow>
            <Button
              leftSection={<IconBrandGoogle size={18} />}
              variant="default"
              color="gray"
              onClick={() => console.log("Đăng ký bằng Google")}
            >
              Google
            </Button>
            <Button
              leftSection={<IconBrandFacebook size={18} />}
              color="blue"
              onClick={() => console.log("Đăng ký bằng Facebook")}
            >
              Facebook
            </Button>
            <Button
              leftSection={<IconBrandGithub size={18} />}
              color="dark"
              onClick={() => console.log("Đăng ký bằng GitHub")}
            >
              GitHub
            </Button>
          </Group>
        </Box>
      </Box>
    </DefaultHeader>
  );
};

export default Register;
