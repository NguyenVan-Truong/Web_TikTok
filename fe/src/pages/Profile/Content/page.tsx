import { Paper, Tabs, Box } from "@mantine/core";
import {
  IconHeart,
  IconLock,
  IconMenu2,
  IconPhoto,
  IconRefresh,
} from "@tabler/icons-react";
import React, { useState } from "react";
import LovePage from "./ContentLove/page";
import ReportPage from "./ContentRepost/page";
import PrivatePage from "./ContentPrivate/page";
import RestorePage from "./ContentRestore/page";
import HomePage from "./ContentHome/page";

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState<string | null>("LovePage");

  return (
    <>
      <Paper className="flex justify-center items-center">
        <Tabs color="black" value={activeTab} onChange={setActiveTab}>
          <Tabs.List className="flex justify-center items-center space-x-5 sticky top-0 z-50 bg-white">
            <Tabs.Tab
              value="HomePage"
              className={
                activeTab === "HomePage"
                  ? "font-bold text-black"
                  : "text-gray-500"
              }
            >
              <IconMenu2 />
            </Tabs.Tab>
            <Tabs.Tab
              value="PrivatePage"
              className={
                activeTab === "PrivatePage"
                  ? "font-bold text-black"
                  : "text-gray-500"
              }
            >
              <IconLock />
            </Tabs.Tab>
            <Tabs.Tab
              value="RestorePage"
              className={
                activeTab === "RestorePage"
                  ? "font-bold text-black"
                  : "text-gray-500"
              }
            >
              <IconRefresh />
            </Tabs.Tab>
            <Tabs.Tab
              value="LovePage"
              className={
                activeTab === "LovePage"
                  ? "font-bold text-black"
                  : "text-gray-500"
              }
            >
              <IconHeart />
            </Tabs.Tab>
            <Tabs.Tab
              value="ReportPage"
              className={
                activeTab === "ReportPage"
                  ? "font-bold text-black"
                  : "text-gray-500"
              }
            >
              <IconPhoto />
            </Tabs.Tab>
          </Tabs.List>

          <Box className="w-[450px] mt-1">
            <Tabs.Panel value="HomePage">
              {activeTab === "HomePage" ? <HomePage /> : <></>}
            </Tabs.Panel>
            <Tabs.Panel value="PrivatePage">
              {activeTab === "PrivatePage" ? <PrivatePage /> : <></>}
            </Tabs.Panel>
            <Tabs.Panel value="RestorePage">
              {activeTab === "RestorePage" ? <RestorePage /> : <></>}
            </Tabs.Panel>
            <Tabs.Panel value="LovePage">
              {activeTab === "LovePage" ? <LovePage /> : <></>}
            </Tabs.Panel>
            <Tabs.Panel value="ReportPage">
              {activeTab === "ReportPage" ? <ReportPage /> : <></>}
            </Tabs.Panel>
          </Box>
        </Tabs>
      </Paper>
    </>
  );
};

export default ContentPage;
